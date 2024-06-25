// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/maybe ../../../../core/typedArrayUtil ../../../../chunks/vec2 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../chunks/vec4f64 ../../../../geometry/projection ../../../../geometry/projectionEllipsoid ../../../ViewingMode ../../webgl-engine/lib/basicInterfaces ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/VertexAttribute".split(" "),function(m,k,w,x,u,v,y,z,A,B,C,D,d){m.RemoveDuplicateStartEnd=void 0;(function(a){a[a.KEEP=0]="KEEP";a[a.REMOVE=
1]="REMOVE"})(m.RemoveDuplicateStartEnd||(m.RemoveDuplicateStartEnd={}));const E=v.create(),F=v.create();m.createGeometry=function(a,t=null){const e=[],g=[],{attributeData:{position:f},removeDuplicateStartEnd:p}=a;var b=f.length;b=f[0]===f[b-3]&&f[1]===f[b-2]&&f[2]===f[b-1]&&p;var l=f.length/3-(b?1:0),c=Array(2*(l-1)),n=b?w.slice(f,0,f.length-3):f,q=0;for(var h=0;h<l-1;h++)c[q++]=h,c[q++]=h+1;g.push([d.VertexAttribute.POSITION,{size:3,data:n,exclusive:b}]);e.push([d.VertexAttribute.POSITION,c]);l=
g[0][1].data;b=Array(e[0][1].length).fill(0);c=a.attributeData.mapPosition;k.isNone(c)||(e.push([d.VertexAttribute.MAPPOS,e[0][1]]),g.push([d.VertexAttribute.MAPPOS,{size:3,data:c}]));k.isSome(a.attributeData.colorFeature)||(g.push([d.VertexAttribute.COLOR,{size:4,data:k.unwrapOr(a.attributeData.color,y.ONES)}]),e.push([d.VertexAttribute.COLOR,b]));k.isSome(a.attributeData.sizeFeature)||(g.push([d.VertexAttribute.SIZE,{size:1,data:[k.unwrapOr(a.attributeData.size,1)]}]),e.push([d.VertexAttribute.SIZE,
b]));k.isSome(a.attributeData.normal)&&(g.push([d.VertexAttribute.NORMAL,{size:3,data:a.attributeData.normal}]),e.push([d.VertexAttribute.NORMAL,b]));c=a.attributeData.colorFeature;k.isNone(c)||(g.push([d.VertexAttribute.COLORFEATUREATTRIBUTE,{size:1,data:new Float32Array([c])}]),e.push([d.VertexAttribute.COLOR,b]));c=a.attributeData.sizeFeature;k.isNone(c)||(g.push([d.VertexAttribute.SIZEFEATUREATTRIBUTE,{size:1,data:new Float32Array([c])}]),e.push([d.VertexAttribute.SIZEFEATUREATTRIBUTE,b]));c=
a.attributeData.opacityFeature;k.isNone(c)||(g.push([d.VertexAttribute.OPACITYFEATUREATTRIBUTE,{size:1,data:new Float32Array([c])}]),e.push([d.VertexAttribute.OPACITYFEATUREATTRIBUTE,b]));if(!k.isNone(a.overlayInfo)&&a.overlayInfo.renderCoordsHelper.viewingMode===B.ViewingMode.Global&&a.overlayInfo.spatialReference.isGeographic){b=new Float64Array(l.length);a=A.getReferenceEllipsoid(a.overlayInfo.spatialReference);for(c=0;c<b.length;c+=3)z.lonLatToWebMercatorComparable(l,c,b,c,a);a=l.length/3;l=new Float32Array(a+
1);c=E;n=F;h=q=0;u.set(c,b[h++],b[h++],b[h++]);l[0]=0;for(let r=1;r<a+1;++r)r===a&&(h=0),u.set(n,b[h++],b[h++],b[h++]),q+=x.dist(c,n),l[r]=q,[c,n]=[n,c];g.push([d.VertexAttribute.DISTANCETOSTART,{size:1,data:l}]);e.push([d.VertexAttribute.DISTANCETOSTART,e[0][1]])}return new D.Geometry(g,e,C.PrimitiveType.Line,t)};m.lineStripsToParameters=function(a,t){if(k.isNone(a)||0===a.length)return[];const e=[];a.forEach(g=>{const f=new Float64Array(3*g.length);g.forEach((p,b)=>{f[3*b]=p[0];f[3*b+1]=p[1];f[3*
b+2]=p[2]});e.push({attributeData:{position:f,normal:t},removeDuplicateStartEnd:!1})});return e};Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});