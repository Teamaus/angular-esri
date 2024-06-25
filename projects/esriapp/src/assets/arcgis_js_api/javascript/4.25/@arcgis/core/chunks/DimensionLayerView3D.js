/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as s}from"./tslib.es6.js";import{c as i}from"./asyncUtils.js";import e from"../core/Error.js";import{i as r,d as t,f as o,a}from"./maybe.js";import{isAborted as n,createAbortError as l}from"../core/promiseUtils.js";import{watch as p,syncAndInitial as m}from"../core/reactiveUtils.js";import{property as y}from"../core/accessorSupport/decorators/property.js";import{subclass as c}from"../core/accessorSupport/decorators/subclass.js";import{L as j}from"./LayerView3D.js";import w from"../views/layers/DimensionLayerView.js";import h from"../views/layers/LayerView.js";import"../core/Accessor.js";import"../core/Handles.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"../core/lang.js";import"./metadata.js";import"./object.js";import"./Logger.js";import"../config.js";import"./string.js";import"./ArrayPool.js";import"./tracking.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"./ensureType.js";import"./heightModelInfoUtils.js";import"../geometry/HeightModelInfo.js";import"./jsonMap.js";import"../core/JSONSupport.js";import"./unitUtils.js";import"./projectionEllipsoid.js";import"../geometry/SpatialReference.js";import"./writer.js";import"./Ellipsoid.js";import"./reader.js";import"./arcgisLayerUrl.js";import"../core/urlUtils.js";import"./persistableUrlUtils.js";import"../core/Collection.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"../core/HandleOwner.js";import"./WatchUpdatingTracking.js";import"../core/Identifiable.js";import"../core/Promise.js";let d=class extends(j(w(h))){constructor(s){super(s),this.type="dimension-3d",this._analysisModule=null}initialize(){this.handles.add(p((()=>this.layer.source),(s=>{this._destroyAnalysisView(),r(s)&&this._createAnalysisView(s)}),m),"analysis-view-handles")}destroy(){this.handles.remove("analysis-view-handles"),this._destroyAnalysisView()}isUpdating(){return r(this._createAnalysisViewTask)||r(this.analysisView)&&this.analysisView.updating}async whenAnalysisView(){if(r(this.analysisView))return this.analysisView;if(r(this._createAnalysisViewTask))return this._createAnalysisViewTask.promise;throw new e("layerview:no-analysisview-for-analysis","The analysis has not been set on the DimensionLayer of this layer view")}_createAnalysisView(s){const e=i((async i=>(this.analysisView=await this._createAnalysisViewPromise(s,i),this._createAnalysisViewTask===e&&(this._createAnalysisViewTask=null),this.analysisView)));this.addResolvingPromise(e.promise),this._createAnalysisViewTask=e}_destroyAnalysisView(){this.analysisView=t(this.analysisView),this._createAnalysisViewTask=o(this._createAnalysisViewTask)}async _createAnalysisViewPromise(s,i){let e=this._analysisModule;if(a(e)){const s=await this._loadAnalysisModule();this._analysisModule=s,e=s}const r=new e.default({analysis:s,view:this.view,parent:this});if(await r.when(),n(i))throw r.destroy(),l();return r}_loadAnalysisModule(){return import("./DimensionAnalysisView3D.js")}};s([y()],d.prototype,"type",void 0),s([y()],d.prototype,"analysisView",void 0),s([y()],d.prototype,"_createAnalysisViewTask",void 0),d=s([c("esri.views.3d.layers.DimensionLayerView3D")],d);const V=d;export{V as default};
