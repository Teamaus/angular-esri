// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/Accessor ../../../../../core/promiseUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/arrayUtils ../../../../../core/accessorSupport/ensureType ../../../../../core/accessorSupport/decorators/subclass".split(" "),function(d,l,p,x,r,t,C,D,y){d.EditsQueue=function(u){function m(a){a=u.call(this,a)||this;a._queue=[];a._onGoingRequest=null;a._abortController=
new AbortController;return a}l._inheritsLoose(m,u);var n=m.prototype;n.destroy=function(){this.clear()};n.clear=function(){if(this.destroyed)throw Error("instance is already destroyed");let a=this._queue.pop();for(;a;)a.resolver.reject(r.createAbortError()),a=this._queue.pop();this._queue.length=0;this._abortController.abort();this._abortController=new AbortController};n.push=function(){var a=l._asyncToGenerator(function*(e){if(this.destroyed)throw Error("instance is already destroyed");const f=r.createResolver();
this._queue.push({event:e,resolver:f});this.notifyChange("updating");Promise.resolve().then(()=>{this._processNext()});return f.promise});return function(e){return a.apply(this,arguments)}}();n._processNext=function(){var a=l._asyncToGenerator(function*(){if(!this._onGoingRequest){for(var e=[],f=new Set,g=new Set,h=new Set,q=this._queue.shift();q;){const {event:{addedFeatures:c,deletedFeatures:z,updatedFeatures:A},resolver:B}=q;e.push(B);for(const {objectId:b,error:k}of c)k||(f.add(b),g.add(b),h.delete(b));
for(const {objectId:b,error:k}of A)k||(g.add(b),h.delete(b));for(const {objectId:b,error:k}of z)k||(f.has(b)?f.delete(b):h.add(b),g.delete(b));q=this._queue.shift()}if(g.size||h.size){var v=[],w=[];g.size&&g.forEach(c=>{v.push(c)});h.size&&h.forEach(c=>{w.push(c)});this._onGoingRequest=Promise.resolve().then(()=>this.processEdits(v,w,{signal:this._abortController.signal})).catch(()=>{});this.notifyChange("updating");yield this._onGoingRequest;this._onGoingRequest=null;this.notifyChange("updating");
e.forEach(c=>c());0<this._queue.length&&this._processNext()}else this.notifyChange("updating"),e.forEach(c=>c())}});return function(){return a.apply(this,arguments)}}();l._createClass(m,[{key:"updating",get:function(){return!this.destroyed&&(0<this._queue.length||null!=this._onGoingRequest)}}]);return m}(x);p.__decorate([t.property({constructOnly:!0})],d.EditsQueue.prototype,"processEdits",void 0);p.__decorate([t.property({readOnly:!0})],d.EditsQueue.prototype,"updating",null);d.EditsQueue=p.__decorate([y.subclass("esri.views.2d.layers.features.controllers.EditsQueue")],
d.EditsQueue);Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});