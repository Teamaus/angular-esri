// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","./mathUtils"],function(e,k){function g(b,f=0){let c=0;for(let a=0;4>a;a++)c+=b[f+a]*l[a];return c}const m=[1,256,65536,16777216],l=[1/256,1/65536,1/16777216,1/4294967296],n=g(new Uint8ClampedArray([255,255,255,255]));e.packFloatRGBA=function(b,f,c=0){b=k.clamp(b,0,n);for(let d=0;4>d;d++){var a=Math,h=b*m[d];f[c+d]=a.floor.call(a,256*(h-Math.floor(h)))}};e.unpackFloatRGBA=g;Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});