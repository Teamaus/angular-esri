// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/has ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./EffectView".split(" "),function(k,d,b,q,f,e,u,v,r,l){b=function(m){function g(a){var c=m.call(this,a)||this;c._filter=null;c.duration=q("mapview-transitions-duration");c._excludedEffectView=new l.EffectView(a);c._includedEffectView=
new l.EffectView(a);return c}k._inheritsLoose(g,m);var h=g.prototype;h.transitionStep=function(a,c){this._set("scale",c);this.transitioning?(this._includedEffectView.transitionStep(a,c),this._excludedEffectView.transitionStep(a,c),this.transitioning||(this._filter=null)):(this._excludedEffectView.scale=c,this._includedEffectView.scale=c)};h.endTransitions=function(){this._includedEffectView.endTransitions();this._excludedEffectView.endTransitions();this._filter=null};h._transitionTo=function(a){const c=
this._get("featureEffect");a=f.unwrap(a);const n=f.unwrap(a?.includedEffect),p=f.unwrap(a?.excludedEffect),t=this._includedEffectView.canTransitionTo(n)&&this._excludedEffectView.canTransitionTo(p);this._includedEffectView.effect=n;this._excludedEffectView.effect=p;this._set("featureEffect",a);this._filter=a?.filter||c?.filter||null;t||this.endTransitions()};k._createClass(g,[{key:"excludedEffects",get:function(){return this._excludedEffectView.effects}},{key:"featureEffect",set:function(a){this._get("featureEffect")!==
a&&this._transitionTo(a)}},{key:"filter",get:function(){return this._filter||f.unwrap(this.featureEffect)?.filter||null}},{key:"hasEffects",get:function(){return this._excludedEffectView.hasEffects||this._includedEffectView.hasEffects}},{key:"includedEffects",get:function(){return this._includedEffectView.effects}},{key:"scale",set:function(a){this._set("scale",a);this._excludedEffectView.scale=a;this._includedEffectView.scale=a}},{key:"transitioning",get:function(){return this._excludedEffectView.transitioning||
this._includedEffectView.transitioning}}]);return g}(b);d.__decorate([e.property()],b.prototype,"_filter",void 0);d.__decorate([e.property()],b.prototype,"_excludedEffectView",void 0);d.__decorate([e.property()],b.prototype,"_includedEffectView",void 0);d.__decorate([e.property()],b.prototype,"duration",void 0);d.__decorate([e.property()],b.prototype,"excludedEffects",null);d.__decorate([e.property()],b.prototype,"featureEffect",null);d.__decorate([e.property()],b.prototype,"filter",null);d.__decorate([e.property()],
b.prototype,"hasEffects",null);d.__decorate([e.property()],b.prototype,"includedEffects",null);d.__decorate([e.property({value:0})],b.prototype,"scale",null);d.__decorate([e.property()],b.prototype,"transitioning",null);return b=d.__decorate([r.subclass("esri.layers.effects.FeatureEffectView")],b)});