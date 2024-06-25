// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ./Bloom ./Blur ./Colorize ./DropShadow ./Opacity".split(" "),function(c,h,k,l,m,n){const p={colorize:()=>new l.Colorize,blur:()=>new k.Blur,bloom:()=>new h.Bloom,opacity:()=>new n.Opacity,"drop-shadow":()=>new m.DropShadow};let q=function(){function d(){this._effectMap=new Map}var e=d.prototype;e.dispose=function(){this._effectMap.forEach(a=>a.dispose());this._effectMap.clear()};e.getPostProcessingEffects=function(a){if(!a||0===a.length)return[];const f=[];for(const g of a){a:switch(a=
g.type,a){case "bloom":case "blur":case "opacity":case "drop-shadow":break a;default:a="colorize"}let b=this._effectMap.get(a);b||(b=p[a](),this._effectMap.set(a,b));f.push({postProcessingEffect:b,effect:g})}return f};return d}();c.EffectManager=q;Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});