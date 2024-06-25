/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as s}from"./tslib.es6.js";import{c as i}from"./asyncUtils.js";import e from"../core/Error.js";import{i as t,d as r,f as a,a as o}from"./maybe.js";import{isAborted as n}from"../core/promiseUtils.js";import{watch as l,syncAndInitial as p}from"../core/reactiveUtils.js";import{property as y}from"../core/accessorSupport/decorators/property.js";import{subclass as m}from"../core/accessorSupport/decorators/subclass.js";import{L as c}from"./LayerView3D.js";import h from"../views/layers/LayerView.js";import"../core/Accessor.js";import"../core/Handles.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"../core/lang.js";import"./metadata.js";import"./object.js";import"./Logger.js";import"../config.js";import"./string.js";import"./ArrayPool.js";import"./tracking.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"./ensureType.js";import"./heightModelInfoUtils.js";import"../geometry/HeightModelInfo.js";import"./jsonMap.js";import"../core/JSONSupport.js";import"./unitUtils.js";import"./projectionEllipsoid.js";import"../geometry/SpatialReference.js";import"./writer.js";import"./Ellipsoid.js";import"./reader.js";import"./arcgisLayerUrl.js";import"../core/urlUtils.js";import"./persistableUrlUtils.js";import"../core/Evented.js";import"../core/HandleOwner.js";import"./WatchUpdatingTracking.js";import"../core/Identifiable.js";import"../core/Promise.js";let w=class extends(c(h)){constructor(s){super(s),this.type="line-of-sight-3d",this._analysisModule=null}initialize(){this.handles.add(l((()=>this.layer.analysis),(s=>{this._destroyAnalysisView(),t(s)&&this._createAnalysisView(s)}),p),"analysis-view-handles")}destroy(){this.handles.remove("analysis-view-handles"),this._destroyAnalysisView()}async whenAnalysisView(){if(t(this.analysisView))return this.analysisView;if(t(this._createAnalysisViewTask))return this._createAnalysisViewTask.promise;throw new e("layerview:no-analysisview-for-analysis","The analysis has not been set on the LineOfSightLayer of this layer view")}isUpdating(){return t(this._createAnalysisViewTask)||t(this.analysisView)&&this.analysisView.updating}_createAnalysisView(s){const e=i((async i=>(this.analysisView=await this._createAnalysisViewPromise(s,i),this._createAnalysisViewTask===e&&(this._createAnalysisViewTask=null),this.analysisView)));this._createAnalysisViewTask=e}_destroyAnalysisView(){this.analysisView=r(this.analysisView),this._createAnalysisViewTask=a(this._createAnalysisViewTask)}async _createAnalysisViewPromise(s,i){let t=this._analysisModule;if(o(t)){const s=await this._loadAnalysisModule();this._analysisModule=s,t=s}const r=new t.default({analysis:s,view:this.view,parent:this});if(await r.when(),n(i))throw r.destroy(),new e("layerview:no-analysisview-for-analysis","The analysis has not been added to the LineOfSightLayer of this layer view",{analysis:s});return r}_loadAnalysisModule(){return import("../views/3d/analysis/LineOfSightAnalysisView3D.js")}};s([y()],w.prototype,"type",void 0),s([y()],w.prototype,"layer",void 0),s([y()],w.prototype,"analysisView",void 0),s([y()],w.prototype,"_createAnalysisViewTask",void 0),w=s([m("esri.views.3d.layers.LineOfSightLayerView3D")],w);const d=w;export{d as default};