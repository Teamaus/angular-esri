// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports"],function(a){function e(){return[0,0,0,0]}function n(b){return[b[0],b[1],b[2],b[3]]}function p(b,c,f,d){return[b,c,f,d]}function q(b){const c=e(),f=Math.min(4,b.length);for(let d=0;d<f;++d)c[d]=b[d];return c}function r(b,c){return new Float64Array(b,c,4)}function t(){return e()}function g(){return[1,1,1,1]}function h(){return[1,0,0,0]}function k(){return[0,1,0,0]}function l(){return[0,0,1,0]}function m(){return[0,0,0,1]}const u=e(),v=g(),w=h(),x=k(),y=l(),z=m(),A=Object.freeze(Object.defineProperty({__proto__:null,
create:e,clone:n,fromValues:p,fromArray:q,createView:r,zeros:t,ones:g,unitX:h,unitY:k,unitZ:l,unitW:m,ZEROS:u,ONES:v,UNIT_X:w,UNIT_Y:x,UNIT_Z:y,UNIT_W:z},Symbol.toStringTag,{value:"Module"}));a.ONES=v;a.UNIT_W=z;a.UNIT_X=w;a.UNIT_Y=x;a.UNIT_Z=y;a.ZEROS=u;a.clone=n;a.create=e;a.createView=r;a.fromArray=q;a.fromValues=p;a.ones=g;a.unitW=m;a.unitX=h;a.unitY=k;a.unitZ=l;a.vec4f64=A;a.zeros=t});