// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/compilerUtils ../../core/maybe ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/subclass ../../geometry/projection ../../geometry/support/spatialReferenceUtils ../../support/basemapDefinitions ../../support/basemapUtils".split(" "),function(l,d,b,r,m,n,e,z,w,x,p,t,y,f){b=function(u){function g(a){a=
u.call(this,a)||this;a._basemapCache={};a._loadingProjectionEngine=!1;a.nextBasemap=f.ensureType("hybrid",a._basemapCache);a.view=null;return a}l._inheritsLoose(g,u);var k=g.prototype;k.initialize=function(){n.watch(()=>this.nextBasemap,a=>{a&&!a.loaded&&a.load().catch(()=>{})},n.initial)};k.destroy=function(){this.view=null;f.destroyCache(this._basemapCache);this._basemapCache=null};k.castNextBasemap=function(a){return f.ensureType(a,this._basemapCache)};k.toggle=function(){var a=l._asyncToGenerator(function*(){if("disabled"!==
this.state&&"incompatible-next-basemap"!==this.state){var {activeBasemap:c,nextBasemap:h}=this,v=this._viewSpatialReferenceLocked;if(!v){yield n.whenOnce(()=>!this._nextBasemapSpatialReferenceTask.updating);if(h!==this.nextBasemap||c!==this.activeBasemap)return;const {spatialReference:q}=this._nextBasemapSpatialReferenceTask;!m.isSome(q)||t.equals(this.view.spatialReference,q)||p.isLoaded()||p.canProjectWithoutEngine(this.view.spatialReference,q)||(this._loadingProjectionEngine=!0,yield p.load(),
this._loadingProjectionEngine=!1);if(h!==this.nextBasemap||c!==this.activeBasemap)return}this.view.map.basemap=h;v||!m.isSome(this._nextBasemapSpatialReferenceTask.spatialReference)||t.equals(this.view.spatialReference,this._nextBasemapSpatialReferenceTask.spatialReference)||(this.view.spatialReference=this._nextBasemapSpatialReferenceTask.spatialReference);this.nextBasemap=c}});return function(){return a.apply(this,arguments)}}();g.getThumbnailUrl=function(a){if(!a)return null;var {thumbnailUrl:c}=
a;return c?c:(c=f.getWellKnownBasemapId(a))?y.esriBasemapDefinitions[c].thumbnailUrl:(a=a.baseLayers.find(h=>!!r.typeCast(h)().get("portalItem.thumbnailUrl")))?r.typeCast(a)().get("portalItem.thumbnailUrl"):null};l._createClass(g,[{key:"_nextBasemapSpatialReferenceTask",get:function(){return f.findSpatialReference(this.view,this.nextBasemap)}},{key:"_viewSpatialReferenceLocked",get:function(){return"spatialReferenceLocked"in this.view?this.view.spatialReferenceLocked:!0}},{key:"activeBasemap",get:function(){return f.ensureType(this.view?.map?.basemap??
"topo",this._basemapCache)}},{key:"state",get:function(){const {view:a}=this;if(!a?.ready||this._nextBasemapSpatialReferenceTask.updating)return"disabled";const {spatialReference:c}=this._nextBasemapSpatialReferenceTask;return this._viewSpatialReferenceLocked&&m.isSome(c)&&!a.spatialReference.equals(c)?"incompatible-next-basemap":this._loadingProjectionEngine?"loading":"ready"}}]);return g}(b);d.__decorate([e.property()],b.prototype,"_loadingProjectionEngine",void 0);d.__decorate([e.property({readOnly:!0})],
b.prototype,"_nextBasemapSpatialReferenceTask",null);d.__decorate([e.property({readOnly:!0})],b.prototype,"_viewSpatialReferenceLocked",null);d.__decorate([e.property({readOnly:!0})],b.prototype,"activeBasemap",null);d.__decorate([e.property()],b.prototype,"nextBasemap",void 0);d.__decorate([w.cast("nextBasemap")],b.prototype,"castNextBasemap",null);d.__decorate([e.property({readOnly:!0})],b.prototype,"state",null);d.__decorate([e.property()],b.prototype,"view",void 0);d.__decorate([e.property()],
b.prototype,"toggle",null);return b=d.__decorate([x.subclass("esri.widgets.BasemapToggle.BasemapToggleViewModel")],b)});