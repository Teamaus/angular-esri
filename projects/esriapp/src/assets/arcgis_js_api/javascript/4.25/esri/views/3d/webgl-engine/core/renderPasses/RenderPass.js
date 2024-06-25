// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../../../../../core/PooledArray ../../lib/TransparencyPassType ../../../../webgl/enums".split(" "),function(h,u,v,w,x,q){h.RenderPassSorting=void 0;(function(g){g[g.FrontToBack=0]="FrontToBack";g[g.BackToFront=1]="BackToFront"})(h.RenderPassSorting||(h.RenderPassSorting={}));let A=function(){function g(e,c,d=h.RenderPassSorting.FrontToBack){this._rctx=e;this._techniqueRepository=c;this._sorting=d;this._draws=
new w({initialSize:32,allocator:f=>f||{material:null,geometry:null,geometryRanges:null,bindDrawParams:null,depthSquaredHint:0,indexType:0}});this._previouslyBoundDraw=new Map}var m=g.prototype;m.submitDraw=function(e,c,d,f){const k=this._draws.pushNew();k.geometry=c;k.geometryRanges=d;k.material=e;k.depthSquaredHint=f;k.indexType=c.indexed?v.unwrap(c.vao.indexBuffer).indexType:0};m.dispatch=function(e,c){const d=this._rctx;this._previouslyBoundDraw.clear();let f=null;const k=this._draws.map(l=>l.material.prepareTechnique(this._techniqueRepository,
e,c,l.geometry.parameters)),y=this._draws.length;for(let l=0;l<y;l++){var a=k[l];if(a!==f||a.configuration.transparencyPassType!==x.TransparencyPassType.NONE)d.bindTechnique(a,e,c),f=a;var b=this._draws.data[l];const r=b.geometry;d.bindVAO(r.vao);this._previouslyBoundDraw.get(a)!==b.material&&(a.program.bindDraw(b.material,c,e),this._previouslyBoundDraw.set(a,b.material));a=b.geometryRanges;const t=a.length;if(0!==b.indexType){const z=n.get(b.indexType);for(let p=0;p<t;p+=2)d.drawElements(r.primitiveType,
a[p+1],b.indexType,a[p]*z)}else for(b=0;b<t;b+=2)d.drawArrays(r.primitiveType,a[b],a[b+1])}};m.prepareSubmit=function(){this._draws.clear()};m.finishSubmit=function(){const e=this._sorting===h.RenderPassSorting.FrontToBack?1:-1;this._draws.sort((c,d)=>{const f=e*(c.depthSquaredHint-d.depthSquaredHint);return 0!==f?f:c.geometry.vao.size-d.geometry.vao.size})};u._createClass(g,[{key:"count",get:function(){return this._draws.length}}]);return g}();const n=new Map;n.set(q.DataType.UNSIGNED_BYTE,1);n.set(q.DataType.UNSIGNED_SHORT,
2);n.set(q.DataType.UNSIGNED_INT,4);h.RenderPass=A;Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});