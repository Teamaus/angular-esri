// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Error ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../layers/support/commonProperties ../../layers/support/ExportWMSImageParameters".split(" "),function(n,b,f,d,x,y,r,t,u){return a=>{a=function(p){function e(){return p.apply(this,arguments)||this}n._inheritsLoose(e,p);var g=e.prototype;g.initialize=function(){this.exportImageParameters=
new u.ExportWMSImageParameters({layer:this.layer})};g.destroy=function(){this.exportImageParameters.destroy();this.exportImageParameters=null};g.fetchPopupFeatures=function(c){const {layer:h}=this;if(!c)return Promise.reject(new f("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:h}));const {popupEnabled:q}=h;if(!q)return Promise.reject(new f("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:q}));c=this.createFetchPopupFeaturesQuery(c);if(!c)return Promise.resolve([]);
const {extent:k,width:l,height:m,x:v,y:w}=c;if(!(k&&l&&m))throw new f("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:k,width:l,height:m});return h.fetchFeatureInfo(k,l,m,v,w)};n._createClass(e,[{key:"exportImageVersion",get:function(){this.exportImageParameters?.commitProperty("version");this.commitProperty("timeExtent");return(this._get("exportImageVersion")||0)+1}}]);return e}(a);b.__decorate([d.property()],a.prototype,"exportImageParameters",void 0);b.__decorate([d.property({readOnly:!0})],
a.prototype,"exportImageVersion",null);b.__decorate([d.property()],a.prototype,"layer",void 0);b.__decorate([d.property(t.combinedViewLayerTimeExtentProperty)],a.prototype,"timeExtent",void 0);return a=b.__decorate([r.subclass("esri.layers.mixins.WMSLayerView")],a)}});