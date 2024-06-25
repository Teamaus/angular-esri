// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../core/maybe","../symbols/support/unitConversionUtils"],function(e,c,x){function q(a,b){return c.isNone(b)||!b.mode?(a?l:m).mode:b.mode}function r(a,b){return c.isSome(b)?b:a?l:m}function n(a,b){return q(c.isSome(a)?a.hasZ:!1,b)}function t(a){const b=p(a);return n(a.geometry,b)}function p(a){return a.layer&&"elevationInfo"in a.layer?a.layer.elevationInfo:null}function u(a,b,d,f,g,k,h=null){if(!c.isNone(k)){var v=c.isSome(h)?h.mode:"absolute-height";if("on-the-ground"===v)return 0;
({absoluteZ:k}=w(b,d,f,g,a,k));a:{h=c.isSome(h)&&c.isSome(h.offset)?h.offset:0;switch(v){case "absolute-height":a=k-h;break a;case "relative-to-ground":a=k-(c.unwrapOr(a.elevationProvider.getElevation(b,d,f,g,"ground"),0)+h);break a;case "relative-to-scene":a=k-(c.unwrapOr(a.elevationProvider.getElevation(b,d,f,g,"scene"),0)+h);break a}a=void 0}return a}}function w(a,b,d,f,g,k){const h=c.isSome(k.offset)?k.offset:0;switch(k.mode){case "absolute-height":return{absoluteZ:d+h,elevation:0};case "on-the-ground":return d=
c.unwrapOr(g.elevationProvider.getElevation(a,b,0,f,"ground"),0),{absoluteZ:d,elevation:d};case "relative-to-ground":return a=c.unwrapOr(g.elevationProvider.getElevation(a,b,d,f,"ground"),0),{absoluteZ:d+a+h,elevation:a};case "relative-to-scene":return a=c.unwrapOr(g.elevationProvider.getElevation(a,b,d,f,"scene"),0),{absoluteZ:d+a+h,elevation:a}}}const l={mode:"absolute-height",offset:0},m={mode:"on-the-ground",offset:null};e.absoluteHeightElevationInfo=l;e.elevationContextAffectsAlignment=function(a,
b){if(c.isNone(b))return!1;({mode:b}=b);return c.isSome(b)&&("scene"===a&&"relative-to-scene"===b||"ground"===a&&"absolute-height"!==b)};e.elevationInfoLikeEquals=function(a,b){return a===b||c.isSome(a)&&c.isSome(b)&&a.mode===b.mode&&a.offset===b.offset};e.getConvertedElevation=function(a,b,d,f=null){return u(a,b.x,b.y,b.hasZ?b.z:0,b.spatialReference,d,f)};e.getConvertedElevationFromVector=function(a,b,d,f,g=null){return u(a,b[0],b[1],2<b.length?b[2]:0,d,f,g)};e.getEffectiveElevationInfo=r;e.getEffectiveElevationMode=
q;e.getGeometryEffectiveElevationInfo=function(a,b){return r(c.isSome(a)?a.hasZ:!1,b)};e.getGeometryEffectiveElevationMode=n;e.getGraphicEffectiveElevationInfo=function(a){var b=p(a);a=n(a.geometry,b);b=c.isSome(b)&&"on-the-ground"!==a?c.unwrapOr(b.offset,0)*x.getMetersPerUnit(c.unwrapOr(b.unit,"meters")):0;return{mode:a,offset:b}};e.getGraphicEffectiveElevationMode=t;e.getZForElevationMode=function(a,b,d){if(!c.isNone(d)&&d.mode){var f=a.hasZ?a.z:0,g=c.isSome(d.offset)?d.offset:0;switch(d.mode){case "absolute-height":return f-
g;case "on-the-ground":return 0;case "relative-to-ground":return a=c.unwrapOr(b.elevationProvider.getElevation(a.x,a.y,a.z,a.spatialReference,"ground"),0)+g,f-a;case "relative-to-scene":return a=c.unwrapOr(b.elevationProvider.getElevation(a.x,a.y,a.z,a.spatialReference,"scene"),0)+g,f-a}}};e.hasGraphicFeatureExpressionInfo=function(a){if("on-the-ground"===t(a))return!1;a=p(a);a=c.isSome(a)&&a.featureExpressionInfo?a.featureExpressionInfo.expression:null;return!(!a||"0"===a)};e.onTheGroundElevationInfo=
m;e.zValueInAbsoluteHeightMode=w;Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});