// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/Error ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../css ./TooltipContent ../support/TooltipField ../../../../widgets/support/widgetUtils ../../../../widgets/support/jsxFactory".split(" "),function(a,g,h,r,t,u,v,w,k,c,l,m,x,d){var n=`${c.CONTENT} ${`${c.CONTENT}--translate-graphic`}`;
a.TooltipContentTranslateGraphic=function(e){function b(){return e.apply(this,arguments)||this}g._inheritsLoose(b,e);b.prototype.render=function(){const {info:f}=this,{visibleElements:p}=f.tooltipOptions,q=this._messagesTooltip.sketch;return d.tsx("div",{class:n},p.distance&&d.tsx(m.TooltipField,{title:q.distance,value:this._formatLength(f.distance)}))};return b}(l.TooltipContent);a.TooltipContentTranslateGraphic=h.__decorate([k.subclass("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphic")],
a.TooltipContentTranslateGraphic);Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});