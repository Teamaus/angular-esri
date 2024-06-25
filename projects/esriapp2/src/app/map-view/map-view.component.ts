import { Component, ComponentFactory, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';
import esriconfig from '@arcgis/core/config'
import { CustomContent } from '@arcgis/core/popup/content';
import { MyButtonComponent } from '../my-button/my-button.component';

@Component({
  selector: 'tw-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  constructor(private viewContainerRef:ViewContainerRef,private resolver:ComponentFactoryResolver) { }

  ngOnInit(): void {
    //https://esri-map-02.citylab.local
    //esriconfig.portalUrl = "https://esri-map-02.citylab.local/"
    const webmap = new WebMap({
      portalItem: { // autocasts as new PortalItem()
       // id: '3aceb640d2b84e988bf69167ae9237a7'
       id:'f2e9b762544945f390ca4ac3671cfa72'
      }
    });
   
    console.log("WEBMAP",webmap)
    // and we show that map in a container w/ id #viewDiv
    const view = new MapView({
      map: webmap,
      container: 'viewDiv',
      
    });
    view.when(()=>{
      const layer  = webmap.layers.getItemAt(0);
      let factory = this.resolver.resolveComponentFactory(MyButtonComponent)
      let componentRef = this.viewContainerRef.createComponent(factory)
      let container = document.createElement("div")
      container.appendChild((componentRef.hostView as any).rootNodes[0]);
      let popupTemplate = (layer as any).popupTemplate

      
      let content = new CustomContent({creator:()=>container})
      let pContent:any[] = [content,...popupTemplate.content]
     // pContent.push(content)
      popupTemplate.content = pContent
      
    })

  }

}
