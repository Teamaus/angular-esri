// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../core/mathUtils ../../../core/maybe ../../../chunks/mat4 ../../../chunks/mat4f64 ../../../chunks/vec3 ../../../chunks/vec3f64 ../../ViewingMode ../../../chunks/SunCalc ./mathUtils".split(" "),function(B,E,F,C,S,p,r,M,A,ca){function T(a,g,k){g===M.ViewingMode.Global?p.normalize(N,a.eye):p.set(N,0,0,1);p.scale(O,a.viewForward,-1);g=ca.angle(O,N);const e=Math.max(g-.5,0);C.fromRotation(U,-Math.max(.25,g-.25-.85*e/(e+1)),a.viewRight);p.transformMat4(k,O,U);p.add(k,k,p.scale(da,
a.viewRight,.2));p.normalize(k,k)}function V(a,g,k,e){const l=ea,b=C.identity(fa);if(k===M.ViewingMode.Global)A.SunCalc.getPosition(a,0,0,l),p.set(e,0,0,-1),C.rotateX(b,b,-l.azimuth),C.rotateY(b,b,-l.altitude);else{var f=w.planarDirection;k=f.globalAngles;f=(Math.abs(g[2])-f.localAltitude)/(f.globalAltitude-f.localAltitude);f=E.clamp(f,0,1);1>f?(A.SunCalc.getPosition(a,g[1],g[0],l),l.azimuth=(1-f)*l.azimuth+f*k.azimuth,l.altitude=(1-f)*l.altitude+f*k.altitude):(l.azimuth=k.azimuth,l.altitude=k.altitude);
p.set(e,0,-1,0);C.rotateZ(b,b,-l.azimuth);C.rotateX(b,b,-l.altitude)}p.transformMat4(e,e,b)}function W(a){switch(a){case "disabled":case "sunny":return{direct:1,ambient:1};case "cloudy":return{direct:1,ambient:1};case "rainy":return{direct:.4,ambient:1.2};case "snowy":return{direct:.5,ambient:1.3};case "foggy":return{direct:.2,ambient:1.6}}}function X(a,g){const k=(a[0]+a[1]+a[2])/3;for(let e=0;3>e;e++)a[e]+=(k-a[e])*g;return a}function m(a,g,k,e){const l=[];for(let b=0;b<k.length;b++)l[b]=(e[b]-
k[b])*a/g+k[b];return l}const w={local:{altitude:1500,ambientAtNight:.1,ambientAtNoon:.45,ambientAtTwilight:.2,directAtNoon:.65,directAtTwilight:.7},global:{altitude:8E5,ambient:.015,direct:.75},planarDirection:{localAltitude:1E4,globalAltitude:1E6,globalAngles:{azimuth:1.3*Math.PI,altitude:.6*Math.PI}}},ha=r.fromValues(.5773502691896258,-.5773502691896258,.5773502691896258),fa=S.create(),ea={azimuth:0,altitude:0},Y=new Date(0),U=S.create(),N=r.create(),O=r.create(),da=r.create();B.ColorAndIntensity=
function(){this.ambient={color:r.fromValues(1,1,1),intensity:.55};this.direct={color:r.fromValues(1,1,1),intensity:.55,directionToLightSource:r.clone(ha)};this.noonFactor=.5;this.globalFactor=0;this.environmentStrength=this.specularStrength=1};B.computeColorAndIntensity=function(a,g,k,e,l,b){p.set(b.ambient.color,1,1,1);b.ambient.intensity=w.global.ambient;p.set(b.direct.color,1,1,1);b.direct.intensity=w.global.direct;var f=E.clamp((Math.abs(g[2])-w.local.altitude)/(w.global.altitude-w.local.altitude),
0,1);b.globalFactor=f;var x;F.isSome(a)&&(x=A.SunCalc.getTimes(a,g[1],g[0]));if(1>f){if(F.isSome(a)){var n=x;var c=a.valueOf();if(n.polarException===A.SunCalc.PolarException.MIDNIGHT_SUN){var q=c-36E5*(a.getHours()+48)-6E4*a.getMinutes();var h=q+432E6}else n.polarException===A.SunCalc.PolarException.POLAR_NIGHT?(q=c-2,h=c-1):(q=n.sunrise.valueOf(),h=n.sunset.valueOf());var y=h-q;n=q+y/2;var t=y/4;var u=n-t;t=n+t;var z=.06*y;y=q-z/2;q+=z/2;const D=h-z/2,P=h+z/2;h=w.local;z=[.01,h.ambientAtNight];const Q=
[.8,.8,1],R=[.01,.01,.01],G=[h.directAtTwilight,h.ambientAtTwilight],H=[1,.6,.5],I=[.8,.8,1],J=[.9*h.directAtNoon,h.ambientAtNoon],K=[1,.98,.98],L=[.98,.98,1],Z=[h.directAtNoon,h.ambientAtNoon],aa=[1,1,1],ba=[1,1,1];h=[0,0];let v=[0,0,0];var d=[0,0,0];c<y||c>P?(h=z,v=R,d=Q):c<q?(d=q-y,h=m(c-y,d,z,G),v=m(c-y,d,R,H),d=m(c-y,d,Q,I)):c<u?(d=u-q,h=m(c-q,d,G,J),v=m(c-q,d,H,K),d=m(c-q,d,I,L)):c<n?(d=n-u,h=m(c-u,d,J,Z),v=m(c-u,d,K,aa),d=m(c-u,d,L,ba)):c<t?(d=t-n,h=m(c-n,d,Z,J),v=m(c-n,d,aa,K),d=m(c-n,d,ba,
L)):c<D?(d=D-t,h=m(c-t,d,J,G),v=m(c-t,d,K,H),d=m(c-t,d,L,I)):c<P&&(d=P-D,h=m(c-D,d,G,z),v=m(c-D,d,H,R),d=m(c-D,d,I,Q));c=0;switch(e){case "rainy":case "foggy":c=.9;case "snowy":c=.5}0<c&&(v=X(v,c),d=X(d,c));n=r.fromValues(v[0],v[1],v[2]);u=r.fromValues(d[0],d[1],d[2]);t=W(e);c=h[0]*t.direct;h=h[1]*t.ambient}else u=W(e),c=w.local.directAtNoon*u.direct,n=r.fromValues(1,1,1),h=w.local.ambientAtNoon*u.ambient,u=r.fromValues(1,1,1);p.lerp(b.ambient.color,u,b.ambient.color,f);b.ambient.intensity=E.lerp(h,
b.ambient.intensity,f);p.lerp(b.direct.color,n,b.direct.color,f);b.direct.intensity=E.lerp(c,b.direct.intensity,f);b.specularStrength="rainy"===e||"snowy"===e||"foggy"===e?0:1;b.environmentStrength="rainy"===e?.7:"snowy"===e||"foggy"===e?.75:1}F.isSome(a)?(e=a.valueOf(),x.polarException===A.SunCalc.PolarException.MIDNIGHT_SUN?(f=e-36E5*(a.getHours()+48)-6E4*a.getMinutes(),x=f+432E6):x.polarException===A.SunCalc.PolarException.POLAR_NIGHT?(f=e-2,x=e-1):(f=x.sunrise.valueOf(),x=x.sunset.valueOf()),
e=1-E.clamp(Math.abs(e-(f+(x-f)/2))/432E5,0,1)):e=1;b.noonFactor=e;F.isSome(a)?V(a,g,k,b.direct.directionToLightSource):T(l,k,b.direct.directionToLightSource)};B.computeDirectionsOverTime=function(a,g,k,e,l){a=a.getTime();g=g.getTime()-a;g=Math.floor(g/k)+1;const b=Array(g);for(let f=0;f<g;++f)Y.setTime(a+k*f),b[f]=r.create(),V(Y,e,l,b[f]);return b};B.computeShadowsEnabled=function(a,g){return g===M.ViewingMode.Global?!0:Math.abs(a)<w.planarDirection.localAltitude};B.computeVirtualLightDirection=
T;Object.defineProperties(B,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});