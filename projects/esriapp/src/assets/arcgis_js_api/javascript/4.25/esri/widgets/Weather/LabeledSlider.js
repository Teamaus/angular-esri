// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("require exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../Widget ../support/widgetUtils ../support/jsxFactory ./css".split(" "),function(h,c,m,d,e,t,u,n,p,v,f,q){c.LabeledSlider=function(k){function g(b){var a=k.call(this,b)||this;a._onChange=r=>{a.onChange(r.target.value)};return a}m._inheritsLoose(g,k);var l=g.prototype;
l.render=function(){const {label:b,disabled:a}=this;return f.tsx("div",{class:q.LABELED_SLIDER_CSS.base},f.tsx("calcite-label",{scale:"s",disabled:a},b,f.tsx("calcite-slider",{"aria-label":b,disabled:this.disabled,max:1,min:0,step:.01,value:this.value,onCalciteSliderInput:this._onChange,onCalciteSliderChange:this._onChange})))};l.loadDependencies=function(){return Promise.all([new Promise((b,a)=>h(["../../chunks/calcite-label"],b,a)),new Promise((b,a)=>h(["../../chunks/calcite-slider"],b,a))])};return g}(p);
d.__decorate([e.property()],c.LabeledSlider.prototype,"value",void 0);d.__decorate([e.property()],c.LabeledSlider.prototype,"onChange",void 0);d.__decorate([e.property()],c.LabeledSlider.prototype,"disabled",void 0);c.LabeledSlider=d.__decorate([n.subclass("esri.widgets.Weather.LabeledSlider")],c.LabeledSlider);Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});