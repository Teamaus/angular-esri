// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../Widget ../../support/widgetUtils ../../support/jsxFactory".split(" "),function(b,l,c,m,d,r,t,n,p,q,f){b.LevelItem=function(k){function g(a,e){a=k.call(this,a,e)||this;a.active=!1;a.hovering=!1;a.width=0;a.height=0;a.onSelect=
()=>{};a.onFocus=()=>{};a.onBlur=()=>{};a._baseElement=null;return a}l._inheritsLoose(g,k);var h=g.prototype;h.render=function(){return f.tsx("div",{key:this,bind:this,class:this.classes("esri-building-level-picker-item",{["esri-building-level-picker-item--active"]:this.active,["esri-building-level-picker-item--hover"]:this.hovering}),styles:{height:`${this.height}px`}},this._renderBase())};h.focus=function(){m.isNone(this._baseElement)||this._baseElement.focus()};h._renderBase=function(){const a=
this.width,e=.8*this.width;return f.tsx("div",{class:"esri-building-level-picker-item__base",styles:{width:`${Math.round(a)}px`,height:`${Math.round(a)}px`}},f.tsx("button",{bind:this,class:"rect",styles:{width:`${Math.round(e)}px`,height:`${Math.round(e)}px`},onclick:this.onSelect,onfocus:this.onFocus,onblur:this.onBlur,afterCreate:q.storeNode,"data-node-ref":"_baseElement","aria-label":this.label,title:this.label,tabIndex:-1,type:"button"}))};return g}(p);c.__decorate([d.property({nonNullable:!0})],
b.LevelItem.prototype,"level",void 0);c.__decorate([d.property({nonNullable:!0})],b.LevelItem.prototype,"active",void 0);c.__decorate([d.property({nonNullable:!0})],b.LevelItem.prototype,"hovering",void 0);c.__decorate([d.property({nonNullable:!0})],b.LevelItem.prototype,"width",void 0);c.__decorate([d.property({nonNullable:!0})],b.LevelItem.prototype,"height",void 0);c.__decorate([d.property({nonNullable:!0})],b.LevelItem.prototype,"onSelect",void 0);c.__decorate([d.property({nonNullable:!0})],b.LevelItem.prototype,
"onFocus",void 0);c.__decorate([d.property({nonNullable:!0})],b.LevelItem.prototype,"onBlur",void 0);b.LevelItem=c.__decorate([n.subclass("esri.widgets.BuildingExplorer.BuildingLevelPicker.LevelItem")],b.LevelItem);Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});