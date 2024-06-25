import { Component, Inject } from '@angular/core';
import { MFPDVService } from './mfpdv.service';
import {HttpClient} from '@angular/common/http'
import { ESRI_MAP_CONFIG, ESRI_MAP_TYPES, ESRI_WEBMAP } from './map-view/MAPTYPES';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'esriapp';
  constructor(private pdvService:MFPDVService,private httpClient:HttpClient,
    @Inject(ESRI_WEBMAP) private webMap:any){
      
      
      
      this.pdvService.getData(["F8","F8"]).subscribe(data=>console.log("DDD",data))
      
      
  }
  async getMap(){
    var m = await  this.webMap
    return new m[0]()
  }
  
  async ngOnInit(){
      console.log("AAAA")
      var m = await this.getMap()
     console.log(">>>>",m)
     
      
  }
}
