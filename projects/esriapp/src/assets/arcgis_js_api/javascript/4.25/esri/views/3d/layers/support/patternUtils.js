// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/has ../../../../core/maybe ../../../../chunks/vec4f64 ../../../../geometry/support/buffer/BufferView ../graphics/ElevationAligners ./uvUtils ../../webgl-engine/lib/VertexAttribute ../../webgl-engine/materials/ColorMaterial ../../webgl-engine/materials/PatternMaterial ../../webgl-engine/materials/PatternStyle".split(" "),function(d,w,r,t,g,u,v,h,k,l,e){function m(a,b,c){if(r.isSome(a)){if("none"===a.style||"solid"===a.style)return"none"===a.style&&(b.color=t.fromValues(0,
0,0,0),b.transparent=!0),new k.ColorMaterial(b);b.style=n(a.style);b.draped=c.isDraped;return new l.PatternMaterial(b)}return new k.ColorMaterial(b)}function n(a){switch(a){case "horizontal":return e.Style.Horizontal;case "vertical":return e.Style.Vertical;case "cross":return e.Style.Cross;case "forward-diagonal":return e.Style.ForwardDiagonal;case "backward-diagonal":return e.Style.BackwardDiagonal;case "diagonal-cross":return e.Style.DiagonalCross}}function p(a){return a.material instanceof l.PatternMaterial&&
!a.material.parameters.draped}function q(a,b){if(p(a)){var c=a.geometry.vertexAttributes;a=c.get(h.VertexAttribute.POSITION).data;const f=c.get(h.VertexAttribute.UVMAPSPACE).data;c=c.get(h.VertexAttribute.BOUNDINGRECT).data;v.createMapSpaceUVCoords(g.BufferViewVec4f.fromTypedArray(f),g.BufferViewVec3f64.fromTypedArray(a),b,g.BufferViewMat3f64.fromTypedArray(c))}}d.createMaterial=function(a,b,c){return m(a&&a.pattern||null,b,c)};d.createMaterialFromPattern=m;d.parsePatternStyle=n;d.requiresUVUpdates=
p;d.updateMapSpaceUVCoords=q;d.uvElevationAligner=function(a,b,c,f){b=u.perVertexElevationAligner(a,b,c,f);a=a.stageObject.geometryRecords;for(c=0;c<a.length;c++)q(a[c],f);return b};Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});