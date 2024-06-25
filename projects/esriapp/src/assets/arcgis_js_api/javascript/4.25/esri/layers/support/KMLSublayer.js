// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../core/Collection ../../core/Evented ../../core/JSONSupport ../../core/Loadable ../../core/maybe ../../core/reactiveUtils ../../core/string ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ./kmlUtils ../../geometry/Extent".split(" "),function(l,d,c,r,v,w,x,y,g,z,
f,D,A,B,C,m,t){var h;c=h=function(n){function p(...b){var a=n.call(this,...b)||this;a.description=null;a.id=null;a.networkLink=null;a.sublayers=null;a.title=null;a.sourceJSON=null;a.fullExtent=null;a.addHandles([g.on(()=>a.sublayers,"after-add",({item:e})=>{e.parent=l._assertThisInitialized(a);e.layer=a.layer},g.sync),g.on(()=>a.sublayers,"after-remove",({item:e})=>{e.layer=e.parent=null},g.sync),g.watch(()=>a.sublayers,(e,u)=>{if(u)for(const k of u)k.layer=k.parent=null;if(e)for(const k of e)k.parent=
l._assertThisInitialized(a),k.layer=a.layer},g.sync)]);return a}l._inheritsLoose(p,n);var q=p.prototype;q.initialize=function(){g.whenOnce(()=>this.networkLink).then(()=>g.whenOnce(()=>!0===this.visible)).then(()=>this.load())};q.load=function(b){if(this.networkLink&&!this.networkLink.viewFormat)return b=y.isSome(b)?b.signal:null,b=this._fetchService(this._get("networkLink")?.href??"",b).then(a=>{const e=m.computeExtent(a.sublayers);this.fullExtent=t.fromJSON(e);this.sourceJSON=a;a=A.ensureType(r.ofType(h),
m.sublayersFromJSON(h,a));this.sublayers?this.sublayers.addMany(a):this.sublayers=a;this.layer?.emit("sublayer-update");this.layer&&this.layer.notifyChange("visibleSublayers")}),this.addResolvingPromise(b),Promise.resolve(this)};q.readVisible=function(b,a){return!!a.visibility};q._fetchService=function(b,a){return m.fetchService(b,this.layer.outSpatialReference,this.layer.refreshInterval,a).then(e=>m.parseKML(e.data))};l._createClass(p,[{key:"visible",get:function(){return this._get("visible")},set:function(b){this._get("visible")!==
b&&(this._set("visible",b),this.layer&&this.layer.notifyChange("visibleSublayers"))}},{key:"layer",set:function(b){this._set("layer",b);this.sublayers&&this.sublayers.forEach(a=>a.layer=b)}}]);return p}(v.EventedMixin(w.JSONSupportMixin(x)));d.__decorate([f.property()],c.prototype,"description",void 0);d.__decorate([f.property()],c.prototype,"id",void 0);d.__decorate([f.property({readOnly:!0,value:null})],c.prototype,"networkLink",void 0);d.__decorate([f.property({json:{write:{allowNull:!0}}})],c.prototype,
"parent",void 0);d.__decorate([f.property({type:r.ofType(h),json:{write:{allowNull:!0}}})],c.prototype,"sublayers",void 0);d.__decorate([f.property({value:null,json:{read:{source:"name",reader(n){return z.stripHTML(n)}}}})],c.prototype,"title",void 0);d.__decorate([f.property({value:!0})],c.prototype,"visible",null);d.__decorate([B.reader("visible",["visibility"])],c.prototype,"readVisible",null);d.__decorate([f.property()],c.prototype,"sourceJSON",void 0);d.__decorate([f.property({value:null})],
c.prototype,"layer",null);d.__decorate([f.property({type:t})],c.prototype,"fullExtent",void 0);return c=h=d.__decorate([C.subclass("esri.layers.support.KMLSublayer")],c)});