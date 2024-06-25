// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/lang ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../geometry/Extent ../../geometry/SpatialReference ./RasterStorageInfo".split(" "),function(h,c,b,e,m,d,r,n,k,p,q){var g;b=g=function(l){function f(a){a=l.call(this,a)||this;a.attributeTable=null;a.bandCount=null;a.colormap=null;a.extent=null;
a.format=void 0;a.height=null;a.width=null;a.histograms=null;a.keyProperties={};a.multidimensionalInfo=null;a.noDataValue=null;a.pixelSize=null;a.pixelType=null;a.isPseudoSpatialReference=!1;a.spatialReference=null;a.statistics=null;a.storageInfo=null;a.transform=null;return a}h._inheritsLoose(f,l);f.prototype.clone=function(){return new g({attributeTable:e.clone(this.attributeTable),bandCount:this.bandCount,colormap:e.clone(this.colormap),extent:e.clone(this.extent),nativePixelSize:e.clone(this.nativePixelSize),
format:this.format,height:this.height,width:this.width,histograms:e.clone(this.histograms),keyProperties:e.clone(this.keyProperties),multidimensionalInfo:e.clone(this.multidimensionalInfo),noDataValue:this.noDataValue,pixelSize:e.clone(this.pixelSize),pixelType:this.pixelType,isPseudoSpatialReference:this.isPseudoSpatialReference,spatialReference:e.clone(this.spatialReference),statistics:e.clone(this.statistics),storageInfo:e.clone(this.storageInfo),transform:e.clone(this.transform)})};h._createClass(f,
[{key:"dataType",get:function(){const a=this.keyProperties?.DataType?.toLowerCase()??"generic";return"stdtime"===a?"standard-time":a}},{key:"nativeExtent",get:function(){return this._get("nativeExtent")||this.extent},set:function(a){a&&this._set("nativeExtent",a)}},{key:"nativePixelSize",get:function(){if(m.isNone(this.transform)||!this.transform.affectsPixelSize)return this.pixelSize;const a=this.nativeExtent;return{x:a.width/this.width,y:a.height/this.height}}},{key:"hasMultidimensionalTranspose",
get:function(){return!!this.storageInfo?.transposeInfo}}]);return f}(b.JSONSupport);c.__decorate([d.property({json:{write:!0}})],b.prototype,"attributeTable",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"bandCount",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"colormap",void 0);c.__decorate([d.property({type:String,readOnly:!0})],b.prototype,"dataType",null);c.__decorate([d.property({type:k,json:{write:!0}})],b.prototype,"extent",void 0);c.__decorate([d.property({type:k,
json:{write:!0}})],b.prototype,"nativeExtent",null);c.__decorate([d.property({json:{write:!0}})],b.prototype,"nativePixelSize",null);c.__decorate([d.property({json:{write:!0}})],b.prototype,"format",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"height",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"width",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"hasMultidimensionalTranspose",null);c.__decorate([d.property({json:{write:!0}})],b.prototype,
"histograms",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"keyProperties",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"multidimensionalInfo",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"noDataValue",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"pixelSize",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"pixelType",void 0);c.__decorate([d.property()],b.prototype,"isPseudoSpatialReference",void 0);c.__decorate([d.property({type:p,
json:{write:!0}})],b.prototype,"spatialReference",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"statistics",void 0);c.__decorate([d.property({type:q,json:{write:!0}})],b.prototype,"storageInfo",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"transform",void 0);return b=g=c.__decorate([n.subclass("esri.layers.support.RasterInfo")],b)});