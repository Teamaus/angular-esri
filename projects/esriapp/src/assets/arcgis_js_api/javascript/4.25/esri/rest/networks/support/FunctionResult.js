// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass".split(" "),function(g,c,a,d,k,l,h){a=function(e){function f(b){b=e.call(this,b)||this;b.functionType=null;b.networkAttributeName=null;b.result=null;return b}g._inheritsLoose(f,e);return f}(a.JSONSupport);c.__decorate([d.property({type:"add subtract average count min max".split(" "),
json:{write:!0},readOnly:!0})],a.prototype,"functionType",void 0);c.__decorate([d.property({type:String,json:{write:!0},readOnly:!0})],a.prototype,"networkAttributeName",void 0);c.__decorate([d.property({type:Number,json:{write:!0},readOnly:!0})],a.prototype,"result",void 0);return a=c.__decorate([h.subclass("esri.rest.networks.support.FunctionResult")],a)});