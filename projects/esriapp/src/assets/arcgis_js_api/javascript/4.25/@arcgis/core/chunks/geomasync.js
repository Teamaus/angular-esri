/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{version as n}from"../kernel.js";import{K as t,p as e,L as r,y as i,A as o,E as a,o as s,q as l,C as u,M as c,t as f,O as m,P as p,Q as d,T as w,U as h,V as y,w as j,W as g,X as P,Y as v,Z as I,_ as A}from"./arcadeUtils.js";import F from"../geometry/Extent.js";import R from"../geometry/Geometry.js";import{disjoint as b,intersects as x,touches as N,crosses as S,within as U,contains as k,overlaps as C,equals as M,relate as z,intersect as E,union as O,difference as Z,symmetricDifference as L,clip as T,cut as D,planarArea as Q,geodesicArea as V,planarLength as W,geodesicLength as q,distance as J,densify as G,geodesicDensify as H,generalize as K,buffer as X,geodesicBuffer as Y,offset as _,rotate as B,simplify as $,isSimple as nn,convexHull as tn}from"../geometry/geometryEngineAsync.js";import en from"../geometry/Multipoint.js";import rn from"../geometry/Point.js";import on from"../geometry/Polygon.js";import an from"../geometry/Polyline.js";import{fromJSON as sn}from"../geometry/support/jsonUtils.js";import{e as ln}from"./unitUtils.js";import"./object.js";import"../core/lang.js";import"./maybe.js";import"../core/urlUtils.js";import"../config.js";import"../core/Error.js";import"./Logger.js";import"./string.js";import"../geometry.js";import"./ensureType.js";import"../geometry/SpatialReference.js";import"./tslib.es6.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"./ArrayPool.js";import"../core/accessorSupport/decorators/subclass.js";import"./tracking.js";import"../core/accessorSupport/decorators/property.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"../core/promiseUtils.js";import"./writer.js";import"./typeUtils.js";import"./jsonMap.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"./reader.js";import"./zmUtils.js";import"../core/accessorSupport/decorators/cast.js";import"./extentUtils.js";import"./ImmutableArray.js";import"./datetime.js";import"./number3.js";import"./locale.js";import"../layers/support/Field.js";import"./enumeration.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"./featureConversionUtils.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./hash.js";import"../request.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"./sizeVariableUtils.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"./Queue.js";import"../core/workers/RemoteClient.js";import"./assets.js";import"../intl.js";import"./number.js";import"./messages.js";import"./projectionEllipsoid.js";function un(t){return 0===n.indexOf("4.")?on.fromExtent(t):new on({spatialReference:t.spatialReference,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]})}function cn(n,t,r){if(e(n,2,2,t,r),n[0]instanceof R&&n[1]instanceof R);else if(n[0]instanceof R&&null===n[1]);else if(n[1]instanceof R&&null===n[0]);else if(null!==n[0]||null!==n[1])throw new o(t,a.InvalidParameter,r)}async function fn(n,t){if("polygon"!==n.type&&"polyline"!==n.type&&"extent"!==n.type)return 0;let e=1;(n.spatialReference.vcsWkid||n.spatialReference.latestVcsWkid)&&(e=I(n.spatialReference)/ln(n.spatialReference));let r=0;if("polyline"===n.type)for(const t of n.paths)for(let n=1;n<t.length;n++)r+=A(t[n],t[n-1],e);else if("polygon"===n.type)for(const t of n.rings){for(let n=1;n<t.length;n++)r+=A(t[n],t[n-1],e);(t[0][0]!==t[t.length-1][0]||t[0][1]!==t[t.length-1][1]||void 0!==t[0][2]&&t[0][2]!==t[t.length-1][2])&&(r+=A(t[0],t[t.length-1],e))}else"extent"===n.type&&(r+=2*A([n.xmin,n.ymin,0],[n.xmax,n.ymin,0],e),r+=2*A([n.xmin,n.ymin,0],[n.xmin,n.ymax,0],e),r*=2,r+=4*Math.abs(p(n.zmax,0)*e-p(n.zmin,0)*e));const i=new an({hasZ:!1,hasM:!1,spatialReference:n.spatialReference,paths:[[0,0],[0,r]]});return W(i,t)}function mn(n){"async"===n.mode&&(n.functions.disjoint=function(e,r){return n.standardFunctionAsync(e,r,((n,i,o)=>(cn(o=t(o),e,r),null===o[0]||null===o[1]||b(o[0],o[1]))))},n.functions.intersects=function(e,r){return n.standardFunctionAsync(e,r,((n,i,o)=>(cn(o=t(o),e,r),null!==o[0]&&null!==o[1]&&x(o[0],o[1]))))},n.functions.touches=function(e,r){return n.standardFunctionAsync(e,r,((n,i,o)=>(cn(o=t(o),e,r),null!==o[0]&&null!==o[1]&&N(o[0],o[1]))))},n.functions.crosses=function(e,r){return n.standardFunctionAsync(e,r,((n,i,o)=>(cn(o=t(o),e,r),null!==o[0]&&null!==o[1]&&S(o[0],o[1]))))},n.functions.within=function(e,r){return n.standardFunctionAsync(e,r,((n,i,o)=>(cn(o=t(o),e,r),null!==o[0]&&null!==o[1]&&U(o[0],o[1]))))},n.functions.contains=function(e,r){return n.standardFunctionAsync(e,r,((n,i,o)=>(cn(o=t(o),e,r),null!==o[0]&&null!==o[1]&&k(o[0],o[1]))))},n.functions.overlaps=function(e,r){return n.standardFunctionAsync(e,r,((n,i,o)=>(cn(o=t(o),e,r),null!==o[0]&&null!==o[1]&&C(o[0],o[1]))))},n.functions.equals=function(t,i){return n.standardFunctionAsync(t,i,((n,o,a)=>(e(a,2,2,t,i),a[0]===a[1]||(a[0]instanceof R&&a[1]instanceof R?M(a[0],a[1]):!(!r(a[0])||!r(a[1]))&&a[0].getTime()===a[1].getTime()))))},n.functions.relate=function(r,s){return n.standardFunctionAsync(r,s,((n,l,u)=>{if(u=t(u),e(u,3,3,r,s),u[0]instanceof R&&u[1]instanceof R)return z(u[0],u[1],i(u[2]));if(u[0]instanceof R&&null===u[1])return!1;if(u[1]instanceof R&&null===u[0])return!1;if(null===u[0]&&null===u[1])return!1;throw new o(r,a.InvalidParameter,s)}))},n.functions.intersection=function(e,r){return n.standardFunctionAsync(e,r,((n,i,o)=>(cn(o=t(o),e,r),null===o[0]||null===o[1]?null:E(o[0],o[1]))))},n.functions.union=function(e,r){return n.standardFunctionAsync(e,r,((n,i,f)=>{const m=[];if(0===(f=t(f)).length)throw new o(e,a.WrongNumberOfParameters,r);if(1===f.length)if(s(f[0])){const n=t(f[0]);for(let t=0;t<n.length;t++)if(null!==n[t]){if(!(n[t]instanceof R))throw new o(e,a.InvalidParameter,r);m.push(n[t])}}else{if(!l(f[0])){if(f[0]instanceof R)return u(c(f[0]),e.spatialReference);if(null===f[0])return null;throw new o(e,a.InvalidParameter,r)}{const n=t(f[0].toArray());for(let t=0;t<n.length;t++)if(null!==n[t]){if(!(n[t]instanceof R))throw new o(e,a.InvalidParameter,r);m.push(n[t])}}}else for(let n=0;n<f.length;n++)if(null!==f[n]){if(!(f[n]instanceof R))throw new o(e,a.InvalidParameter,r);m.push(f[n])}return 0===m.length?null:O(m)}))},n.functions.difference=function(e,r){return n.standardFunctionAsync(e,r,((n,i,o)=>(cn(o=t(o),e,r),null!==o[0]&&null===o[1]?c(o[0]):null===o[0]?null:Z(o[0],o[1]))))},n.functions.symmetricdifference=function(e,r){return n.standardFunctionAsync(e,r,((n,i,o)=>(cn(o=t(o),e,r),null===o[0]&&null===o[1]?null:null===o[0]?c(o[1]):null===o[1]?c(o[0]):L(o[0],o[1]))))},n.functions.clip=function(r,i){return n.standardFunctionAsync(r,i,((n,s,l)=>{if(l=t(l),e(l,2,2,r,i),!(l[1]instanceof F)&&null!==l[1])throw new o(r,a.InvalidParameter,i);if(null===l[0])return null;if(!(l[0]instanceof R))throw new o(r,a.InvalidParameter,i);return null===l[1]?null:T(l[0],l[1])}))},n.functions.cut=function(r,i){return n.standardFunctionAsync(r,i,((n,s,l)=>{if(l=t(l),e(l,2,2,r,i),!(l[1]instanceof an)&&null!==l[1])throw new o(r,a.InvalidParameter,i);if(null===l[0])return[];if(!(l[0]instanceof R))throw new o(r,a.InvalidParameter,i);return null===l[1]?[c(l[0])]:D(l[0],l[1])}))},n.functions.area=function(r,i){return n.standardFunctionAsync(r,i,(async(n,u,c)=>{if(e(c,1,2,r,i),null===(c=t(c))[0])return 0;if(f(c[0])){const n=await c[0].sumArea(m(p(c[1],-1)),!1,r.abortSignal);if(r.abortSignal.aborted)throw new o(r,a.Cancelled,i);return n}if(s(c[0])||l(c[0])){const n=d(c[0],r.spatialReference);return null===n?0:Q(n,m(p(c[1],-1)))}if(!(c[0]instanceof R))throw new o(r,a.InvalidParameter,i);return Q(c[0],m(p(c[1],-1)))}))},n.functions.areageodetic=function(r,i){return n.standardFunctionAsync(r,i,(async(n,u,c)=>{if(e(c,1,2,r,i),null===(c=t(c))[0])return 0;if(f(c[0])){const n=await c[0].sumArea(m(p(c[1],-1)),!0,r.abortSignal);if(r.abortSignal.aborted)throw new o(r,a.Cancelled,i);return n}if(s(c[0])||l(c[0])){const n=d(c[0],r.spatialReference);return null===n?0:V(n,m(p(c[1],-1)))}if(!(c[0]instanceof R))throw new o(r,a.InvalidParameter,i);return V(c[0],m(p(c[1],-1)))}))},n.functions.length=function(r,i){return n.standardFunctionAsync(r,i,(async(n,u,c)=>{if(e(c,1,2,r,i),null===(c=t(c))[0])return 0;if(f(c[0])){const n=await c[0].sumLength(w(p(c[1],-1)),!1,r.abortSignal);if(r.abortSignal.aborted)throw new o(r,a.Cancelled,i);return n}if(s(c[0])||l(c[0])){const n=h(c[0],r.spatialReference);return null===n?0:W(n,w(p(c[1],-1)))}if(!(c[0]instanceof R))throw new o(r,a.InvalidParameter,i);return W(c[0],w(p(c[1],-1)))}))},n.functions.length3d=function(r,i){return n.standardFunctionAsync(r,i,((n,u,c)=>{if(e(c,1,2,r,i),null===(c=t(c))[0])return 0;if(s(c[0])||l(c[0])){const n=h(c[0],r.spatialReference);return null===n?0:!0===n.hasZ?fn(n,w(p(c[1],-1))):W(n,w(p(c[1],-1)))}if(!(c[0]instanceof R))throw new o(r,a.InvalidParameter,i);return!0===c[0].hasZ?fn(c[0],w(p(c[1],-1))):W(c[0],w(p(c[1],-1)))}))},n.functions.lengthgeodetic=function(r,i){return n.standardFunctionAsync(r,i,(async(n,u,c)=>{if(e(c,1,2,r,i),null===(c=t(c))[0])return 0;if(f(c[0])){const n=await c[0].sumLength(w(p(c[1],-1)),!0,r.abortSignal);if(r.abortSignal.aborted)throw new o(r,a.Cancelled,i);return n}if(s(c[0])||l(c[0])){const n=h(c[0],r.spatialReference);return null===n?0:q(n,w(p(c[1],-1)))}if(!(c[0]instanceof R))throw new o(r,a.InvalidParameter,i);return q(c[0],w(p(c[1],-1)))}))},n.functions.distance=function(r,i){return n.standardFunctionAsync(r,i,((n,u,c)=>{c=t(c),e(c,2,3,r,i);let f=c[0];(s(c[0])||l(c[0]))&&(f=y(c[0],r.spatialReference));let m=c[1];if((s(c[1])||l(c[1]))&&(m=y(c[1],r.spatialReference)),!(f instanceof R))throw new o(r,a.InvalidParameter,i);if(!(m instanceof R))throw new o(r,a.InvalidParameter,i);return J(f,m,w(p(c[2],-1)))}))},n.functions.distancegeodetic=function(r,i){return n.standardFunctionAsync(r,i,((n,s,l)=>{l=t(l),e(l,2,3,r,i);const u=l[0],c=l[1];if(!(u instanceof rn))throw new o(r,a.InvalidParameter,i);if(!(c instanceof rn))throw new o(r,a.InvalidParameter,i);const f=new an({paths:[],spatialReference:u.spatialReference});return f.addPath([u,c]),q(f,w(p(l[2],-1)))}))},n.functions.densify=function(r,i){return n.standardFunctionAsync(r,i,((n,s,l)=>{if(l=t(l),e(l,2,3,r,i),null===l[0])return null;if(!(l[0]instanceof R))throw new o(r,a.InvalidParameter,i);const u=j(l[1]);if(isNaN(u))throw new o(r,a.InvalidParameter,i);if(u<=0)throw new o(r,a.InvalidParameter,i);return l[0]instanceof on||l[0]instanceof an?G(l[0],u,w(p(l[2],-1))):l[0]instanceof F?G(un(l[0]),u,w(p(l[2],-1))):l[0]}))},n.functions.densifygeodetic=function(r,i){return n.standardFunctionAsync(r,i,((n,s,l)=>{if(l=t(l),e(l,2,3,r,i),null===l[0])return null;if(!(l[0]instanceof R))throw new o(r,a.InvalidParameter,i);const u=j(l[1]);if(isNaN(u))throw new o(r,a.InvalidParameter,i);if(u<=0)throw new o(r,a.InvalidParameter,i);return l[0]instanceof on||l[0]instanceof an?H(l[0],u,w(p(l[2],-1))):l[0]instanceof F?H(un(l[0]),u,w(p(l[2],-1))):l[0]}))},n.functions.generalize=function(r,i){return n.standardFunctionAsync(r,i,((n,s,l)=>{if(l=t(l),e(l,2,4,r,i),null===l[0])return null;if(!(l[0]instanceof R))throw new o(r,a.InvalidParameter,i);const u=j(l[1]);if(isNaN(u))throw new o(r,a.InvalidParameter,i);return K(l[0],u,g(p(l[2],!0)),w(p(l[3],-1)))}))},n.functions.buffer=function(r,i){return n.standardFunctionAsync(r,i,((n,s,l)=>{if(l=t(l),e(l,2,3,r,i),null===l[0])return null;if(!(l[0]instanceof R))throw new o(r,a.InvalidParameter,i);const u=j(l[1]);if(isNaN(u))throw new o(r,a.InvalidParameter,i);return 0===u?c(l[0]):X(l[0],u,w(p(l[2],-1)))}))},n.functions.buffergeodetic=function(r,i){return n.standardFunctionAsync(r,i,((n,s,l)=>{if(l=t(l),e(l,2,3,r,i),null===l[0])return null;if(!(l[0]instanceof R))throw new o(r,a.InvalidParameter,i);const u=j(l[1]);if(isNaN(u))throw new o(r,a.InvalidParameter,i);return 0===u?c(l[0]):Y(l[0],u,w(p(l[2],-1)))}))},n.functions.offset=function(r,s){return n.standardFunctionAsync(r,s,((n,l,u)=>{if(u=t(u),e(u,2,6,r,s),null===u[0])return null;if(!(u[0]instanceof on||u[0]instanceof an))throw new o(r,a.InvalidParameter,s);const c=j(u[1]);if(isNaN(c))throw new o(r,a.InvalidParameter,s);const f=j(p(u[4],10));if(isNaN(f))throw new o(r,a.InvalidParameter,s);const m=j(p(u[5],0));if(isNaN(m))throw new o(r,a.InvalidParameter,s);return _(u[0],c,w(p(u[2],-1)),i(p(u[3],"round")).toLowerCase(),f,m)}))},n.functions.rotate=function(r,i){return n.standardFunctionAsync(r,i,((n,s,l)=>{l=t(l),e(l,2,3,r,i);let u=l[0];if(null===u)return null;if(!(u instanceof R))throw new o(r,a.InvalidParameter,i);u instanceof F&&(u=on.fromExtent(u));const c=j(l[1]);if(isNaN(c))throw new o(r,a.InvalidParameter,i);const f=p(l[2],null);if(null===f)return B(u,c);if(f instanceof rn)return B(u,c,f);throw new o(r,a.InvalidParameter,i)}))},n.functions.centroid=function(r,i){return n.standardFunctionAsync(r,i,((n,f,m)=>{if(m=t(m),e(m,1,1,r,i),null===m[0])return null;let p=m[0];if((s(m[0])||l(m[0]))&&(p=y(m[0],r.spatialReference)),null===p)return null;if(!(p instanceof R))throw new o(r,a.InvalidParameter,i);return p instanceof rn?u(c(m[0]),r.spatialReference):p instanceof on?p.centroid:p instanceof an?P(p):p instanceof en?v(p):p instanceof F?p.center:null}))},n.functions.multiparttosinglepart=function(r,i){return n.standardFunctionAsync(r,i,(async(n,s,l)=>{l=t(l),e(l,1,1,r,i);const f=[];if(null===l[0])return null;if(!(l[0]instanceof R))throw new o(r,a.InvalidParameter,i);if(l[0]instanceof rn)return[u(c(l[0]),r.spatialReference)];if(l[0]instanceof F)return[u(c(l[0]),r.spatialReference)];const m=await $(l[0]);if(m instanceof on){const n=[],t=[];for(let e=0;e<m.rings.length;e++)if(m.isClockwise(m.rings[e])){const t=sn({rings:[m.rings[e]],hasZ:!0===m.hasZ,hazM:!0===m.hasM,spatialReference:m.spatialReference.toJSON()});n.push(t)}else t.push({ring:m.rings[e],pt:m.getPoint(e,0)});for(let e=0;e<t.length;e++)for(let r=0;r<n.length;r++)if(n[r].contains(t[e].pt)){n[r].addRing(t[e].ring);break}return n}if(m instanceof an){const n=[];for(let t=0;t<m.paths.length;t++){const e=sn({paths:[m.paths[t]],hasZ:!0===m.hasZ,hazM:!0===m.hasM,spatialReference:m.spatialReference.toJSON()});n.push(e)}return n}if(l[0]instanceof en){const n=u(c(l[0]),r.spatialReference);for(let t=0;t<n.points.length;t++)f.push(n.getPoint(t));return f}return null}))},n.functions.issimple=function(r,i){return n.standardFunctionAsync(r,i,((n,s,l)=>{if(l=t(l),e(l,1,1,r,i),null===l[0])return!0;if(!(l[0]instanceof R))throw new o(r,a.InvalidParameter,i);return nn(l[0])}))},n.functions.simplify=function(r,i){return n.standardFunctionAsync(r,i,((n,s,l)=>{if(l=t(l),e(l,1,1,r,i),null===l[0])return null;if(!(l[0]instanceof R))throw new o(r,a.InvalidParameter,i);return $(l[0])}))},n.functions.convexhull=function(r,i){return n.standardFunctionAsync(r,i,((n,s,l)=>{if(l=t(l),e(l,1,1,r,i),null===l[0])return null;if(!(l[0]instanceof R))throw new o(r,a.InvalidParameter,i);return tn(l[0])}))})}export{mn as registerFunctions};