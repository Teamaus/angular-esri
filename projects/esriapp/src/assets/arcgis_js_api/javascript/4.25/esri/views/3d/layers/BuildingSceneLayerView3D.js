// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../Graphic ../../../core/Accessor ../../../core/arrayUtils ../../../core/Collection ../../../core/handleUtils ../../../core/Logger ../../../core/maybe ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../layers/buildingSublayers/BuildingGroupSublayer ./BuildingComponentSublayerView3D ./BuildingSublayerView3D ./LayerView3D ./i3s/BuildingFilterUtil ./i3s/I3SUtil ../support/updatingProperties ../../layers/BuildingSceneLayerView".split(" "),
function(n,k,u,h,x,v,y,z,l,t,p,m,K,A,L,B,C,D,E,F,G,H){const I=C.BuildingSublayerView3DMixin(h);h=function(w){function q(a){a=w.call(this,a)||this;a.type="building-scene-3d";a.sublayerViews=new v;a._abortController=new AbortController;a._loadingComponents=0;a._pendingWhenSublayerViews=new Map;return a}n._inheritsLoose(q,w);var g=q.prototype;g.isUpdating=function(){return 0<this._loadingComponents||this.sublayerViews&&this.sublayerViews.some(a=>a.updating)};g.initialize=function(){F.checkSpatialReference(this.layer.spatialReference,
this.view.spatialReference,this.view.viewingMode);this._initializeSubLayerViews(this.layer.sublayers,this)};g.destroy=function(){this.sublayerViews&&(this.sublayerViews.forEach(a=>a.destroy()),this.sublayerViews=null);this._abortController=l.abortMaybe(this._abortController)};g._initializeSubLayerViews=function(a,b){const c=this,d=this.view;a.forEach(e=>{if(!e.isEmpty)if("building-group"===e.type){const f=new I({sublayer:e,view:d,parent:b});this._initializeSubLayerViews(e.sublayers,f)}else"mesh"===
e.geometryType&&(this._loadingComponents++,e.load({signal:this._abortController.signal}).then(()=>{const f=new B({sublayer:e,layerView:c,view:d,parent:b});this.sublayerViews.push(f);const r=this._pendingWhenSublayerViews.get(e);if(r){for(const J of r)J.resolve(f);this._pendingWhenSublayerViews.delete(e)}this.handles.add([p.watch(()=>f.updating,()=>this.notifyChange("updating"),p.syncAndInitial),p.watch(()=>f.updatingProgress,()=>this.notifyChange("updatingProgressValue"),p.syncAndInitial)])}).catch(f=>
{t.isAbortError(f)||z.getLogger(this.declaredClass).error(`Error while creating view for sublayer ${e.id}\nLayer: ${this.layer.url}\n`,f)}).then(()=>{this._loadingComponents--;this.notifyChange("updating");this.notifyChange("updatingProgressValue")}))})};g.getGraphicFromIntersectorTarget=function(a){for(const b of this.sublayerViews.items)if(b.sublayer.uid===a.sublayerUid)return b.getGraphicFromIntersectorTarget(a);return null};g.fetchPopupFeatures=function(){var a=n._asyncToGenerator(function*(b,
c){if(l.isNone(c)||!c.clientGraphics||0===c.clientGraphics.length)return[];var d=x.groupToMap(c.clientGraphics,f=>f.sourceLayer);const e=[];for(const [f,r]of d)d=this._findComponent(f),l.isSome(d)&&e.push(d.fetchPopupFeatures(b,{...c,clientGraphics:r}));return t.eachAlwaysValues(e).then(f=>f.flat())});return function(b,c){return a.apply(this,arguments)}}();g.whenGraphicBounds=function(a){const b=this._findComponent(a.sourceLayer);return l.isNone(b)?Promise.reject():b.whenGraphicBounds(a)};g.getAABBFromIntersectorTarget=
function(a){for(const b of this.sublayerViews.items)if(b.sublayer.uid===a.sublayerUid)return b.getAABBFromIntersectorTarget(a);return null};g.whenSublayerView=function(){var a=n._asyncToGenerator(function*(b){var c=this._findComponent(b);if(l.isSome(c))return c;c=this._pendingWhenSublayerViews.get(b);const d=t.createResolver();c?c.push(d):this._pendingWhenSublayerViews.set(b,[d]);return d.promise});return function(b){return a.apply(this,arguments)}}();g._findComponent=function(a){return this.sublayerViews.find(b=>
a===b.sublayer)};g.highlight=function(a){a instanceof u?a=[a]:a instanceof v&&(a=a.toArray());const b=[];if(Array.isArray(a)&&0<a.length&&a[0]instanceof u){const c=new Map;for(const d of a)a=c.get(d.sourceLayer),null==a&&(a=[],c.set(d.sourceLayer,a)),a.push(d);this.sublayerViews.forEach(d=>{const e=c.get(d.sublayer);e&&b.push(d.highlight(e))})}return y.handlesGroup(b)};g.getUsedMemory=function(){return this.sublayerViews.reduce((a,b)=>a+b.getUsedMemory(),0)};g.getUnloadedMemory=function(){return this.sublayerViews.reduce((a,
b)=>a+b.getUnloadedMemory(),0)};g.ignoresMemoryFactor=function(){return!1};n._createClass(q,[{key:"filterExpression",get:function(){const a=this.layer.activeFilterId;var b=null!=a?this.layer.filters.find(c=>c.id===a):null;return(b=null!=b?b.filterBlocks?.find(c=>"solid"===c.filterMode.type):null)?b.filterExpression:null}},{key:"filterExpressions",get:function(){const a=this.layer.activeFilterId,b=null!=a?this.layer.filters.find(c=>c.id===a):null;return b&&b.filterBlocks?b.filterBlocks.toArray().map(c=>
[c.filterExpression??"",E.parseFilterMode(c)]):[]}},{key:"updatingProgressValue",get:function(){const a=this.sublayerViews,b=this._loadingComponents+(a?a.length:0);return a.reduce((c,d)=>c+d.updatingProgress,0)/b}}]);return q}(D.LayerView3D(H));k.__decorate([m.property()],h.prototype,"sublayerViews",void 0);k.__decorate([m.property({readOnly:!0})],h.prototype,"filterExpression",null);k.__decorate([m.property({readOnly:!0})],h.prototype,"filterExpressions",null);k.__decorate([m.property(G.updatingProgress)],
h.prototype,"updatingProgress",void 0);k.__decorate([m.property({readOnly:!0,dependsOn:[]})],h.prototype,"updatingProgressValue",null);return h=k.__decorate([A.subclass("esri.views.3d.layers.BuildingSceneLayerView3D")],h)});