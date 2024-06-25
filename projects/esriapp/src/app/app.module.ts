import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapViewComponent } from './map-view/map-view.component';
import { AdapterComponent } from './adapter/adapter.component';
import {HttpClientModule } from '@angular/common/http';
import { A1Component } from './a1/a1.component';
import { A2Directive } from './a2.directive';
import { B1Component } from './b1/b1.component';
import { D1Directive } from './d1.directive';
import { loadModules } from 'esri-loader';
import { ESRI_MAP_CONFIG, ESRI_MAP_TYPES, ESRI_WEBMAP } from './map-view/MAPTYPES';
export function getTypes(){
  var retval =   loadModules(['esri/config','esri/portal/Portal','esri/views/MapView', 'esri/WebMap','esri/identity/IdentityManager','esri/core/urlUtils'])
  console.log("IN HERE.....>>>>")
  return  retval 
}
@NgModule({
  declarations: [
    AppComponent,
    MapViewComponent,
    AdapterComponent,
    A1Component,
    A2Directive,
    B1Component,
    D1Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide:ESRI_MAP_CONFIG,useFactory:()=> loadModules(['esri/config'])},
    {provide:ESRI_WEBMAP,useFactory:()=> loadModules(['esri/WebMap'])},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
