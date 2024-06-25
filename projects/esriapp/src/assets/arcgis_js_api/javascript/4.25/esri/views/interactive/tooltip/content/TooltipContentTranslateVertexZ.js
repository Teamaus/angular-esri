// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/maybe ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/Error ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../css ./TooltipContent ../support/TooltipField ../../../../widgets/support/widgetUtils ../../../../widgets/support/jsxFactory".split(" "),function(a,l,m,n,v,w,x,y,z,p,d,q,e,A,b){var r=`${d.CONTENT} ${`${d.CONTENT}--translate-vertex`}`;
a.TooltipContentTranslateVertexZ=function(f){function c(){return f.apply(this,arguments)||this}l._inheritsLoose(c,f);c.prototype.render=function(){const {distance:t,elevation:g,tooltipOptions:u}=this.info,{visibleElements:h}=u,k=this._messagesTooltip.sketch;return b.tsx("div",{class:r},h.distance&&b.tsx(e.TooltipField,{title:k.distance,value:this._formatRelativeVerticalLength(t)}),h.elevation&&n.isSome(g)&&b.tsx(e.TooltipField,{title:k.elevation,value:this._formatVerticalLength(g)}))};return c}(q.TooltipContent);
a.TooltipContentTranslateVertexZ=m.__decorate([p.subclass("esri.views.interactive.tooltip.content.TooltipContentTranslateVertexZ")],a.TooltipContentTranslateVertexZ);Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});