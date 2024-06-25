// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../intl ../../core/Accessor ../../core/Collection ../../core/Handles ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./support/ActiveLayerInfo ../../intl/locale".split(" "),function(r,k,h,x,t,y,g,l,F,G,z,u,A){const v=t.ofType(u),B="esri.layers.BuildingSceneLayer esri.layers.CSVLayer esri.layers.FeatureLayer esri.layers.GeoJSONLayer esri.layers.GeoRSSLayer esri.layers.GroupLayer esri.layers.HeatmapLayer esri.layers.ImageryLayer esri.layers.ImageryTileLayer esri.layers.MapImageLayer esri.layers.OGCFeatureLayer esri.layers.PointCloudLayer esri.layers.StreamLayer esri.layers.SceneLayer esri.layers.SubtypeGroupLayer esri.layers.TileLayer esri.layers.VoxelLayer esri.layers.WFSLayer esri.layers.WMSLayer esri.layers.WMTSLayer esri.layers.WCSLayer".split(" "),
C=["view.basemapView.baseLayerViews","view.groundView.layerViews","view.layerViews","view.basemapView.referenceLayerViews"];h=function(w){function q(a){a=w.call(this,a)||this;a._handles=new y;a._layerViewByLayerId={};a._layerInfosByLayerViewId={};a._activeLayerInfosByLayerViewId={};a._activeLayerInfosWithNoParent=new t;a.activeLayerInfos=new v;a.basemapLegendVisible=!1;a.groundLegendVisible=!1;a.hideLayersNotInCurrentView=!1;a.keepCacheOnDestroy=!1;a.respectLayerVisibility=!0;a.layerInfos=[];a.view=
null;return a}r._inheritsLoose(q,w);var e=q.prototype;e.initialize=function(){this._handles.add(g.watch(()=>this.view,()=>this._viewHandles(),g.initial),"view");this._handles.add(A.onLocaleChange(()=>this._refresh()))};e.destroy=function(){this._destroyViewActiveLayerInfos();this._handles.destroy();this.view=this._handles=null};e._viewHandles=function(){this._handles.remove("state");this.view&&this._handles.add(g.watch(()=>this.state,()=>this._stateHandles(),g.initial),"state")};e._stateHandles=function(){this._resetAll();
"ready"===this.state&&this._watchPropertiesAndAllLayerViews()};e._resetAll=function(){this._handles.remove(["all-layer-views","legend-properties"]);this._destroyViewActiveLayerInfos();this.activeLayerInfos.removeAll()};e._destroyViewActiveLayerInfos=function(){Object.keys(this._activeLayerInfosByLayerViewId).forEach(this._destroyViewActiveLayerInfo,this)};e._destroyViewActiveLayerInfo=function(a){this._handles.remove(a);const b=this._activeLayerInfosByLayerViewId[a];delete this._activeLayerInfosByLayerViewId[a];
b&&b.parent&&b.parent.children.remove(b)};e._watchPropertiesAndAllLayerViews=function(){const {allLayerViews:a}=this.view;a.length&&this._refresh();this._handles.add(a.on("change",b=>this._allLayerViewsChangeHandle(b)),"all-layer-views");this._handles.add(g.watch(()=>[this.layerInfos,this.basemapLegendVisible,this.groundLegendVisible],()=>this._propertiesChangeHandle()),"legend-properties")};e._allLayerViewsChangeHandle=function(a){a.removed.forEach(b=>this._destroyViewActiveLayerInfo(b.uid));this._refresh()};
e._propertiesChangeHandle=function(){this._destroyViewActiveLayerInfos();this._refresh()};e._refresh=function(){this._layerInfosByLayerViewId={};this.activeLayerInfos.removeAll();this._generateLayerViews().filter(this._filterLayerViewsByLayerInfos,this).filter(this._isLayerViewSupported,this).forEach(this._generateActiveLayerInfo,this);this._sortActiveLayerInfos(this.activeLayerInfos)};e._sortActiveLayerInfos=function(a){if(!(2>a.length)){var b=[];a.forEach(d=>{if(!d.parent){var c=d.layer.parent;
(c=(c=c&&"uid"in c&&this._layerViewByLayerId[c.uid])&&this._activeLayerInfosByLayerViewId[c.uid])&&a.includes(c)&&(b.push(d),d.parent=c,c.children.add(d),this._sortActiveLayerInfos(c.children))}});a.removeMany(b);var f={};this.view.allLayerViews.forEach((d,c)=>f[d.layer.uid]=c);a.sort((d,c)=>(f[c.layer.uid]||0)-(f[d.layer.uid]||0))}};e._generateLayerViews=function(){const a=[];C.filter(this._filterLayerViews,this).map(this.get,this).filter(b=>null!=b).forEach(this._collectLayerViews("layerViews",
a));return a};e._filterLayerViews=function(a){const b=!this.groundLegendVisible&&"view.groundView.layerViews"===a;return!(!this.basemapLegendVisible&&("view.basemapView.baseLayerViews"===a||"view.basemapView.referenceLayerViews"===a))&&!b};e._collectLayerViews=function(a,b){const f=d=>{d&&d.forEach(c=>{b.push(c);f(c[a])});return b};return f};e._filterLayerViewsByLayerInfos=function(a){const b=this.layerInfos;return b&&b.length?b.some(f=>this._hasLayerInfo(f,a)):!0};e._hasLayerInfo=function(a,b){const f=
this._isLayerUIDMatching(a.layer,b.layer.uid);f&&(this._layerInfosByLayerViewId[b.uid]=a);return f};e._isLayerUIDMatching=function(a,b){return a&&(a.uid===b||this._hasLayerUID(a.layers,b))};e._hasLayerUID=function(a,b){return a&&a.some(f=>this._isLayerUIDMatching(f,b))};e._isLayerViewSupported=function(a){return B.includes(a.layer.declaredClass)?(this._layerViewByLayerId[a.layer.uid]=a,!0):!1};e._generateActiveLayerInfo=function(a){this._isLayerActive(a)?this._buildActiveLayerInfo(a):(this._handles.remove(a.uid),
this._handles.add(g.watch(()=>[a.legendEnabled,a.layer?.legendEnabled],()=>this._layerActiveHandle(a)),a.uid))};e._layerActiveHandle=function(a){this._isLayerActive(a)&&(this._handles.remove(a.uid),this._buildActiveLayerInfo(a))};e._isLayerActive=function(a){return this.respectLayerVisibility?a.legendEnabled&&a.get("layer.legendEnabled"):!0};e._buildActiveLayerInfo=function(a){const b=a.layer,f=a.uid;var d=this._layerInfosByLayerViewId[f];let c=this._activeLayerInfosByLayerViewId[f];c||(c=new u({layer:b,
layerView:a,title:d&&void 0!==d.title&&d.layer.uid===b.uid?d.title:b.title,view:this.view,respectLayerVisibility:this.respectLayerVisibility,hideLayersNotInCurrentView:this.hideLayersNotInCurrentView,keepCacheOnDestroy:this.keepCacheOnDestroy,sublayerIds:d&&d.sublayerIds||[]}),this._activeLayerInfosByLayerViewId[f]=c);c.parent=this._activeLayerInfosByLayerViewId[(b.parent&&"uid"in b.parent&&this._layerViewByLayerId[b.parent?.uid])?.uid];if(!this._handles.has(f)){d=g.watch(()=>b.title,p=>this._titleHandle(p,
c));var m=g.watch(()=>[b.opacity,"renderer"in b&&b.renderer,"pointSymbol"in b&&b.pointSymbol,"lineSymbol"in b&&b.lineSymbol,"polygonSymbol"in b&&b.polygonSymbol],()=>this._constructLegendElements(c)),n=g.when(()=>!0===this.view?.stationary,()=>this._scaleHandle(c),g.initial);const D=g.watch(()=>a._effectiveRenderer,()=>this._constructLegendElements(c)),E=g.watch(()=>"effect"in b&&b.effect,()=>this._constructLegendElements(c));d=[d,m,n,D,E];this.respectLayerVisibility&&(m=g.watch(()=>a.legendEnabled,
p=>this._legendEnabledHandle(p,c)),n=g.watch(()=>b.legendEnabled,p=>this._legendEnabledHandle(p,c)),d.push(m,n));this._handles.add(d,f)}c.isScaleDriven||this._constructLegendElements(c);this._addActiveLayerInfo(c)};e._titleHandle=function(a,b){b.title=a;this._constructLegendElements(b)};e._legendEnabledHandle=function(a,b){a?this._addActiveLayerInfo(b):this._removeActiveLayerInfo(b)};e._scaleHandle=function(a){(a.isScaleDriven||a.hideLayersNotInCurrentView)&&this._constructLegendElements(a)};e._addActiveLayerInfo=
function(a){const {layerView:b,layer:f}=a;if(this._isLayerActive(b)&&!this.activeLayerInfos.includes(a)){var d=a.parent;d?(d.children.includes(a)||d.children.push(a),this._sortActiveLayerInfos(d.children)):(d=this.layerInfos?.some(c=>c.layer.uid===f.uid),f.parent&&"uid"in f.parent&&!d?this._activeLayerInfosWithNoParent.add(a):(this.activeLayerInfos.add(a),this._sortActiveLayerInfos(this.activeLayerInfos)));if(this._activeLayerInfosWithNoParent.length){const c=[];this._activeLayerInfosWithNoParent.forEach(m=>
{var n=m.layer.parent;if(n=this._activeLayerInfosByLayerViewId[(n&&"uid"in n&&this._layerViewByLayerId[n?.uid])?.uid])c.push(m),m.parent=n});c.length&&(this._activeLayerInfosWithNoParent.removeMany(c),c.forEach(m=>this._addActiveLayerInfo(m)))}}};e._removeActiveLayerInfo=function(a){const b=a.parent;b?b.children.remove(a):this.activeLayerInfos.remove(a)};e._constructLegendElements=function(a){const b=a.layer;"featureCollections"in b&&b.featureCollections?a.buildLegendElementsForFeatureCollections(b.featureCollections):
"featureReduction"in b&&b.featureReduction&&"renderer"in b.featureReduction&&("binning"===b.featureReduction.type||"cluster"===b.featureReduction.type)?a.buildLegendElementsForFeatureReduction(b.featureReduction):"renderer"in b&&b.renderer&&!("sublayers"in b)?a.buildLegendElementsForRenderer(b.renderer):"url"in b&&b.url?a.buildLegendElementsForTools():a.children.forEach(f=>this._constructLegendElements(f))};r._createClass(q,[{key:"state",get:function(){return this.get("view.ready")?"ready":"disabled"}}]);
return q}(x);k.__decorate([l.property({type:v})],h.prototype,"activeLayerInfos",void 0);k.__decorate([l.property()],h.prototype,"basemapLegendVisible",void 0);k.__decorate([l.property()],h.prototype,"groundLegendVisible",void 0);k.__decorate([l.property()],h.prototype,"hideLayersNotInCurrentView",void 0);k.__decorate([l.property()],h.prototype,"keepCacheOnDestroy",void 0);k.__decorate([l.property()],h.prototype,"respectLayerVisibility",void 0);k.__decorate([l.property()],h.prototype,"layerInfos",
void 0);k.__decorate([l.property({readOnly:!0})],h.prototype,"state",null);k.__decorate([l.property()],h.prototype,"view",void 0);return h=k.__decorate([z.subclass("esri.widgets.Legend.LegendViewModel")],h)});