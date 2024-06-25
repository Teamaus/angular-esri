// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../Graphic ../../../../core/Collection ../../../../core/HandleOwner ../../../../core/handleUtils ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../core/accessorSupport/diffUtils ../../../../layers/Layer ../../../../layers/graphics/hydratedFeatures ../../../../renderers/support/renderingInfoUtils ../../../../rest/support/Query ../interfaces ./constants ./Graphics3DCore ./Graphics3DElevationAlignment ./Graphics3DFrustumVisibility ./Graphics3DObjectStates ./Graphics3DScaleVisibility ./graphicUtils ../../webgl-engine/lib/basicInterfaces".split(" "),
function(c,q,d,r,w,x,y,k,z,m,e,N,O,A,B,C,D,t,E,F,G,H,I,J,K,L,M,n){c.GraphicsProcessor=function(u){function p(a){a=u.call(this,a)||this;a.type="graphics-3d";a.graphicsCore=null;a.drapeSourceType=F.DrapeSourceType.Features;a.scaleVisibilityEnabled=!1;a.frustumVisibilityEnabled=!1;a._suspendResumeExtent=null;return a}q._inheritsLoose(p,u);var h=p.prototype;h.initialize=function(){const {layer:a}=this,b="effectiveScaleRange"in a?a:null;var f=this.scaleVisibilityEnabled&&k.isSome(b);f=new H.Graphics3DCore({owner:this,
layer:this.owner.layer,preferredUpdatePolicy:n.UpdatePolicy.SYNC,graphicSymbolSupported:!0,componentFactories:{elevationAlignment:(g,l)=>new I({graphicsCoreOwner:this,graphicsCore:g,queryGraphicUIDsInExtent:l,elevationProvider:this.view.elevationProvider}),scaleVisibility:f?(g,l)=>new L({graphicsCoreOwner:this,layer:b,queryGraphicUIDsInExtent:l,graphicsCore:g,basemapTerrain:this.owner.view.basemapTerrain}):null,objectStates:g=>new K.Graphics3DObjectStates(g)}});this._set("graphicsCore",f);this.frustumVisibilityEnabled&&
this._set("frustumVisibility",new J({graphicsCoreOwner:this}));if("fullOpacity"in this.owner){const g=this.owner;this.updatingHandles.add(()=>g.fullOpacity,()=>this.graphicsCore.opacityChange())}"elevationInfo"in a&&this.updatingHandles.add(()=>a.elevationInfo,(g,l)=>{B.diff(g,l)&&this.updatingHandles.addPromise(this.graphicsCore.elevationInfoChange())});this._set("initializePromise",this._initializeAsync());this.updatingHandles.addPromise(this.initializePromise)};h._initializeAsync=function(){var a=
q._asyncToGenerator(function*(){try{yield this.graphicsCore.initializePromise}catch(b){if(z.isAbortError(b))return;throw b;}this.destroyed||(this.handles.add(m.watch(()=>this.view.clippingArea,()=>this._updateClippingExtent(),m.sync)),this._updateClippingExtent(),this._setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics())});return function(){return a.apply(this,arguments)}}();h.destroy=function(){this.handles.removeAll();this.updatingHandles.removeAll();this._set("frustumVisibility",
k.destroyMaybe(this.frustumVisibility));this._set("graphicsCore",k.destroyMaybe(this.graphicsCore))};h.notifyGraphicGeometryChanged=function(a){this.graphicsCore.notifyGraphicGeometryChanged(a)};h.notifyGraphicVisibilityChanged=function(a){this.graphicsCore.notifyGraphicVisibilityChanged(a)};h.getRenderingInfo=function(a,b,f){a=t.getRenderingInfo(a,{renderer:b,arcade:f});k.isSome(a)&&a.color&&(b=a.color,b[0]/=255,b[1]/=255,b[2]/=255);return a};h.getRenderingInfoAsync=function(a,b,f,g){return t.getRenderingInfoAsync(a,
{renderer:b,arcade:f,...g})};h.getHit=function(a){if(this.owner.loadedGraphics){var b=this.owner.loadedGraphics.find(f=>f.uid===a);if(b)return b=D.hydrateGraphic(b,this.layer instanceof C?this.layer:null),{type:"graphic",graphic:b,layer:b.layer}}return null};h.whenGraphicBounds=function(a,b){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(a,b):Promise.reject()};h.computeAttachmentOrigin=function(a,b){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(a,b):null};h.getSymbolLayerSize=
function(a,b){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(a,b):null};h.maskOccludee=function(a){const {set:b,handle:f}=this.objectStates.acquireSet(n.Object3DState.MaskOccludee,null);this.objectStates.setUid(b,a.uid);return f};h.highlight=function(a){if(a instanceof E)return v;if("number"===typeof a||a instanceof r)return this.highlight([a]);a instanceof w&&(a=a.toArray());if(Array.isArray(a)&&0<a.length){if(a[0]instanceof r){a=a.map(g=>g.uid);const {set:b,handle:f}=this.objectStates.acquireSet(n.Object3DState.Highlight,
null);this.objectStates.setUids(b,a);return f}if("number"===typeof a[0]){const {set:b,handle:f}=this.objectStates.acquireSet(n.Object3DState.Highlight,null);this.objectStates.setObjectIds(b,a);return f}}return v};h._setupSuspendResumeExtent=function(){const {scaleVisibility:a,frustumVisibility:b}=this;if(!k.isNone(a)||!k.isNone(b)){var f=({computedExtent:g,extentPadding:l})=>{this._suspendResumeExtent=M.enlargeExtent(g,this._suspendResumeExtent,G.SUSPEND_RESUME_EXTENT_OPTIMISM,l);k.isSome(a)&&a.setExtent(this._suspendResumeExtent);
k.isSome(b)&&b.setExtent(this._suspendResumeExtent)};this.handles.add(m.watch(()=>({computedExtent:this.graphicsCore?.computedExtent,extentPadding:this.graphicsCore?.extentPadding}),g=>f(g),m.syncAndInitial))}};h._updateClippingExtent=function(){this.graphicsCore.setClippingExtent(this.view.clippingArea,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()};q._createClass(p,[{key:"layer",get:function(){return this.owner.layer}},{key:"view",get:function(){return this.owner.view}},{key:"scaleVisibility",
get:function(){return this.graphicsCore?.scaleVisibility}},{key:"elevationAlignment",get:function(){return this.graphicsCore?.elevationAlignment}},{key:"objectStates",get:function(){return this.graphicsCore?.objectStates}},{key:"scaleVisibilitySuspended",get:function(){return!(!k.isSome(this.scaleVisibility)||!this.scaleVisibility.suspended)}},{key:"frustumVisibilitySuspended",get:function(){return k.isSome(this.frustumVisibility)&&this.frustumVisibility.suspended}},{key:"suspended",get:function(){return this.owner.suspended??
!1}},{key:"updating",get:function(){return!!(this.graphicsCore?.updating||k.isSome(this.scaleVisibility)&&this.scaleVisibility.updating||k.isSome(this.frustumVisibility)&&this.frustumVisibility.updating||this.updatingHandles.updating)}},{key:"graphics3DGraphics",get:function(){return this.graphicsCore?.graphics3DGraphics}},{key:"graphics3DGraphicsByObjectID",get:function(){return this.graphicsCore?.graphics3DGraphicsByObjectID}},{key:"loadedGraphics",get:function(){return this.owner.loadedGraphics}},
{key:"fullOpacity",get:function(){return this.owner.fullOpacity??1}},{key:"slicePlaneEnabled",get:function(){return this.owner.slicePlaneEnabled}},{key:"updatePolicy",get:function(){return this.owner.updatePolicy}}]);return p}(x.HandleOwner);d.__decorate([e.property()],c.GraphicsProcessor.prototype,"type",void 0);d.__decorate([e.property({constructOnly:!0})],c.GraphicsProcessor.prototype,"owner",void 0);d.__decorate([e.property()],c.GraphicsProcessor.prototype,"layer",null);d.__decorate([e.property()],
c.GraphicsProcessor.prototype,"view",null);d.__decorate([e.property({constructOnly:!0})],c.GraphicsProcessor.prototype,"graphicsCore",void 0);d.__decorate([e.property()],c.GraphicsProcessor.prototype,"scaleVisibility",null);d.__decorate([e.property({constructOnly:!0})],c.GraphicsProcessor.prototype,"frustumVisibility",void 0);d.__decorate([e.property()],c.GraphicsProcessor.prototype,"elevationAlignment",null);d.__decorate([e.property()],c.GraphicsProcessor.prototype,"objectStates",null);d.__decorate([e.property()],
c.GraphicsProcessor.prototype,"scaleVisibilitySuspended",null);d.__decorate([e.property({readOnly:!0})],c.GraphicsProcessor.prototype,"frustumVisibilitySuspended",null);d.__decorate([e.property()],c.GraphicsProcessor.prototype,"suspended",null);d.__decorate([e.property({readOnly:!0})],c.GraphicsProcessor.prototype,"updating",null);d.__decorate([e.property()],c.GraphicsProcessor.prototype,"loadedGraphics",null);d.__decorate([e.property()],c.GraphicsProcessor.prototype,"fullOpacity",null);d.__decorate([e.property()],
c.GraphicsProcessor.prototype,"slicePlaneEnabled",null);d.__decorate([e.property()],c.GraphicsProcessor.prototype,"drapeSourceType",void 0);d.__decorate([e.property()],c.GraphicsProcessor.prototype,"updatePolicy",null);d.__decorate([e.property({constructOnly:!0})],c.GraphicsProcessor.prototype,"scaleVisibilityEnabled",void 0);d.__decorate([e.property({constructOnly:!0})],c.GraphicsProcessor.prototype,"frustumVisibilityEnabled",void 0);d.__decorate([e.property()],c.GraphicsProcessor.prototype,"initializePromise",
void 0);c.GraphicsProcessor=d.__decorate([A.subclass("esri.views.3d.layers.graphics.GraphicsProcessor")],c.GraphicsProcessor);const v=y.makeHandle();Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});