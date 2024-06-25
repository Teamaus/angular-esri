// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../Graphic ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ./DirectionsEvent ./DirectionsString ../../geometry/Polyline".split(" "),function(x,l,h,y,q,r,F,G,z,A,B,C,D){h=function(t){function n(c){c=t.call(this,c)||this;c.events=null;c.strings=null;
return c}x._inheritsLoose(n,t);n.prototype.readGeometry=function(c,m){var a=m.compressedGeometry;if(q.isNone(a)||""===a)var k=null;else{var u=m=c=0,v=0,w=[],b=0,e=0,g=0;(a=a.match(/((\+|\-)[^\+\-\|]+|\|)/g))||(a=[]);if(0===parseInt(a[b],32)){b=2;var d=parseInt(a[b],32);b++;var p=parseInt(a[b],32);b++;d&1&&(e=a.indexOf("|")+1,k=parseInt(a[e],32),e++);if(d&2){g=a.indexOf("|",e)+1;var E=parseInt(a[g],32);g++}}else p=parseInt(a[b],32),b++;for(;b<a.length&&"|"!==a[b];){d=parseInt(a[b],32)+c;b++;c=d;var f=
parseInt(a[b],32)+m;b++;m=f;d=[d/p,f/p];e&&(f=parseInt(a[e],32)+u,e++,u=f,d.push(f/k));g&&(f=parseInt(a[g],32)+v,g++,v=f,d.push(f/E));w.push(d)}k={paths:[w],hasZ:0<e,hasM:0<g}}return q.isSome(k)?D.fromJSON(k):null};return n}(y);l.__decorate([r.property({type:[B]})],h.prototype,"events",void 0);l.__decorate([z.reader("geometry",["compressedGeometry"])],h.prototype,"readGeometry",null);l.__decorate([r.property({type:[C]})],h.prototype,"strings",void 0);return h=l.__decorate([A.subclass("esri.rest.support.DirectionsFeature")],
h)});