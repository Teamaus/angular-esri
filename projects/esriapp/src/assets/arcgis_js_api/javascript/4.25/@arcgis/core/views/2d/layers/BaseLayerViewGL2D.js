/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as e}from"../../../chunks/tslib.es6.js";import{property as t}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/ensureType.js";import{subclass as s}from"../../../core/accessorSupport/decorators/subclass.js";import{e as r}from"../../../chunks/earcut.js";import{c as o}from"../../../chunks/aaBoundingRect.js";import{c as i}from"../../../geometry/Polygon.js";import{a as n}from"../../../chunks/normalizeUtilsSync.js";import{e as c}from"../../../geometry/SpatialReference.js";import{c as a,p}from"../../../chunks/projectionSupport.js";import"../../../chunks/TileStrategy.js";import{T as m}from"../../../chunks/TileInfoView.js";import"../../../chunks/TileKey2.js";import{T as h}from"../../../chunks/definitions.js";import{L as l}from"../../../chunks/TurboLine.js";import{L as u}from"../../../chunks/LayerView2D.js";import d from"../ViewState.js";import{C as f}from"../../../chunks/Container.js";import{W as j}from"../../../chunks/enums4.js";import{a as y}from"../../../chunks/util.js";import g from"../../layers/LayerView.js";import{R as x}from"../../../chunks/RefreshableLayerView.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/object.js";import"../../../chunks/maybe.js";import"../../../chunks/string.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../core/Error.js";import"../../../chunks/tracking.js";import"../../../chunks/mathUtils.js";import"../../../chunks/vec3.js";import"../../../chunks/common.js";import"../../../geometry/Extent.js";import"../../../geometry/Geometry.js";import"../../../core/JSONSupport.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../core/promiseUtils.js";import"../../../chunks/reader.js";import"../../../chunks/writer.js";import"../../../geometry/Point.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../chunks/Ellipsoid.js";import"../../../chunks/extentUtils.js";import"../../../chunks/zmUtils.js";import"../../../geometry/support/jsonUtils.js";import"../../../geometry/Multipoint.js";import"../../../geometry/Polyline.js";import"../../../chunks/normalizeUtilsCommon.js";import"../../../geometry/projection.js";import"../../../chunks/unitUtils.js";import"../../../chunks/jsonMap.js";import"../../../chunks/projectionEllipsoid.js";import"../../../chunks/SimpleObservable.js";import"../../../chunks/mat4.js";import"../../../chunks/pe.js";import"../../../chunks/assets.js";import"../../../request.js";import"../../../kernel.js";import"../../../core/urlUtils.js";import"../../../chunks/geodesicConstants.js";import"../../../geometry/support/GeographicTransformation.js";import"../../../geometry/support/GeographicTransformationStep.js";import"../../../chunks/zscale.js";import"../../../chunks/json.js";import"../../../chunks/vec2.js";import"../../../chunks/QueueProcessor.js";import"../../../chunks/Queue.js";import"../../../chunks/enums.js";import"../../../core/Collection.js";import"../../../core/Evented.js";import"../../../chunks/shared.js";import"../../../chunks/collectionUtils.js";import"../../../core/reactiveUtils.js";import"../../../chunks/ClipRect.js";import"../../../geometry.js";import"../../../chunks/typeUtils.js";import"../../../Viewpoint.js";import"../../../Camera.js";import"../../../core/Clonable.js";import"../../../chunks/Cyclical.js";import"../../../chunks/mat2d.js";import"../../../chunks/mat2df32.js";import"../../../chunks/mat2df64.js";import"../../../chunks/mat3.js";import"../../../chunks/mat3f32.js";import"../../../chunks/vec2f32.js";import"../../../chunks/vec2f64.js";import"../../../chunks/EffectView.js";import"../../../chunks/parser.js";import"../../../chunks/colorUtils.js";import"../../../chunks/screenUtils.js";import"../../../chunks/mat4f32.js";import"../../../chunks/_commonjsHelpers.js";import"../../../chunks/DisplayObject.js";import"../../../core/HandleOwner.js";import"../../../chunks/WatchUpdatingTracking.js";import"../../../core/Identifiable.js";import"../../../core/Promise.js";class k extends f{constructor(e){super(),this.layerView=e,this._childrenRenderParameters={context:null,pixelRatio:1,state:new d,stationary:!0,painter:null},this._name=this.constructor.name,this.requestRender=this.requestRender.bind(this)}doRender(e){if(e.drawPhase!==j.MAP)return;const t=window.devicePixelRatio,{stationary:s,context:r,painter:o,profiler:i}=e,n=this._childrenRenderParameters;n.context=r.gl,n.state.copy(e.state),n.state.pixelRatio=t,n.stationary=s,n.painter=o;const c=this.createRenderParams(e);o.beforeRenderLayer(c,this.clips?255:0,c.globalOpacity),i.recordContainerStart(this._name);const a=r.getBoundFramebufferObject(),p=r.getViewport();r.resetState(),r.bindFramebuffer(a),r.setViewport(p.x,p.y,p.width,p.height),this.layerView._renderTarget.framebuffer=a.glName,this.layerView._renderTarget.viewport[0]=p.x,this.layerView._renderTarget.viewport[1]=p.y,this.layerView._renderTarget.viewport[2]=p.width,this.layerView._renderTarget.viewport[3]=p.height,this.layerView.render(n),r.enforceState(),o.compositeLayer(c,c.globalOpacity),i.recordContainerEnd()}createRenderParams(e){return{...e,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:e.globalOpacity*this.opacity,inFadeTransition:this.inFadeTransition}}}const w=new Set,v=[],T=[];class _{constructor(e,t,s,r,i,n,c,a=[0,0],p=o()){this.id=e,this.level=t,this.row=s,this.col=r,this.world=i,this.resolution=n,this.scale=c,this.coords=a,this.bounds=p}}let R=class extends(x(u(g))){constructor(e){super(e),this._tileMap=new Map,this.container=new k(this),this.layer=null,this.tiles=[],this._renderTarget={framebuffer:null,viewport:[0,0,0,0]}}get _tileInfoView(){const e=this.layer&&this.layer.tileInfo;return e?new m(e):null}get context(){return this.view._stage.context.gl}attach(){}detach(){}requestRender(){this.container.requestRender()}tilesChanged(e,t){}supportsSpatialReference(e){const t=this.layer?.tileInfo;return!t||c(t.spatialReference,e)}async doRefresh(){}isUpdating(){return!1}update(e){const t=this._tileInfoView,s=this.tiles;if(t){const r=t.getTileCoverage(e.state,0),{spans:o,lodInfo:i}=r,{level:n}=i;if(o.length)for(const{row:e,colFrom:t,colTo:r}of o)for(let o=t;o<=r;o++){const t=i.normalizeCol(o),r=i.getWorldForColumn(o),c=`${n}/${e}/${t}/${r}`;if(!this._tileMap.has(c)){const o=new _(c,n,e,t,r,i.resolution,i.scale);i.getTileCoords(o.coords,o,!1),i.getTileBounds(o.bounds,o,!0),this._tileMap.set(c,o),s.push(o),v.push(o)}w.add(c)}}for(let e=s.length-1;e>=0;e--){const t=s[e];w.has(t.id)||(s.splice(e,1),T.push(t),this._tileMap.delete(t.id))}(v.length||T.length)&&(this.tilesChanged(v,T),v.length=T.length=0),w.clear(),this.requestRender()}moveStart(){}viewChange(){this.requestUpdate()}moveEnd(){}bindRenderTarget(){this.context.bindFramebuffer(this.context.FRAMEBUFFER,this._renderTarget.framebuffer),this.context.viewport(this._renderTarget.viewport[0],this._renderTarget.viewport[1],this._renderTarget.viewport[2],this._renderTarget.viewport[3])}getRenderTarget(){return this._renderTarget}async tessellateExtent(e){const t={vertices:[],indices:[]},s=await this._projectAndNormalizeGeometry(e),r=t.vertices.length;return t.vertices.push({x:s.xmin,y:s.ymin,xOffset:0,yOffset:0,uTexcoord:0,vTexcoord:0,distance:0}),t.vertices.push({x:s.xmax,y:s.ymin,xOffset:0,yOffset:0,uTexcoord:1,vTexcoord:0,distance:0}),t.vertices.push({x:s.xmin,y:s.ymax,xOffset:0,yOffset:0,uTexcoord:0,vTexcoord:1,distance:0}),t.vertices.push({x:s.xmax,y:s.ymax,xOffset:0,yOffset:0,uTexcoord:1,vTexcoord:1,distance:0}),t.indices.push(r+0,r+1,r+2,r+1,r+3,r+2),t}async tessellatePoint(e,t){const s=await this._projectAndNormalizeGeometry(e);return this._tessellatePoints([s],t)}async tessellateMultipoint(e,t){const s=await this._projectAndNormalizeGeometry(e),r=s.points.map((e=>({x:e[0],y:e[1],spatialReference:s.spatialReference})));return this._tessellatePoints(r,t)}async _tessellatePoints(e,t){const s={vertices:[],indices:[]};for(const r of e){const e=s.vertices.length;s.vertices.push({x:r.x,y:r.y,xOffset:t.x,yOffset:t.y+t.height,uTexcoord:0,vTexcoord:0,distance:0}),s.vertices.push({x:r.x,y:r.y,xOffset:t.x+t.width,yOffset:t.y+t.height,uTexcoord:1,vTexcoord:0,distance:0}),s.vertices.push({x:r.x,y:r.y,xOffset:t.x,yOffset:t.y,uTexcoord:0,vTexcoord:1,distance:0}),s.vertices.push({x:r.x,y:r.y,xOffset:t.x+t.width,yOffset:t.y,uTexcoord:1,vTexcoord:1,distance:0}),s.indices.push(e+0,e+1,e+2,e+1,e+3,e+2)}return s}async tessellatePolyline(e,t){const s={vertices:[],indices:[]},r=(await this._projectAndNormalizeGeometry(e)).paths;if(!r||!r.length)return s;let o;const i=new l(((e,r,i,n,c,a,p,m,h,l,u)=>{const d=s.vertices.length;return s.vertices.push({x:e,y:-r,xOffset:p*t/2,yOffset:m*t/2,uTexcoord:u/o,vTexcoord:(l+1)/2,distance:u}),d}),((e,t,r)=>{s.indices.push(e,t,r)}),!0);for(const e of r){o=0;for(let t=1;t<e.length;++t){const s=e[t][0]-e[t-1][0],r=e[t][1]-e[t-1][1];o+=Math.sqrt(s*s+r*r)}const t=e.map((e=>({x:e[0],y:-e[1]})));i.tessellate(t,b)}return s}async tessellatePolygon(e){const t={vertices:[],indices:[]},s=await this._projectAndNormalizeGeometry(e),r=s.rings;if(!r||!r.length)return t;i(s);for(const e of s.rings)for(const t of e)t[1]=-t[1];let o=1/0,n=1/0,c=-1/0,a=-1/0;return y(s.rings,(()=>{}),((e,t,s)=>{for(let r=e;r<t;r+=2)o=Math.min(o,s[r]),n=Math.min(n,s[r+1]),c=Math.max(c,s[r]),a=Math.max(a,s[r+1])})),y(s.rings,(()=>{}),((e,s,r,i)=>{this._invokeEarcut(t,e,s,r,i,[o,n,c,a])})),t}_invokeEarcut(e,t,s,o,i,n){const c=o.slice(t,s),a=r(c,i,2),p=e.vertices.length;for(let t=0;t<c.length;t+=2){const s=c[t],r=c[t+1];e.vertices.push({x:s,y:-r,xOffset:0,yOffset:0,uTexcoord:(s-n[0])/(n[2]-n[0]),vTexcoord:1-(r-n[1])/(n[3]-n[1]),distance:0})}for(let t=0;t<a.length;++t)e.indices.push(p+a[t])}async _projectAndNormalizeGeometry(e){await a(e.spatialReference,this.view.spatialReference);const t=n(e);return p(t,e.spatialReference,this.view.spatialReference)}};e([t()],R.prototype,"_tileInfoView",null),e([t()],R.prototype,"layer",void 0),e([t()],R.prototype,"context",null),R=e([s("esri.views.2d.layers.BaseLayerViewGL2D")],R);const b={pixelCoordRatio:1,wrapDistance:1e11,halfWidth:h+1,initialDistance:0,textured:!0,offset:0},O=R;export{O as default};
