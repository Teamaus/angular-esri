// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/quat ../../chunks/quatf64 ../../chunks/vec3f64 ../../chunks/common ../../chunks/vec3".split(" "),function(h,e,f,p,g,b){const a=p.create(),k=f.create(),l=f.create(),m=f.create(),n=new Float64Array([0,0,1]),q=new Float64Array([0,1,0]),r=new Float64Array([1,0,0]);h.computeNormalFromOrientationTilt=function(c,d){e.setAxisAngle(l,n,g.toRadian(c-270));e.setAxisAngle(m,q,g.toRadian(d-90));e.multiply(k,l,m);b.copy(a,r);b.transformQuat(a,a,k);b.normalize(a,a);return[a[0],a[1],
a[2]]};h.computeOrientationTiltFromNormal=function(c){b.copy(a,c);b.normalize(a,a);c=Math.atan2(a[1],a[0]);var d=e.setAxisAngle(f.create(),n,-c);b.transformQuat(a,a,d);d=-1*Math.atan2(a[2],a[0]);return[g.toDegree(c)+270,g.toDegree(d)+90]};Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});