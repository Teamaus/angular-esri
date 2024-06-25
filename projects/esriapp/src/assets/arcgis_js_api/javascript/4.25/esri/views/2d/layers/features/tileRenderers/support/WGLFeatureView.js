// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/has ../../../../../../core/promiseUtils ../../../../engine/brushes ../../../../engine/FeatureContainer ../../../../engine/webgl/enums".split(" "),function(m,n,k,p,d,q,l){const r=k("featurelayer-order-by-server-enabled");k=function(g){function h(a,b,c,f){a=g.call(this,a)||this;a._hitTestsRequests=[];a._layer=c;a._layerView=b;a._onUpdate=f;return a}n._inheritsLoose(h,g);var e=h.prototype;e.renderChildren=function(a){this.attributeView.update();
this.hasAnimation&&a.painter.effects.integrate.draw(a,a.attributeView);g.prototype.renderChildren.call(this,a)};e.hasEmptyAttributeView=function(){return this.attributeView.isEmpty()};e.isUpdating=function(){return this.attributeView.isUpdating()};e.hitTest=function(a){let b=this._hitTestsRequests.find(({x:f,y:t})=>f===a.x&&t===a.y);const c=p.createResolver();b?b.resolvers.push(c):(b={x:a.x,y:a.y,resolvers:[c]},this._hitTestsRequests.push(b));this.requestRender();return c.promise};e.onTileData=function(a,
b){const c=r&&"orderBy"in this._layer&&this._layer.orderBy,f=c?.length&&!c[0].valueExpression&&c[0].field;a.patch(b,c&&this._layerView.orderByFields===f);this.contains(a)||this.addChild(a);this.requestRender()};e.onTileError=function(a){this.contains(a)||this.addChild(a)};e.updateTransitionProperties=function(a,b){g.prototype.updateTransitionProperties.call(this,a,b);this._layerView.featureEffectView.transitionStep(a,b);this._layerView.featureEffectView.transitioning&&this.requestRender()};e.doRender=
function(a){const {minScale:b,maxScale:c}=this._layer,f=a.state.scale;f<=(b||Infinity)&&f>=c&&g.prototype.doRender.call(this,a)};e.afterRender=function(a){g.prototype.afterRender.call(this,a);this._hitTestsRequests.length&&this.requestRender()};e.onAttributeStoreUpdate=function(){this.hasLabels&&this._layerView.view.labelManager.requestUpdate();this._onUpdate()};e.setStencilReference=function(a){const {rendererSchema:b}=a.rendererInfo;if("dot-density"===b?.type&&1<b?.dotSize||"heatmap"===b?.type)for(const c of this.children)c.stencilRef=
c.key.level+1;else g.prototype.setStencilReference.call(this,a)};e.prepareRenderPasses=function(a){const b=a.registerRenderPass({name:"label",brushes:[d.brushes.label],target:()=>this.hasLabels?this.children:null,drawPhase:l.WGLDrawPhase.LABEL|l.WGLDrawPhase.LABEL_ALPHA}),c=a.registerRenderPass({name:"geometry",brushes:[d.brushes.fill,d.brushes.dotDensity,d.brushes.line,d.brushes.marker,d.brushes.heatmap,d.brushes.pieChart,d.brushes.text],target:()=>this.children,enableDefaultDraw:()=>!this._layerView.featureEffectView.hasEffects,
effects:[{apply:a.effects.outsideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.excludedEffects},{apply:a.effects.insideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.includedEffects},{apply:a.effects.hittest,enable:()=>!!this._hitTestsRequests.length,args:()=>this._hitTestsRequests}]}),f=a.registerRenderPass({name:"highlight",brushes:[d.brushes.fill,d.brushes.dotDensity,d.brushes.line,
d.brushes.marker,d.brushes.pieChart,d.brushes.text],target:()=>this.children,drawPhase:l.WGLDrawPhase.HIGHLIGHT,enableDefaultDraw:()=>!1,effects:[{apply:a.effects.highlight,enable:()=>!!this._layerView.hasHighlight()}]});return[...g.prototype.prepareRenderPasses.call(this,a),c,f,b]};n._createClass(h,[{key:"hasAnimation",get:function(){return this.hasLabels}},{key:"hasLabels",get:function(){if("sublayers"in this._layer)return this._layer.sublayers.some(b=>b.labelingInfo&&b.labelingInfo.length&&b.labelsVisible);
var a=this._layer.featureReduction;a=a&&"labelingInfo"in a&&a.labelsVisible&&a.labelingInfo&&a.labelingInfo.length;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!a}}]);return h}(q.FeatureContainer);m.WGLFeatureView=k;Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});