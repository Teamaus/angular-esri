import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import { ControlValueAccessor } from '@angular/forms';

import  {SimpleMarkerSymbol}  from '@arcgis/core/symbols';
import  {Point}  from '@arcgis/core/geometry';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import { loadModules, setDefaultOptions } from 'esri-loader';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import { ESRI_MAP_TYPES } from './MAPTYPES';

//import { SimpleRenderer } from 'esri/renderers';

export type BaseMap = {basemap:any}


@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {
  @ViewChild('mapViewNode', { static: true }) private mapViewEl: ElementRef | undefined;

  constructor() {
     
   }
 
  async ngOnInit(): Promise<any> {
   
    setDefaultOptions({url:"assets/arcgis_js_api/javascript/4.25/init.js"})
    let [esriConfig,Portal,MapView, WebMap,IdentityManager,urlUtil] = 
    await loadModules(['esri/config','esri/portal/Portal','esri/views/MapView', 'esri/WebMap','esri/identity/IdentityManager','esri/core/urlUtils'])
  
    

    
    console.log("LOCALE:",esriConfig.request.locale)
    //esriConfig.request.forceProxy = true
    console.log("Esri config",esriConfig)
    //esriConfig.request.proxyUrl="AAA"
    
    // then we load a web map from an id
    
    console.log("ESRICONFIG",esriConfig)
    const webmap = new WebMap({
      portalItem: { // autocasts as new PortalItem()
        id: 'f2e9b762544945f390ca4ac3671cfa72'
      }
    });
    console.log("WEBMAP",webmap)
    // and we show that map in a container w/ id #viewDiv
    const view = new MapView({
      map: webmap,
      container: 'viewDiv'
    });
    console.log("WEBMAP",webmap)
    webmap.when(()=> {
      // Get the basemap from the WebMap
      var basemap = webmap.basemap;
      
      // Display the basemap URL
      console.log("Basemap URL:", basemap.baseLayers)
      //this.addLayer(webmap);
        });
      }
  addLayer(map:any){
    /*
    var renderer = new SimpleRenderer({
      symbol: function(feature:any) {
        // Check the state_code attribute value
        if (feature.attributes.state_code === 1) {
          return greenFillSymbol; // return green symbol for state 1
        } else if (feature.attributes.state_code === 2) {
          return redFillSymbol; // return red symbol for state 2
        }
      }
    });
    */
    const featureLayer = new FeatureLayer({});

    map.add(featureLayer);
  }


  addSymbole(){
    var graphicsLayer = new GraphicsLayer();

    var symbol = new SimpleMarkerSymbol({
      color: [226, 119, 40],
      outline: {
        color: [255, 255, 255],
        width: 1
      }
    });

    var point = new Point({
      longitude: -118.244,
      latitude: 34.052
    });
    
  }
}

