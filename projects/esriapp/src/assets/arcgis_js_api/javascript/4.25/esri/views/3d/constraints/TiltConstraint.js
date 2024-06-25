// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/mathUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/decorators/cast ../../../core/accessorSupport/decorators/subclass ../state/Constraints".split(" "),function(b,f,c,n,e,g,t,p,q,h){var r=e.rad2deg(h.TiltDefault.min),k=e.rad2deg(h.TiltDefault.max);b.TiltConstraint=function(l){function d(){var a=l.apply(this,arguments)||
this;a.mode="auto";return a}f._inheritsLoose(d,l);var m=d.prototype;m.castMax=function(a){return e.clamp(a,r,k)};m.autoUpdate=function(a){"auto"===this.mode&&this._get("max")!==a&&this._set("max",a)};f._createClass(d,[{key:"max",get:function(){return this._get("max")},set:function(a){this._set("max",a);this.mode="manual"}}]);return d}(n);c.__decorate([g.property({type:["auto","manual"]})],b.TiltConstraint.prototype,"mode",void 0);c.__decorate([g.property({type:Number,value:k})],b.TiltConstraint.prototype,
"max",null);c.__decorate([p.cast("max")],b.TiltConstraint.prototype,"castMax",null);b.TiltConstraint=c.__decorate([q.subclass("esri.views.3d.constraints.TiltConstraint")],b.TiltConstraint);Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});