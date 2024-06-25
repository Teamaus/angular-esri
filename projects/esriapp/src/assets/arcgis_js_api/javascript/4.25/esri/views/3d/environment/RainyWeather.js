// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/enumeration ../../../core/accessorSupport/decorators/subclass".split(" "),function(h,c,a,f,m,n,k,l){var d;a=d=function(g){function e(b){b=g.call(this,b)||this;b.type="rainy";b.cloudCover=.5;b.precipitation=.5;return b}h._inheritsLoose(e,g);e.prototype.clone=
function(){return new d({cloudCover:this.cloudCover,precipitation:this.precipitation})};return e}(a.JSONSupport);c.__decorate([k.enumeration({rainy:"rainy"})],a.prototype,"type",void 0);c.__decorate([f.property({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],a.prototype,"cloudCover",void 0);c.__decorate([f.property({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],a.prototype,"precipitation",void 0);return a=d=c.__decorate([l.subclass("esri.views.3d.environment.RainyWeather")],
a)});