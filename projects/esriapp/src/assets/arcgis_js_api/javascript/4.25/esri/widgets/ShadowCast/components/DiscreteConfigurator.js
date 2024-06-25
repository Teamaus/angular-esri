// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../../../core/uuid ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../intl/duration ../../Widget ../css ./Label ./LabeledColorPicker ../../support/widgetUtils ../../support/decorators/messageBundle ../../support/jsxFactory".split(" "),function(g,c,q,e,r,n,h,C,D,t,u,
v,w,x,y,E,z,d){c.DiscreteConfigurator=function(p){function k(a){var b=p.call(this,a)||this;b.colorPickerVisible=!0;b._selectId=`select-${n.generateUUID()}`;b._colorPickerId=`color-picker-${n.generateUUID()}`;b._onColorChange=l=>{b.options.color=l};return b}q._inheritsLoose(k,p);var m=k.prototype;m.loadDependencies=function(){return Promise.all([new Promise((a,b)=>g(["../../../chunks/calcite-label"],a,b)),new Promise((a,b)=>g(["../../../chunks/calcite-option"],a,b)),new Promise((a,b)=>g(["../../../chunks/calcite-select"],
a,b))])};m.render=function(){const a=this._messages.discrete,b=a.intervalLabel,{color:l,interval:A,intervalOptions:B}=this.options;return d.tsx("div",{class:w.DISCRETE_CONFIGURATOR_CSS.base},d.tsx(x.Label,{for:this._selectId,label:b},d.tsx("calcite-select",{id:this._selectId,label:b,bind:this,onCalciteSelectChange:this._onIntervalChange},B.toArray().map(f=>d.tsx("calcite-option",{key:f,selected:f===A,value:String(f)},r.unwrapOr(u.formatDuration(f,{round:!0,largest:2}),""))))),this.colorPickerVisible&&
d.tsx(y.LabeledColorPicker,{id:this._colorPickerId,label:a.colorLabel,value:l,onChange:this._onColorChange}))};m._onIntervalChange=function(a){a=parseInt(a.target.selectedOption?.value,10);Number.isFinite(a)&&(this.options.interval=a)};return k}(v);e.__decorate([h.property()],c.DiscreteConfigurator.prototype,"options",void 0);e.__decorate([h.property()],c.DiscreteConfigurator.prototype,"colorPickerVisible",void 0);e.__decorate([h.property(),z.messageBundle("esri/widgets/ShadowCast/t9n/ShadowCast")],
c.DiscreteConfigurator.prototype,"_messages",void 0);c.DiscreteConfigurator=e.__decorate([t.subclass("esri.widgets.ShadowCast.components.DiscreteConfigurator")],c.DiscreteConfigurator);Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});