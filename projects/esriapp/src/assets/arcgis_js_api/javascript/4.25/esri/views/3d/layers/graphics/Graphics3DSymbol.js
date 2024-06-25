// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../core/asyncUtils ../../../../core/maybe ../../../../core/promiseUtils ./Graphics3DGraphic ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolLayerFactory ./interfaces ./Loadable ./symbolComplexity".split(" "),function(n,x,g,t,y,z,A,u,p,B){const q={renderPriority:0,renderPriorityStep:1,ignoreDrivers:!1};return function(v){function r(a,c,d){var b=v.call(this,c.schedule)||this;b._symbol=a;b._context=c;b._backgroundLayers=d;b._destroyed=
!1;b.symbolLayers=[];b.referenced=0;b._extentPadding=0;return b}n._inheritsLoose(r,v);var k=r.prototype;k.doLoad=function(){var a=n._asyncToGenerator(function*(c){var d=this;let b=this._symbol.symbolLayers;this._extentPadding=0;this._backgroundLayers&&(b=this._backgroundLayers.concat(b));const f=b.length;for(;this.symbolLayers.length<b.length;)this.symbolLayers.push(null);this.symbolLayers.length=b.length;const h=[];for(let e=0;e<f;e++){const l=b.getItemAt(e);if(!1===l.enabled)continue;q.renderPriority=
1-(1+e)/f;q.renderPriorityStep=1/f;q.ignoreDrivers=l._ignoreDrivers;const m=A.make(this.symbol,l,this._context,q);h.push(t.onAbortOrThrow(c,()=>{this.symbolLayers[e]=null;m.destroy()}));this.symbolLayers[e]=m}yield x.forEach(this.symbolLayers,function(){var e=n._asyncToGenerator(function*(l,m){if(g.isSome(l))try{yield l.load(),d._extentPadding+=Math.max(d._extentPadding,l.extentPadding)}catch{d.symbolLayers[m]=null}});return function(l,m){return e.apply(this,arguments)}}());for(const e of h)e?.remove();
h.length=0;t.throwIfAborted(c);if(this.symbolLayers.length&&!this.symbolLayers.some(e=>!!e))throw Error();});return function(c){return a.apply(this,arguments)}}();k.getSymbolLayerSize=function(a){a=this.symbolLayers[a];return g.isSome(a)?a.getCachedSize():null};k.createGraphics3DGraphic=function(a,c){const d=a.graphic,b=Array(this.symbolLayers.length);for(let f=0;f<this.symbolLayers.length;f++){const h=this.symbolLayers[f];b[f]=g.isSome(h)?h.createGraphics3DGraphic(a):null}return new y(d,c||this,
b,a.layer,this._context.arcade||this._context.featureExpressionInfoContext&&this._context.featureExpressionInfoContext.arcade&&this._context.featureExpressionInfoContext.arcade.modules||null)};k.globalPropertyChanged=function(a,c){const d=this.symbolLayers.length;for(let b=0;b<d;b++){const f=this.symbolLayers[b],h=e=>{e=e.graphics[b];return e instanceof z.Graphics3DObject3DGraphicLayer?e:null};if(g.isSome(f)&&!f.globalPropertyChanged(a,c,h))return!1}return!0};k.applyRendererDiff=function(a,c){return this.loadStatus!==
p.LoadStatus.LOADED?u.ApplyRendererDiffResult.Recreate_Symbol:this.symbolLayers.reduce((d,b)=>d!==u.ApplyRendererDiffResult.Recreate_Symbol&&g.isSome(b)?Math.min(d,b.applyRendererDiff(a,c)):d,u.ApplyRendererDiffResult.Fast_Update)};k.prepareSymbolPatch=function(a){if(this.loadStatus!==p.LoadStatus.FAILED&&"partial"===a.diff.type){var c=a.diff.diff;if(c.symbolLayers&&"partial"===c.symbolLayers.type){var d=c.symbolLayers.diff;this.symbolLayers.forEach((b,f)=>{if(!g.isNone(b)){var h=d[f];if(h){const e=
{diff:h,graphics3DGraphicPatches:[],symbolLayerStatePatches:[]};b.prepareSymbolLayerPatch(e);a.symbolStatePatches.push(...e.symbolLayerStatePatches);e.graphics3DGraphicPatches.length&&a.graphics3DGraphicPatches.push((l,m)=>{const w=l.graphics[f];g.isSome(w)&&e.graphics3DGraphicPatches.forEach(C=>C(w,m))})}}})}}};k.updateGeometry=function(a,c){for(let d=0;d<this.symbolLayers.length;d++){const b=this.symbolLayers[d];if(g.isNone(b))continue;const f=a.graphics[d];if(g.isNone(f)||!b.updateGeometry(f,c))return!1}return!0};
k.onRemoveGraphic=function(a){for(let c=0;c<this.symbolLayers.length;c++){const d=this.symbolLayers[c];if(g.isNone(d))continue;const b=a.graphics[c];if(g.isSome(b))d.onRemoveGraphic(b)}};k.getFastUpdateStatus=function(){let a=0,c=0,d=0;this.symbolLayers.forEach(b=>{g.isNone(b)||(b.loadStatus===p.LoadStatus.LOADING?a++:b.isFastUpdatesEnabled()?d++:c++)});return{loading:a,slow:c,fast:d}};k.queryForSnapping=function(){var a=n._asyncToGenerator(function*(c,d,b,f){var h=this.symbolLayers.filter(g.isSome).filter(e=>
g.isSome(e.queryForSnapping)).map(e=>e.queryForSnapping(c,d,b,f));h=yield Promise.all(h);t.throwIfAborted(f);return h.flat()});return function(c,d,b,f){return a.apply(this,arguments)}}();k.destroy=function(){if(this.destroyed)console.error("Graphics3DSymbol.destroy called when already destroyed!");else{v.prototype.destroy.call(this);for(const a of this.symbolLayers)g.isSome(a)&&a.destroy();this.symbolLayers.length=0;this._destroyed=!0}};n._createClass(r,[{key:"symbol",get:function(){return this._symbol},
set:function(a){this._symbol=a;for(let c=0;c<a.symbolLayers.length;c++){const d=this.symbolLayers[c];g.isNone(d)||(d.symbol=a,d.symbolLayer=a.symbolLayers.items[c])}}},{key:"extentPadding",get:function(){return this._extentPadding}},{key:"symbologySnappingSupported",get:function(){return this.symbolLayers.some(a=>g.isSome(a)&&a.queryForSnapping)}},{key:"complexity",get:function(){return B.totalSymbolComplexities(this.symbolLayers.map(a=>g.get(a,"complexity")))}},{key:"destroyed",get:function(){return this._destroyed}}]);
return r}(p.Loadable)});