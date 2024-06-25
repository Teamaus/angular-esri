// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Error ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./LayerView3D ./TiledLayerView3D ../../layers/LayerView".split(" "),function(f,e,k,g,b,q,l,m,n,p){b=function(h){function c(){var a=h.apply(this,arguments)||this;a.type="elevation-3d";return a}f._inheritsLoose(c,h);c.prototype.initialize=function(){var a=
this.view?.map?.allLayers;a=a&&a.includes(this.layer);var d=this.view?.map?.ground?.layers;d=d&&d.includes(this.layer);a&&!d&&(a=new k("layerview:elevation-layer-only","3D elevation layer '"+this.layer.id+"' can only be added to layers in map.ground"),this.addResolvingPromise(Promise.reject(a)));this._addTilingSchemeMatchPromise()};f._createClass(c,[{key:"tileInfo",get:function(){return this.layer.tileInfo}}]);return c}(n.TiledLayerView3D(m.LayerView3D(p)));e.__decorate([g.property()],b.prototype,
"layer",void 0);e.__decorate([g.property()],b.prototype,"tileInfo",null);return b=e.__decorate([l.subclass("esri.views.3d.layers.ElevationLayerView3D")],b)});