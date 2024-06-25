// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../geometry ../../core/Error ../../core/unitUtils ./geodesicConstants ./spatialReferenceUtils ../Polyline ../Polygon ../Point ../SpatialReference".split(" "),function(z,U,y,L,v,M,Q,R,S,T){function N(a){if(!a)return null;if(M.isGeographic(a)&&a.wkid){var b=v.spheroids[a.wkid];if(b)return b}return a.wkt&&((a=v.WKT_SPHEROID_REGEX.exec(a.wkt))&&2===a.length?(b=a[1].split(","),!b||3>b.length?a=null:(a=parseFloat(b[1]),b=parseFloat(b[2]),a=isNaN(a)||isNaN(b)?null:{a,f:0===b?0:1/b})):
a=null,a)?a:null}function I(a){a=N(a??T.WGS84);if(null!=a&&"b"in a&&"eSq"in a&&"radius"in a)return a;const b=a.a*(1-a.f);return Object.assign(a,{b,eSq:1-(b/a.a)**2,radius:(2*a.a+b)/3,densificationRatio:1E4/((2*a.a+b)/3)})}function O(a){return null!=a&&0>a?a+360:a}function J(a,b,e){const {a:d,eSq:c}=I(e);e=Math.sqrt(c);const f=Math.sin(b[1]*v.toRadians);b=d*b[0]*v.toRadians;e=0<c?d*(1-c)*(f/(1-c*f*f)-1/(2*e)*Math.log((1-e*f)/(1+e*f)))*.5:d*f;a[0]=b;a[1]=e;return a}function E(a){return null!==N(a)}
function P(a,b){if("polyline"!==a.type&&"polygon"!==a.type)throw new y("geodesic-densify:invalid-geometry","the input geometry is neither polyline nor polygon");const {spatialReference:e}=a;if(!E(e))throw new y("geodesic-densify:invalid-spatial-reference","the input geometry spatial reference is not supported");var d="polyline"===a.type?a.paths:a.rings;const c=[],f=[0,0],t=new G;for(const m of d){d=[];c.push(d);d.push([m[0][0],m[0][1]]);var h=m[0][0],g=m[0][1];let n,p;for(let k=0;k<m.length-1;k++){n=
m[k+1][0];p=m[k+1][1];if(h===n&&g===p)continue;const q=[h,g];K(t,[h,g],[n,p],e);const {azimuth:l,distance:r}=t;h=r/b;if(1<h){for(g=1;g<=h-1;g++)H(f,q,l,g*b,e),d.push(f.slice(0));H(f,q,l,(r+Math.floor(h-1)*b)/2,e);d.push(f.slice(0))}H(f,q,l,r,e);d.push(f.slice(0));h=f[0];g=f[1]}}return"polyline"===a.type?new Q({paths:c,spatialReference:e}):new R({rings:c,spatialReference:e})}function H(a,b,e,d,c){const f=b[0]*v.toRadians;b=b[1]*v.toRadians;e=(e??0)*v.toRadians;const {a:t,b:h,f:g}=I(c);c=Math.sin(e);
e=Math.cos(e);var m=(1-g)*Math.tan(b);b=1/Math.sqrt(1+m*m);const n=m*b,p=Math.atan2(m,e);m=b*c;const k=m*m;var q=1-k,l=q*(t*t-h*h)/(h*h);const r=1+l/16384*(4096+l*(-768+l*(320-175*l))),F=l/1024*(256+l*(-128+l*(74-47*l)));l=d/(h*r);let B=2*Math.PI,u,A,w,D;for(;1E-12<Math.abs(l-B);)w=Math.cos(2*p+l),u=Math.sin(l),A=Math.cos(l),D=F*u*(w+F/4*(A*(-1+2*w*w)-F/6*w*(-3+4*u*u)*(-3+4*w*w))),B=l,l=d/(h*r)+D;d=n*u-b*A*e;q=g/16*q*(4+g*(4-3*q));d=Math.atan2(n*A+b*u*e,(1-g)*Math.sqrt(k+d*d))/v.toRadians;a[0]=(f+
(Math.atan2(u*c,b*A-n*u*e)-(1-q)*g*m*(l+q*u*(w+q*A*(-1+2*w*w)))))/v.toRadians;a[1]=d;return a}function K(a,b,e,d){var c=b[0]*v.toRadians;b=b[1]*v.toRadians;var f=e[0]*v.toRadians;e=e[1]*v.toRadians;const {a:t,b:h,f:g,radius:m}=I(d),n=f-c;var p=Math.atan((1-g)*Math.tan(b)),k=Math.atan((1-g)*Math.tan(e));d=Math.sin(p);p=Math.cos(p);const q=Math.sin(k);k=Math.cos(k);let l=1E3,r=n,F,B,u;let A,w,D;do{var x=Math.sin(r);var C=Math.cos(r);u=Math.sqrt(k*x*k*x+(p*q-d*k*C)*(p*q-d*k*C));if(0===u)return a.distance=
0,a.azimuth=void 0,a.reverseAzimuth=void 0,a;C=d*q+p*k*C;A=Math.atan2(u,C);w=p*k*x/u;B=1-w*w;x=C-2*d*q/B;isNaN(x)&&(x=0);D=g/16*B*(4+g*(4-3*B));F=r;r=n+(1-D)*g*w*(A+D*u*(x+D*C*(-1+2*x*x)))}while(1E-12<Math.abs(r-F)&&0<--l);if(0===l)return d=Math.acos(Math.sin(b)*Math.sin(e)+Math.cos(b)*Math.cos(e)*Math.cos(f-c))*m,c=f-c,a.azimuth=Math.atan2(Math.sin(c)*Math.cos(e),Math.cos(b)*Math.sin(e)-Math.sin(b)*Math.cos(e)*Math.cos(c))/v.toRadians,a.distance=d,a.reverseAzimuth=void 0,a;c=B*(t*t-h*h)/(h*h);b=
c/1024*(256+c*(-128+c*(74-47*c)));f=Math.atan2(p*Math.sin(r),p*q*Math.cos(r)-d*k);a.azimuth=Math.atan2(k*Math.sin(r),p*q-d*k*Math.cos(r))/v.toRadians;a.distance=h*(1+c/16384*(4096+c*(-768+c*(320-175*c))))*(A-b*u*(x+b/4*(C*(-1+2*x*x)-b/6*x*(-3+4*u*u)*(-3+4*x*x))));a.reverseAzimuth=f/v.toRadians;return a}let G=function(a=0,b,e){this.distance=a;this.azimuth=b;this.reverseAzimuth=e};z.InverseGeodeticSolverResult=G;z.directGeodeticSolver=H;z.geodesicAreas=function(a,b="square-meters"){if(a.some(f=>!E(f.spatialReference)))throw new y("geodesic-areas:invalid-spatial-reference",
"the input geometries spatial reference is not supported");const e=[];for(var d=0;d<a.length;d++){var c=a[d];const {radius:f,densificationRatio:t}=I(c.spatialReference);e.push(P(c,f*t))}a=[];d=[0,0];c=[0,0];for(let f=0;f<e.length;f++){const {rings:t,spatialReference:h}=e[f];let g=0;for(let m=0;m<t.length;m++){const n=t[m];J(d,n[0],h);J(c,n[n.length-1],h);let p=c[0]*d[1]-d[0]*c[1];for(let k=0;k<n.length-1;k++)J(d,n[k+1],h),J(c,n[k],h),p+=c[0]*d[1]-d[0]*c[1];g+=p}g=L.convertUnit(g,"square-meters",b);
a.push(g/-2)}return a};z.geodesicDensify=P;z.geodesicDistance=function(a,b,e="meters"){if(!a||!b)throw new y("geodesic-distance:missing-parameters","one or both input parameters are missing");if(!a.spatialReference||!b.spatialReference)throw new y("geodesic-distance:invalid-parameters","one or both input points do not have a spatial reference");if(!M.equals(a.spatialReference,b.spatialReference))throw new y("geodesic-distance:invalid-parameters","spatial references of input parameters do not match");
const {spatialReference:d}=a;if(!E(d))throw new y("geodesic-distance:not-supported","input geometry spatial reference is not supported");if(a.x===b.x&&a.y===b.y)return new G(0,0,0);const c=new G;K(c,[a.x,a.y],[b.x,b.y],d);c.distance=L.convertUnit(c.distance,"meters",e);c.azimuth=O(c.azimuth);c.reverseAzimuth=O(c.reverseAzimuth);return c};z.geodesicLengths=function(a,b="meters"){if(!a)throw new y("geodesic-lengths:invalid-geometries","the input geometries type is not supported");if(a.some(c=>!E(c.spatialReference)))throw new y("geodesic-lengths:invalid-spatial-reference",
"the input geometries spatial reference is not supported");const e=[];for(let c=0;c<a.length;c++){var d=a[c];const {spatialReference:f}=d;d="polyline"===d.type?d.paths:d.rings;let t=0;for(let h=0;h<d.length;h++){const g=d[h];let m=0;for(let n=1;n<g.length;n++){const p=g[n-1][0],k=g[n][0],q=g[n-1][1],l=g[n][1];if(q!==l||p!==k){const r=new G;K(r,[p,q],[k,l],f);m+=r.distance}}t+=m}t=L.convertUnit(t,"meters",b);e.push(t)}return e};z.inverseGeodeticSolver=K;z.isSupported=E;z.pointFromDistance=function(a,
b,e){if(!a||null==b||null==e)throw new y("point-from-distance:missing-parameters","one or more input parameters are missing or undefined");if(0>e||360<e)throw new y("point-from-distance:-of-bounds","azimuth is restricted to angles between, and including, 0\u00b0 to 360\u00b0 degrees");if(!a.spatialReference)throw new y("point-from-distance:missing-spatial-reference","the input point must have a spatial reference");const {spatialReference:d}=a;if(!E(d))throw new y("geodesic-distance:not-supported",
"input geometry spatial reference is not supported");const c=[0,0];H(c,[a.x,a.y],e,b,d);return new S({x:c[0],y:c[1],spatialReference:d})};Object.defineProperties(z,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});