/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{l as t,s as n}from"./vec3.js";import{g as a,R as r}from"./common.js";function u(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function e(t,n,a,r,u){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t}function o(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t}function s(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t}function i(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t[2]=n[2]*a[2],t[3]=n[3]*a[3],t}function c(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t[2]=n[2]/a[2],t[3]=n[3]/a[3],t}function f(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t}function h(t,n){const a=n[0]-t[0],r=n[1]-t[1],u=n[2]-t[2],e=n[3]-t[3];return Math.sqrt(a*a+r*r+u*u+e*e)}function M(t,n){const a=n[0]-t[0],r=n[1]-t[1],u=n[2]-t[2],e=n[3]-t[3];return a*a+r*r+u*u+e*e}function l(t){const n=t[0],a=t[1],r=t[2],u=t[3];return Math.sqrt(n*n+a*a+r*r+u*u)}function m(t){const n=t[0],a=t[1],r=t[2],u=t[3];return n*n+a*a+r*r+u*u}function b(t,n){const a=n[0],r=n[1],u=n[2],e=n[3];let o=a*a+r*r+u*u+e*e;return o>0&&(o=1/Math.sqrt(o),t[0]=a*o,t[1]=r*o,t[2]=u*o,t[3]=e*o),t}function d(t,n,a,r){const u=n[0],e=n[1],o=n[2],s=n[3];return t[0]=u+r*(a[0]-u),t[1]=e+r*(a[1]-e),t[2]=o+r*(a[2]-o),t[3]=s+r*(a[3]-s),t}function x(t,n,a){const r=n[0],u=n[1],e=n[2],o=n[3];return t[0]=a[0]*r+a[4]*u+a[8]*e+a[12]*o,t[1]=a[1]*r+a[5]*u+a[9]*e+a[13]*o,t[2]=a[2]*r+a[6]*u+a[10]*e+a[14]*o,t[3]=a[3]*r+a[7]*u+a[11]*e+a[15]*o,t}function g(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function q(t,n){const r=t[0],u=t[1],e=t[2],o=t[3],s=n[0],i=n[1],c=n[2],f=n[3],h=a();return Math.abs(r-s)<=h*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(u-i)<=h*Math.max(1,Math.abs(u),Math.abs(i))&&Math.abs(e-c)<=h*Math.max(1,Math.abs(e),Math.abs(c))&&Math.abs(o-f)<=h*Math.max(1,Math.abs(o),Math.abs(f))}const p=s,v=i,y=c,F=h,w=M,E=l,A=m,B=Object.freeze(Object.defineProperty({__proto__:null,copy:u,set:e,add:o,subtract:s,multiply:i,divide:c,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t[3]=Math.ceil(n[3]),t},floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t[3]=Math.floor(n[3]),t},min:function(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t[2]=Math.min(n[2],a[2]),t[3]=Math.min(n[3],a[3]),t},max:function(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t[2]=Math.max(n[2],a[2]),t[3]=Math.max(n[3],a[3]),t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t[3]=Math.round(n[3]),t},scale:f,scaleAndAdd:function(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t},distance:h,squaredDistance:M,length:l,squaredLength:m,negate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t},normalize:b,dot:function(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]},lerp:d,random:function(t,n){const a=r;let u,e,o,s,i,c;n=n||1;do{u=2*a()-1,e=2*a()-1,i=u*u+e*e}while(i>=1);do{o=2*a()-1,s=2*a()-1,c=o*o+s*s}while(c>=1);const f=Math.sqrt((1-i)/c);return t[0]=n*u,t[1]=n*e,t[2]=n*o*f,t[3]=n*s*f,t},transformMat4:x,transformQuat:function(t,n,a){const r=n[0],u=n[1],e=n[2],o=a[0],s=a[1],i=a[2],c=a[3],f=c*r+s*e-i*u,h=c*u+i*r-o*e,M=c*e+o*u-s*r,l=-o*r-s*u-i*e;return t[0]=f*c+l*-o+h*-i-M*-s,t[1]=h*c+l*-s+M*-o-f*-i,t[2]=M*c+l*-i+f*-s-h*-o,t[3]=n[3],t},str:function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},exactEquals:g,equals:q,sub:p,mul:v,div:y,dist:F,sqrDist:w,len:E,sqrLen:A},Symbol.toStringTag,{value:"Module"})),N=new Float32Array(1);function _(t){--t;for(let n=1;n<32;n<<=1)t|=t>>n;return t+1}function j(t,n,a){return Math.min(Math.max(t,n),a)}function I(t,n){return 0===n?0:Math.round(t/n)*n}function D(t){return 0==(t&t-1)}function L(t){return t--,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,++t}function P(t){return 10**Math.ceil(Math.LOG10E*Math.log(t))}function z(t,n,a){return t+(n-t)*a}function O(t){return t*Math.PI/180}function S(t){return 180*t/Math.PI}function T(t,n=1e-6){return(t<0?-1:1)/Math.max(Math.abs(t),n)}function R(t){return Math.acos(j(t,-1,1))}function k(t){return Math.asin(j(t,-1,1))}function C(t,n,a=1e-6){return t===n||!(!Number.isFinite(t)||!Number.isFinite(n))&&(t>n?t-n:n-t)<=a}const G=new DataView(new ArrayBuffer(Float64Array.BYTES_PER_ELEMENT)),Q=BigInt("1000000");function V(t,n,a=1e-6){if(t===n)return!0;if(!Number.isFinite(t)||!Number.isFinite(n))return!1;const r=Math.abs(t-n),u=Math.abs(t),e=Math.abs(n);if(0===t||0===n||u<1e-12&&e<1e-12){if(r>.01*a)return!1}else if(r/(u+e)>a)return!1;return!0}function Y(t){return H(Math.max(-X,Math.min(t,X)))}function H(t){return N[0]=t,N[0]}function J(t,n,a){const r=j((a-t)/(n-t),0,1);return r*r*(3-2*r)}function K(a,r){const u=t(a),e=k(a[2]/u),o=Math.atan2(a[1]/u,a[0]/u);return n(r,u,e,o),r}function U(t,n,a){return e(t,n[0],n[1],n[2],n[3]*a)}function W(t){const n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[3]*t[3]+t[4]*t[4]+t[5]*t[5],r=t[6]*t[6]+t[7]*t[7]+t[8]*t[8];return!(C(n,1)&&C(a,1)&&C(r,1))}!function(t){const n=(u=t=Math.abs(t),G.setFloat64(0,u),G.getBigInt64(0)),a=(r=n<=Q?Q:n-Q,G.setBigInt64(0,r),G.getFloat64(0));var r,u;Math.abs(t-a)}(1);const X=H(34028234663852886e22);export{B as A,T as B,I as C,W as D,X as N,k as a,u as b,j as c,O as d,g as e,_ as f,R as g,z as h,D as i,L as j,P as k,d as l,q as m,b as n,K as o,U as p,M as q,S as r,e as s,x as t,C as u,V as v,Y as w,J as x,f as y,o as z};
