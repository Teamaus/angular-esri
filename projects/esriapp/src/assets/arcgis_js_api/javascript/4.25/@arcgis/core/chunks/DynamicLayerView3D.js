/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import{f as t,r as i}from"./asyncUtils.js";import{m as r}from"./handleUtils.js";import{L as a}from"./Logger.js";import{a as s,i as n}from"./maybe.js";import{debounce as o,isAbortError as l,eachAlways as h,onAbort as d,isAborted as c,createAbortError as m,throwIfAborted as g}from"../core/promiseUtils.js";import{whenOnce as u}from"../core/reactiveUtils.js";import{property as p}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as f}from"../core/accessorSupport/decorators/subclass.js";import y from"../geometry/Extent.js";import{w,q as x,i as _,f as R,c as v,a as S,x as b}from"./aaBoundingRect.js";import{L as E,j as A,R as I}from"./line2.js";import{L as j}from"./LayerView3D.js";import{d as C,l as L}from"./bufferWriterUtils.js";import{d as M}from"./GeometryUtil.js";import{V as D}from"./VertexAttribute.js";import{t as O}from"./projectExtentUtils.js";import{d as T}from"./debugFlags.js";import{O as P}from"./interfaces4.js";import{U as G}from"./basicInterfaces.js";import{I as U}from"./ImageMaterial.js";import N from"../views/layers/LayerView.js";import{R as V}from"./RefreshableLayerView.js";import{i as z}from"./layerViewUtils.js";import{b as H}from"./enums3.js";function F(e){return M([[e[0],e[1],-1],[e[2],e[1],-1],[e[2],e[3],-1],[e[0],e[3],-1]])}const q=[0,0,1];let W=class extends(V(j(N))){constructor(){super(...arguments),this.drapeSourceType=E.RasterImage,this.updatePolicy=G.SYNC,this.fullExtentInLocalViewSpatialReference=null,this.maximumDataResolution=null,this._images=new Array,this._extents=new Array,this._overlays=new Array,this.updateWhenStationary=!0,this._drapeSourceRenderer=null,this.refreshDebounced=o((async e=>{this.destroyed||await this._doRefresh(e).catch((e=>{l(e)||a.getLogger(this.declaredClass).error(e)}))}),2e3)}initialize(){this._drapeSourceRenderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this),this.handles.add(r((()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this)))),this.addResolvingPromise(O(this).then((e=>this._set("fullExtentInLocalViewSpatialReference",e)))),this.updatingHandles.add((()=>this.suspended),(()=>this._suspendedChangeHandler())),this.handles.add(this.view.resourceController.scheduler.registerIdleStateCallbacks((()=>{this._isScaleRangeActive()&&this.notifyChange("suspended")}),(()=>{}))),this._isScaleRangeLayer()&&this.updatingHandles.add((()=>this.layer.effectiveScaleRange),(()=>this.notifyChange("suspended")))}destroy(){this.clear()}setDrapingExtent(e,t){this._spatialReference=t,e.forEach((e=>{this._overlays[e.index]=e,this._updateImageExtent(e)}))}_updateImageExtent(e){const t=this._clippedExtent(e.extent,k);if(s(t))return;const i=function(e,t,i){const r=w(e)/x(e),a={width:i,height:i};return r>1.0001?a.height=i/r:r<.9999&&(a.width=i*r),a.width=Math.round(a.width/(w(e)/w(t))),a.height=Math.round(a.height/(x(e)/x(t))),a}(e.extent,t,e.resolution);let r=e.pixelRatio*this.view.state.pixelRatio;if("imageMaxWidth"in this.layer||"imageMaxHeight"in this.layer){const e=this.layer.imageMaxWidth,t=this.layer.imageMaxHeight;if(i.width>e){const t=e/i.width;i.height=Math.floor(i.height*t),i.width=e,r*=t}if(i.height>t){const e=t/i.height;i.width=Math.floor(i.width*e),i.height=t,r*=e}}const n=this._extents[e.index];n&&R(n.extent,t)&&this._imageSizeEquals(t,n.imageSize,i)||(this._extents[e.index]={extent:v(t),imageSize:i,pixelRatio:r},this.suspended||this._fetch(e.index).catch((e=>{l(e)||a.getLogger(this.declaredClass).error(e)})))}clear(){for(let e=0;e<this._images.length;e++)this._clearImage(e)}async doRefresh(){return this._doRefresh()}async _doRefresh(e){if(this.suspended)return;const t=[];for(let i=0;i<this._extents.length;i++)this._extents[i]&&t.push(this._fetch(i,e));await h(t)}canResume(){if(!super.canResume())return!1;const e=this.layer;if(this._isScaleRangeActive()){const{minScale:t,maxScale:i}=e.effectiveScaleRange,r=this.view.scale;if(r<i||t>0&&r>t)return!1}return!0}isUpdating(){return this._images.some((e=>!!e.loadingPromise))}async processResult(e,t,i){(t instanceof HTMLImageElement||t instanceof HTMLCanvasElement)&&(e.image=t)}findExtentInfoAt(e){for(const t of this._extents){const i=t.extent;if(new y(i[0],i[1],i[2],i[3],this._spatialReference).contains(e))return t}return null}getFetchOptions(){}async redraw(e,i){await t(this._images,(async(t,r)=>{t&&(await e(t,i),await this._createStageObjects(r,t.image,i))}))}_imageSizeEquals(e,t,i){if(!this.maximumDataResolution)return!1;const r=w(e)/this.maximumDataResolution.x,a=x(e)/this.maximumDataResolution.y,s=r/t.width,n=a/t.height,o=r/i.width,l=a/i.height,h=Math.abs(s-o),d=Math.abs(n-l),c=T.TESTS_DISABLE_OPTIMIZATIONS?0:1.5;return h<=c&&d<=c}async _fetch(e,t){if(this.suspended)return;const i=this._extents[e],r=i.extent;this._images[e]||(this._images[e]={texture:null,material:null,renderGeometry:null,loadingPromise:null,loadingAbortController:null,image:null,pixelData:null,renderExtent:v(r)});const s=this._images[e];s.loadingAbortController&&(s.loadingAbortController.abort(),s.loadingAbortController=null);const n=new y(r[0],r[1],r[2],r[3],this._spatialReference);if(0===n.width||0===n.height)return void this._clearImage(e);const o=new AbortController;s.loadingAbortController=o,d(t,(()=>o.abort()));const h=o.signal,g=this._waitFetchReady(h).then((async()=>{const t={requestAsImageElement:!0,pixelRatio:this._overlays[e].pixelRatio,...this.getFetchOptions(),signal:h},{height:r,width:a}=i.imageSize;return this.layer.fetchImage(n,a,r,t)})).then((e=>{if(c(h))throw a.getLogger(this.declaredClass).warnOnce("A call to fetchImage resolved even though the request was aborted. fetchImage should not resolve if options.signal.aborted is true."),m();return this.processResult(s,e)})).then((()=>{S(s.renderExtent,r)})).finally((()=>{g===s.loadingPromise&&(s.loadingPromise=null,s.loadingAbortController=null)}));s.loadingPromise=g,this.notifyChange("updating"),await g.then((async()=>{if(h.aborted)throw m();await this._createStageObjects(e,s.image,h),this.notifyChange("updating")})).catch((e=>{throw e&&!l(e)&&a.getLogger(this.declaredClass).error(e),this.notifyChange("updating"),e}))}_clearImage(e){const t=this._images[e];if(t){n(t.renderGeometry)&&(this._drapeSourceRenderer.removeGeometries([t.renderGeometry],A.UPDATE),t.renderGeometry=null);const e=this.view._stage;e.remove(t.texture),t.texture=null,e.remove(t.material),t.material=null,t.loadingAbortController&&(t.loadingAbortController.abort(),t.loadingAbortController=null),t.loadingPromise=null,t.image=null,t.pixelData=null}}async _createStageObjects(e,t,r){const a=this.view._stage,o=this._images[e],l=()=>{a.remove(o.texture),o.texture=null,n(o.renderGeometry)&&(this._drapeSourceRenderer.removeGeometries([o.renderGeometry],A.UPDATE),o.renderGeometry=null)};if(t){const n=new L(t,{width:t.width,height:t.height,preMultiplyAlpha:!0,wrap:{s:H.CLAMP_TO_EDGE,t:H.CLAMP_TO_EDGE}});let h;if(await i(this._images[e===P.INNER?P.OUTER:P.INNER].loadingPromise),g(r),e===P.INNER)h=F(o.renderExtent);else{const e=this._images[0].renderExtent;if(!e)return void l();h=function(e,t){if(!_(e,t))return F(t);const i=[e[1]-t[1],Math.min(e[3],t[3])-Math.max(e[1],t[1]),t[3]-e[3],123456],r=[e[0]-t[0],Math.min(e[2],t[2])-Math.max(e[0],t[0]),t[2]-e[2],123456],a=t[2]-t[0],s=t[3]-t[1],n=r[0]>0&&r[2]>0?3:2,o=i[0]>0&&i[2]>0?3:2,l=(o+1)*(n+1),h=new Float64Array(3*l),d=new Float32Array(2*l),c=new Array(6*(o*n-1));let m=0,g=0,u=0,p=0,f=0;for(let e=0;e<4;e++){const o=i[e];if(o<=0)continue;let l=0;for(let i=0;i<4;i++){const o=r[i];o<=0||(h[g++]=t[0]+l,h[g++]=t[1]+m,h[g++]=-1,d[u++]=l/a,d[u++]=m/s,i<3&&e<3&&(1!==i||1!==e)&&(c[f++]=p,c[f++]=p+1,c[f++]=p+n+1,c[f++]=p+1,c[f++]=p+n+2,c[f++]=p+n+1),p++,l+=o)}m+=o}const y=new Array(c.length);return new C([[D.POSITION,{size:3,data:h,exclusive:!0}],[D.NORMAL,{size:3,data:q,exclusive:!0}],[D.UV0,{size:2,data:d,exclusive:!0}]],[[D.POSITION,c],[D.NORMAL,y],[D.UV0,c]])}(e,o.renderExtent)}l(),a.add(n),await a.loadImmediate(n),o.texture=n,s(o.material)?(o.material=new U({transparent:!0,textureId:n.id}),a.add(o.material)):o.material.setParameters({textureId:n.id}),o.renderGeometry=new I(h,o.material),o.renderGeometry.origin=this._overlays[e].renderLocalOrigin,this._drapeSourceRenderer.addGeometries([o.renderGeometry],A.UPDATE)}else l(),a.remove(o.material),o.material=null}_isScaleRangeLayer(){return"effectiveScaleRange"in this.layer}_isScaleRangeActive(){const e=this.layer;if(!this._isScaleRangeLayer())return!1;const{minScale:t,maxScale:i}=e.effectiveScaleRange;return z(t,i)}_clippedExtent(e,t){if("local"!==this.view.viewingMode)return S(t,e);const i=this.view.basemapTerrain;return i.ready?b(e,i.extent,t):S(t,e)}_suspendedChangeHandler(){this.suspended?this.clear():this.refreshDebounced()}async _waitFetchReady(e){await u((()=>this.view.stationary),e),g(e)}};e([p()],W.prototype,"layer",void 0),e([p()],W.prototype,"suspended",void 0),e([p({readOnly:!0})],W.prototype,"fullExtentInLocalViewSpatialReference",void 0),e([p()],W.prototype,"updating",void 0),W=e([f("esri.views.3d.layers.DynamicLayerView3D")],W);const B=W,k=v();export{B as D};