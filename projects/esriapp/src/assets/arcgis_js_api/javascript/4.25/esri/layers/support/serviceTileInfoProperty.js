// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","./TileInfo"],function(e,b){function h(a,n,r,k){if(!a)return null;const {minScale:f,maxScale:g,minLOD:l,maxLOD:m}=n;if(null!=l&&null!=m)return k&&k.ignoreMinMaxLOD?b.fromJSON(a):b.fromJSON({...a,lods:a.lods.filter(({level:c})=>null!=c&&c>=l&&c<=m)});if(0!==f&&0!==g){const c=f?Math.round(1E4*f)/1E4:Infinity,p=g?Math.round(1E4*g)/1E4:-Infinity;return b.fromJSON({...a,lods:a.lods.filter(d=>{d=Math.round(1E4*d.scale)/1E4;return d<=c&&d>=p})})}return b.fromJSON(a)}const q={type:b,json:{origins:{service:{read:{source:["tileInfo",
"minScale","maxScale","minLOD","maxLOD"],reader:h}}}}};e.readServiceTileInfo=h;e.serviceTileInfoProperty=q;Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});