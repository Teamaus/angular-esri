// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/lang ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./PointCloudRenderer".split(" "),function(g,c,h,k,a,l,m,n){var d;a=d=function(f){function e(b){b=f.call(this,b)||this;b.type="point-cloud-rgb";b.field=null;return b}g._inheritsLoose(e,f);e.prototype.clone=function(){return new d({...this.cloneProperties(),
field:h.clone(this.field)})};return e}(n);c.__decorate([l.enumeration({pointCloudRGBRenderer:"point-cloud-rgb"})],a.prototype,"type",void 0);c.__decorate([k.property({type:String,json:{write:!0}})],a.prototype,"field",void 0);return a=d=c.__decorate([m.subclass("esri.renderers.PointCloudRGBRenderer")],a)});