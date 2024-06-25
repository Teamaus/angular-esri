// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/maybe ../../../core/workers/workers ../../../chunks/vec3f64 ../ray ../triangle ./ElevationSamplerWorker ../../../layers/support/ElevationSampler".split(" "),function(n,p,q,u,v,r,w,x,y){function k(){k=p._asyncToGenerator(function*(a,f){const b=yield z(),d=yield A.createIndex(a,b);B(b);return new C(a,d,f)});return k.apply(this,arguments)}function z(){++l;g&&(clearTimeout(g),g=0);return h?h:h=u.open("ElevationSamplerWorker").catch(()=>
null)}function B(a){--l;q.isSome(a)&&0===l&&(g=setTimeout(()=>{a.close();h=null;g=0},1E4))}let C=function(a){function f(b,d,e){var c=a.call(this)||this;c._rindex=d;c.demResolution={min:0,max:0};c.spatialReference=b.spatialReference.clone();c.extent=b.extent.clone();c.noDataValue=q.isSome(e)&&e.noDataValue||0;return c}p._inheritsLoose(f,a);f.prototype.elevationAt=function(b,d){let e=Number.NEGATIVE_INFINITY;r.fromValues([b,d,0],[0,0,-1],t);this._rindex.search({minX:b,maxX:b,minY:d,maxY:d},c=>{w.intersectRay(c,
t,m)&&m[2]>e&&(e=m[2])});return e===Number.NEGATIVE_INFINITY?this.noDataValue:e};return f}(y.ElevationSamplerBase);const A=new x;let l=0,h=null,g=0;const t=r.fromValues([0,0,0],[0,0,-1]),m=v.create();n.create=function(a,f){return k.apply(this,arguments)};Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});