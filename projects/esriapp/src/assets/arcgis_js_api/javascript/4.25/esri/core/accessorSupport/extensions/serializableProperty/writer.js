// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../Error","../../../Logger","../../../object","./type"],function(k,q,r,l,t){function u(a){return(b,c,d,e)=>{if(!b||m(b,a,e))return g(b,c,d,e)}}function m(a,b,c){for(var d in b.typeMap)if(a instanceof b.typeMap[d])return!0;c?.messages&&(d=b.errorContext??"type",b=`Values of type '${("function"!==typeof b.key?a[b.key]:a.declaredClass)??"Unknown"}' cannot be written`,c&&c.messages&&a&&c.messages.push(new q(`${d}:unsupported`,b,{definition:a,context:c})),r.getLogger("esri.core.accessorSupport.extensions.serializableProperty.writer").error(b));
return!1}function v(a){return(b,c,d,e)=>{if(!b||!Array.isArray(b))return g(b,c,d,e);b=b.filter(f=>m(f,a,e));return g(b,c,d,e)}}function g(a,b,c,d){l.setDeepValue(c,h(a,d),b)}function h(a,b){return a&&"function"===typeof a.write?a.write({},b):a&&"function"===typeof a.toJSON?a.toJSON():"number"===typeof a?n(a):a}function n(a){return-Infinity===a?-Number.MAX_VALUE:Infinity===a?Number.MAX_VALUE:isNaN(a)?null:a}function w(a,b,c,d){null===a?a=null:a&&"function"===typeof a.map?(a=a.map(e=>h(e,d)),"function"===
typeof a.toArray&&(a=a.toArray())):a=[h(a,d)];l.setDeepValue(c,a,b)}function p(a,b,c){return 0!==c&&Array.isArray(a)?a.map(d=>p(d,b,c-1)):h(a,b)}function x(a){return(b,c,d,e)=>{if(null===b)b=null;else{b=p(b,e,a);e=a;for(var f=b;0<e&&Array.isArray(f);)e--,f=f[0];if(void 0!==f)for(f=0;f<e;f++)b=[b]}l.setDeepValue(d,b,c)}}k.create=function(a,b){if(b.write&&!b.write.writer&&(!1!==b.write.enabled||b.write.overridePolicy)){var c=a?.ndimArray??0;a&&(1===c||"type"in a&&t.isCollection(a.type))?b.write.writer=
w:1<c?b.write.writer=x(c):b.types?Array.isArray(b.types)?b.write.writer=v(b.types[0]):b.write.writer=u(b.types):b.write.writer=g}};k.numberToJSON=n;Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});