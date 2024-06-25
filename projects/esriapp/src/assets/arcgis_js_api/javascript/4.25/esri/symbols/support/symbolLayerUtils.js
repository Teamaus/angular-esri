// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("require exports ../../chunks/_rollupPluginBabelHelpers ../../request ../../core/Error ../../core/ItemCache ../../core/maybe ../../geometry/support/aaBoundingBox ./symbolLayerUtils3D".split(" "),function(v,d,e,w,f,r,g,t,u){function h(){h=e._asyncToGenerator(function*(a,b){if("icon"===a.type)return x(a,b);if("object"===a.type)return y(a,b);throw new f("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object");});return h.apply(this,arguments)}
function k(a,b){return l.apply(this,arguments)}function l(){l=e._asyncToGenerator(function*(a,b){if(a.resource?.href)return z(a.resource.href).then(c=>[c.width,c.height]);if(a.resource?.primitive)return g.isSome(b)?[b,b]:[256,256];throw new f("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource");});return l.apply(this,arguments)}function x(a,b){return k(a,b).then(c=>{if(null==a.size)return c;c=c[0]/c[1];return 1<c?[a.size,a.size/c]:[a.size*
c,a.size]})}function z(a){return w(a,{responseType:"image"}).then(b=>b.data)}function m(a,b){return A(a,b).then(c=>t.size(c))}function y(a,b){return n.apply(this,arguments)}function n(){n=e._asyncToGenerator(function*(a,b){b=yield m(a,b);return u.objectSymbolLayerSizeWithResourceSize(b,a)});return n.apply(this,arguments)}function A(a,b){return p.apply(this,arguments)}function p(){p=e._asyncToGenerator(function*(a,b){if(!a.isPrimitive){b=g.unwrapOrThrow(a.resource?.href);var c=q.get(b);if(void 0!==
c)return c;c=yield(yield new Promise((B,C)=>v(["../../views/3d/layers/graphics/objectResourceUtils"],B,C))).fetch(b,{disableTextures:!0});q.put(b,c.referenceBoundingBox);return c.referenceBoundingBox}c=null;if(a.resource&&a.resource.primitive&&(c=t.create(u.objectSymbolLayerPrimitiveBoundingBox(a.resource.primitive)),g.isSome(b)))for(a=0;a<c.length;a++)c[a]*=b;return c?Promise.resolve(c):Promise.reject(new f("symbol:invalid-resource","The symbol does not have a valid resource"))});return p.apply(this,
arguments)}let q=new r(50);d.clearBoundingBoxCache=function(){q=new r(50)};d.computeIconLayerResourceSize=k;d.computeLayerResourceSize=function(a,b){if("icon"===a.type)return k(a,b);if("object"===a.type)return m(a,b);throw new f("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object");};d.computeLayerSize=function(a,b){return h.apply(this,arguments)};d.computeObjectLayerResourceSize=m;Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});