// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./materialUtils".split(" "),function(b,g,e,h,k,l,p,q,m,n){var c;b.Symbol3DMaterial=c=function(f){function d(a){a=f.call(this,a)||this;a.color=null;return a}g._inheritsLoose(d,f);d.prototype.clone=function(){const a={color:k.isSome(this.color)?
this.color.clone():null};return new c(a)};return d}(h.JSONSupport);e.__decorate([l.property(n.colorAndTransparencyProperty)],b.Symbol3DMaterial.prototype,"color",void 0);b.Symbol3DMaterial=c=e.__decorate([m.subclass("esri.symbols.support.Symbol3DMaterial")],b.Symbol3DMaterial);Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});