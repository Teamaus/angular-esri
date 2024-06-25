// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/vec4f64 ../../../../geometry/support/buffer/BufferView ../../support/buffer/InterleavedLayout ../core/shaderLibrary/ShaderOutput ../lib/basicInterfaces ../lib/GLMaterial ../lib/Material ../lib/OrderIndependentTransparency ../lib/RenderSlot ../lib/Util ../lib/VertexAttribute ./PatternStyle ./internal/bufferWriterUtils ./internal/DefaultBufferWriter ./internal/MaterialUtil ../shaders/PatternTechnique".split(" "),function(w,
q,E,r,F,p,G,H,C,I,t,u,n,J,x,K,L,y){let O=function(l){function f(a){a=l.call(this,a,new D)||this;a.supportsEdges=!0;a._vertexAttributeLocations=y.vertexAttributeLocations;a._configuration=new y.PatternTechniqueConfiguration;return a}q._inheritsLoose(f,l);var c=f.prototype;c.getConfiguration=function(a,b){this._configuration.output=a;this._configuration.cullFace=this.parameters.cullFace;this._configuration.hasVertexColors=this.parameters.hasVertexColors;this._configuration.hasSlicePlane=this.parameters.hasSlicePlane;
this._configuration.polygonOffset=this.parameters.polygonOffset;this._configuration.writeDepth=this.parameters.writeDepth;this._configuration.style=this.parameters.style;this._configuration.patternSpacing=this.parameters.patternSpacing;this._configuration.lineWidth=this.parameters.lineWidth;this._configuration.draped=this.parameters.draped;this._configuration.transparencyPassType=b.transparencyPassType;this._configuration.enableOffset=b.camera.relativeElevation<I.OITPolygonOffsetLimit;this._configuration.hasMultipassTerrain=
b.multipassTerrain.enabled;this._configuration.cullAboveGround=b.multipassTerrain.cullAboveGround;return this._configuration};c.intersect=function(a,b,d,k,h,e,m){L.intersectTriangleGeometry(a,b,k,h,e,void 0,m)};c.requiresSlot=function(a,b){return b===p.ShaderOutput.Color||b===p.ShaderOutput.Alpha||b===p.ShaderOutput.Highlight||b===p.ShaderOutput.Depth&&this.parameters.writeLinearDepth?a===t.RenderSlot.DRAPED_MATERIAL?!0:b===p.ShaderOutput.Highlight?a===t.RenderSlot.OPAQUE_MATERIAL:a===(this.parameters.writeDepth?
t.RenderSlot.TRANSPARENT_MATERIAL:t.RenderSlot.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL):!1};c.createGLMaterial=function(a){return new M(a)};c.createBufferWriter=function(){const a=F.newLayout().vec3f(n.VertexAttribute.POSITION).vec4u8(n.VertexAttribute.COLOR).vec4f(n.VertexAttribute.UVMAPSPACE);this.parameters.draped||a.mat3f(n.VertexAttribute.BOUNDINGRECT);return new N(a)};return f}(C.Material),M=function(l){function f(){return l.apply(this,arguments)||this}q._inheritsLoose(f,l);var c=f.prototype;
c._updateParameters=function(a){return this.ensureTechnique(y.PatternTechnique,a)};c._updateOccludeeState=function(a){a.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:a.hasOccludees})};c.beginSlot=function(a){this._output!==p.ShaderOutput.Color&&this._output!==p.ShaderOutput.Alpha||this._updateOccludeeState(a);return this._updateParameters(a)};return f}(H),N=function(l){function f(){return l.apply(this,arguments)||this}q._inheritsLoose(f,l);var c=
f.prototype;c.write=function(a,b,d,k,h){for(const m of this.vertexBufferLayout.fieldNames){b=d.vertexAttributes.get(m);const g=d.indices.get(m);if(b&&g)switch(m){case n.VertexAttribute.POSITION:u.assert(3===b.size);var e=k.getField(m,r.BufferViewVec3f);e&&x.writePosition(g,b.data,a,e,h);break;case n.VertexAttribute.COLOR:u.assert(3===b.size||4===b.size);(e=k.getField(m,r.BufferViewVec4u8))&&x.writeColor(g,b.data,b.size,e,h);break;case n.VertexAttribute.UVMAPSPACE:u.assert(4===b.size);(e=k.getField(m,
r.BufferViewVec4f))&&x.writeBufferVec4(g,b.data,e,h);break;case n.VertexAttribute.BOUNDINGRECT:u.assert(9===b.size),(e=k.getField(m,r.BufferViewMat3f))&&this.writeBoundingRect(g,b.data,a,e,h)}}};c.writeBoundingRect=function(a,b,d,k,h){const e=k.typedBuffer;k=k.typedBufferStride;const m=a.length;h*=k;for(let z=0;z<m;++z){const v=9*a[z];var g=b[v];const A=b[v+1],B=b[v+2];e[h]=d[0]*g+d[4]*A+d[8]*B+d[12];e[h+1]=d[1]*g+d[5]*A+d[9]*B+d[13];e[h+2]=d[2]*g+d[6]*A+d[10]*B+d[14];for(g=3;9>g;++g)e[h+g]=b[v+g];
h+=k}};return f}(K.DefaultBufferWriter),D=function(l){function f(){var c=l.apply(this,arguments)||this;c.color=E.fromValues(1,1,1,1);c.writeDepth=!0;c.writeLinearDepth=!1;c.hasVertexColors=!1;c.polygonOffset=!1;c.hasSlicePlane=!1;c.cullFace=G.CullFaceOptions.None;c.hasOccludees=!1;c.style=J.Style.Cross;c.patternSpacing=10;c.lineWidth=1;c.draped=!0;return c}q._inheritsLoose(f,l);return f}(C.MaterialParameters);w.Parameters=D;w.PatternMaterial=O;Object.defineProperties(w,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});