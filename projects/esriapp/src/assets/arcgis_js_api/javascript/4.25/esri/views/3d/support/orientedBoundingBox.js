// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/mat3 ../../../chunks/mat3f64 ../../../chunks/quat ../../../chunks/quatf32 ../../../chunks/quatf64 ../../../chunks/vec3 ../../../chunks/vec3f32 ../../../chunks/vec3f64 ../../../chunks/vec4 ../../../chunks/vec4f64 ../../../geometry/support/aaBoundingBox ../../../geometry/support/plane ./dito".split(" "),function(g,y,D,v,A,E,h,B,w,F,G,H,t,I){function z(a=[0,0,0],b=[-1,-1,-1],c=[0,0,0,1]){return{center:w.clone(a),halfSize:B.clone(b),quaternion:A.clone(c)}}function p(a,
b){const c=t.signedDistance(b,a.center);a=x(a,t.normal(b));return c>a?1:c<-a?-1:0}function x(a,b){v.conjugate(q,a.quaternion);h.transformQuat(e,b,q);a=a.halfSize;return Math.abs(e[0]*a[0])+Math.abs(e[1]*a[1])+Math.abs(e[2]*a[2])}const q=E.create(),e=w.create(),J=w.create(),r=G.create(),u=D.create(),m=[.1,.2,.3,.4,.5,.6,.7,.8,.9,1,1.1,1.2],K=(()=>{const a=new Int8Array(162);let b=0;const c=f=>{for(let k=0;k<f.length;k++)a[b+k]=f[k];b+=6};c([6,2,3,1,5,4]);c([0,2,3,1,5,4]);c([0,2,3,7,5,4]);c([0,1,3,
2,6,4]);c([0,1,3,2,0,0]);c([0,1,5,7,3,2]);c([0,1,3,7,6,4]);c([0,1,3,7,6,2]);c([0,1,5,7,6,2]);c([0,1,5,4,6,2]);c([0,1,5,4,0,0]);c([0,1,3,7,5,4]);c([0,2,6,4,0,0]);c([0,0,0,0,0,0]);c([1,3,7,5,0,0]);c([2,3,7,6,4,0]);c([2,3,7,6,0,0]);c([2,3,1,5,7,6]);c([0,1,5,7,6,2]);c([0,1,5,7,6,4]);c([0,1,3,7,6,4]);c([4,5,7,6,2,0]);c([4,5,7,6,0,0]);c([4,5,1,3,7,6]);c([0,2,3,7,5,4]);c([6,2,3,7,5,4]);c([6,2,3,1,5,4]);return a})();g.ObbArray=function(a){this.buffer=new ArrayBuffer(56*a);this.obbs=Array(a);for(let b=0;b<
a;b++)this.obbs[b]={center:w.createView(this.buffer,56*b),halfSize:B.createView(this.buffer,56*b+24),quaternion:A.createView(this.buffer,56*b+36)}};g.clone=function(a){return z(a.center,a.halfSize,a.quaternion)};g.compute=function(a,b){b=b||z();I.computeOBB(a,b);return b};g.corners=function(a,b){for(let c=0;8>c;++c){const f=b[c];f[0]=c&1?-a.halfSize[0]:a.halfSize[0];f[1]=c&2?-a.halfSize[1]:a.halfSize[1];f[2]=c&4?-a.halfSize[2]:a.halfSize[2];h.transformQuat(f,f,a.quaternion);h.add(f,f,a.center)}};
g.create=z;g.intersectLine=function(a,b,c,f=0){v.conjugate(q,a.quaternion);h.subtract(e,b,a.center);b=h.transformQuat(e,e,q);c=h.transformQuat(J,c,q);let k=-Infinity,n=Infinity;for(let d=0;3>d;d++)if(1E-6<Math.abs(c[d])){const l=(f+a.halfSize[d]-b[d])/c[d],C=(-f-a.halfSize[d]-b[d])/c[d];k=Math.max(k,Math.min(l,C));n=Math.min(n,Math.max(l,C))}else if(b[d]>a.halfSize[d]+f||b[d]<-a.halfSize[d]-f)return!1;return k<=n};g.intersectPlane=p;g.isVisible=function(a,b){return 0>=p(a,b[0])&&0>=p(a,b[1])&&0>=
p(a,b[2])&&0>=p(a,b[3])&&0>=p(a,b[4])&&0>=p(a,b[5])};g.maximumDistancePlane=function(a,b){const c=t.signedDistance(b,a.center);a=x(a,t.normal(b));return c+a};g.minimumDistancePlane=function(a,b){const c=t.signedDistance(b,a.center);a=x(a,t.normal(b));return c-a};g.projectedArea=function(a,b,c,f,k){v.conjugate(q,a.quaternion);h.sub(e,b,a.center);h.transformQuat(e,e,q);var n=e[0]<-a.halfSize[0]?-1:e[0]>a.halfSize[0]?1:0,d=e[1]<-a.halfSize[1]?-1:e[1]>a.halfSize[1]?1:0,l=e[2]<-a.halfSize[2]?-1:e[2]>a.halfSize[2]?
1:0;b=Math.abs(n)+Math.abs(d)+Math.abs(l);if(0===b)return Infinity;b=1===b?4:6;n=6*(n+3*d+9*l+13);y.fromQuat(u,a.quaternion);y.scale(u,u,a.halfSize);for(d=0;d<b;d++)l=K[n+d],h.set(e,((l&1)<<1)-1,(l&2)-1,((l&4)>>1)-1),h.transformMat3(e,e,u),h.add(r,a.center,e),r[3]=1,F.transformMat4(r,r,c),l=1/Math.max(1E-6,r[3]),m[2*d]=r[0]*l,m[2*d+1]=r[1]*l;a=2*b-2;c=m[0]*(m[3]-m[a+1])+m[a]*(m[1]-m[a-1]);for(b=2;b<a;b+=2)c+=m[b]*(m[b+3]-m[b-1]);return Math.abs(c)*f*k*.125};g.projectedRadius=x;g.radius=function(a){return h.len(a.halfSize)};
g.set=function(a,b){h.copy(b.center,a.center);h.copy(b.halfSize,a.halfSize);v.copy(b.quaternion,a.quaternion)};g.toAaBoundingBox=function(a,b){b||(b=H.create());var c=y.fromQuat(u,a.quaternion);const f=a.halfSize[0]*Math.abs(c[0])+a.halfSize[1]*Math.abs(c[3])+a.halfSize[2]*Math.abs(c[6]),k=a.halfSize[0]*Math.abs(c[1])+a.halfSize[1]*Math.abs(c[4])+a.halfSize[2]*Math.abs(c[7]);c=a.halfSize[0]*Math.abs(c[2])+a.halfSize[1]*Math.abs(c[5])+a.halfSize[2]*Math.abs(c[8]);b[0]=a.center[0]-f;b[1]=a.center[1]-
k;b[2]=a.center[2]-c;b[3]=a.center[0]+f;b[4]=a.center[1]+k;b[5]=a.center[2]+c;return b};Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});