// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../request ../../core/Error ../../core/promiseUtils ../../views/2d/engine/webgl/animatedFormats/apng ../../views/2d/engine/webgl/animatedFormats/gif".split(" "),function(h,n,p,q,r,t){function u(b,c){return k.apply(this,arguments)}function k(){k=h._asyncToGenerator(function*(b,c){b=window.URL.createObjectURL(b);try{const {data:a}=yield n(b,{...c,responseType:"image"});return a}catch(a){if(!q.isAbortError(a))throw new p("mapview-invalid-resource",`Could not fetch requested resource at ${b}`);
throw a;}finally{window.URL.revokeObjectURL(b)}});return k.apply(this,arguments)}function v(b,c){return l.apply(this,arguments)}function l(){l=h._asyncToGenerator(function*(b,c){const {arrayBuffer:a,mediaType:d}=yield w(b,c);b="image/png"===d;if("image/gif"===d&&t.isAnimatedGIF(a))return t.parseGif(a,c);if(b&&r.isAnimatedPNG(a))return r.parseApng(a,c);b=new Blob([a],{type:d});return u(b,c)});return l.apply(this,arguments)}function w(b,c){return m.apply(this,arguments)}function m(){m=h._asyncToGenerator(function*(b,
c){if(b.includes(";base64,")){c=b.indexOf(";base64,");var a=b.indexOf(";base64,")+8;a=b.substring(a);a=atob(a);var d=new Uint8Array(a.length);for(var e=0;e<a.length;e++)d[e]=a.charCodeAt(e);a=d.buffer;b=b.substring(0,c).replace("data:","");a={arrayBuffer:a,mediaType:b}}else try{d=yield n(b,{responseType:"array-buffer",...c});e=d.data;const f=d.getHeader("Content-Type");a={arrayBuffer:e,mediaType:f}}catch(f){if(!q.isAbortError(f))throw new p("mapview-invalid-resource",`Could not fetch requested resource at ${b}`);
}return a});return m.apply(this,arguments)}return function(){function b(){this._resourceMap=new Map;this._inFlightResourceMap=new Map;this.geometryEngine=null}var c=b.prototype;c.destroy=function(){this._inFlightResourceMap.clear();this._resourceMap.clear()};c.getResource=function(a){return this._resourceMap.get(a)??null};c.fetchResource=function(){var a=h._asyncToGenerator(function*(d,e){var f=this._resourceMap.get(d);if(f)return{width:f.width,height:f.height};if(f=this._inFlightResourceMap.get(d))return f.then(g=>
({width:g.width,height:g.height}));e=v(d,e);this._inFlightResourceMap.set(d,f);return e.then(g=>{this._inFlightResourceMap.delete(d);this._resourceMap.set(d,g);return{width:g.width,height:g.height}},()=>({width:0,height:0}))});return function(d,e){return a.apply(this,arguments)}}();c.deleteResource=function(a){this._inFlightResourceMap.delete(a);this._resourceMap.delete(a)};return b}()});