// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../chunks/tslib.es6 ../../../../../../core/maybe ../../../../../../chunks/mat3 ../../../../../../chunks/mat3f32 ../../../../../../chunks/vec3 ../../../../../../chunks/vec3f32 ../../../../../../chunks/vec4 ../../../../../../chunks/vec4f32 ../../../../layers/support/symbolColorUtils ../../../../support/debugFlags ../../../../terrain/interfaces ./ComponentTechnique ./ComponentTechniqueConfiguration ./shader/ComponentData.glsl ../../../../../../chunks/ComponentShader.glsl ./shader/VertexDiscardByOpacity.glsl ../../../core/material/MaterialBase ../../../core/renderPasses/AllRenderPasses ../../../core/shaderLibrary/ShaderOutput ../../../core/shaderLibrary/attributes/NormalAttribute.glsl ../../../core/shaderLibrary/shading/Normals.glsl ../../../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../../../core/shaderLibrary/util/AlphaCutoff ../../../core/shaderLibrary/util/EllipsoidMode ../../../core/util/TwoVectorPosition ../../../lib/basicInterfaces ../../../lib/TransparencyPassType".split(" "),
function(g,u,d,n,G,N,t,H,I,J,K,O,D,P,v,L,Q,y,c,r,w,E,M,B,R,S,T,C,U){function V(e){switch(e){case r.MaterialSubPass.Color:return w.ShaderOutput.Color;case r.MaterialSubPass.Alpha:return w.ShaderOutput.Alpha;case r.MaterialSubPass.Depth:return w.ShaderOutput.Depth;case r.MaterialSubPass.Normal:return w.ShaderOutput.Normal;case r.MaterialSubPass.ObjectAndLayerIdColor:return w.ShaderOutput.ObjectAndLayerIdColor}}let m=function(e){function q(h,k){var a=e.call(this)||this;a.toMapSpace=k;a.baseColor=J.fromValues(1,
1,1,1);a.usePBR=!1;a.hasParametersFromSource=!1;a.mrrFactors=H.fromValues(1,1,.5);a.emissiveFactor=H.fromValues(0,0,0);a.baseColorTexture=null;a.metallicRoughnessTexture=null;a.emissionTexture=null;a.occlusionTexture=null;a.normalTexture=null;a.objectOpacity=1;a.commonMaterialParameters=new z;a.componentParameters=new A;a.textureAlphaCutoff=R.defaultMaskAlphaCutoff;a.alphaDiscardMode=C.AlphaDiscardMode.Opaque;a.isIntegratedMesh=!1;a.polygonOffsetEnabled=!1;a.ellipsoidMode=S.EllipsoidMode.Earth;a.hasOccludees=
!1;a._techniqueConfiguration=new v.ComponentTechniqueConfiguration;k=new T.TwoVectorPosition(h.position);const f=N.clone(h.rotationScale);G.invert(f,f);a.transformNormalGlobalFromModel=G.transpose(f,f);a.transformWorldFromModelTL=k.low;a.transformWorldFromModelTH=k.high;a.transformWorldFromModelRS=h.rotationScale;return a}u._inheritsLoose(q,e);var l=q.prototype;l.dispose=function(){this._technique=n.releaseMaybe(this._technique);this.normalTexture=this.occlusionTexture=this.emissionTexture=this.metallicRoughnessTexture=
this.baseColorTexture=null};l.prepareTechnique=function(h,k,a,f){const b=this._techniqueConfiguration;b.hasVertexColors=f.colors;b.hasNormals=f.normals;b.textureCoordinateType=f.textureCoordinates;b.hasMetallicRoughnessTexture=n.isSome(this.metallicRoughnessTexture);b.hasEmissionTexture=n.isSome(this.emissionTexture);b.hasOcclusionTexture=n.isSome(this.occlusionTexture);b.hasNormalTexture=n.isSome(this.normalTexture);b.transparencyPassType=k.identifier===r.RenderPassIdentifier.Material&&null!=a.transparencyPassType?
a.transparencyPassType:U.TransparencyPassType.NONE;b.hasMultipassTerrain=k.identifier===r.RenderPassIdentifier.Material&&null!=a.multipassTerrain?a.multipassTerrain.enabled:!1;b.cullAboveGround=k.identifier===r.RenderPassIdentifier.Material&&null!=a.multipassTerrain?a.multipassTerrain.cullAboveGround:!1;b.ellipsoidMode=this.ellipsoidMode;b.componentData=this.componentParameters.type;b.cullFace=this.commonMaterialParameters.cullFace;b.doubleSidedMode=this.commonMaterialParameters.doubleSided?M.NormalsDoubleSidedMode.View:
M.NormalsDoubleSidedMode.None;b.hasBaseColorTexture=n.isSome(this.baseColorTexture);f=this._computeWhichMaterialPass();b.blendingEnabled=f===p.Transparent||f===p.OpaqueAndTransparent;b.alphaDiscardMode=this.alphaDiscardMode;b.integratedMeshMode=this.isIntegratedMesh?(0===a.overlays.length?0:n.isSome(a.overlays[D.OverlayIndex.INNER].getColorTextureNoRasterImage()))?Q.getOverlayNormalTexture(a)?v.IntegratedMeshMode.ColorOverlayWithWater:v.IntegratedMeshMode.ColorOverlay:v.IntegratedMeshMode.NoOverlay:
v.IntegratedMeshMode.None;b.useLegacyTerrainShading=this.isIntegratedMesh&&O.TERRAIN_USE_LEGACY_SHADING;b.hasPolygonOffset=this.polygonOffsetEnabled;f=this.hasParametersFromSource&&n.isNone(this.baseColorTexture);b.pbrMode=b.integratedMeshMode===v.IntegratedMeshMode.ColorOverlayWithWater?B.PBRMode.WaterOnIntegratedMesh:this.usePBR?f?B.PBRMode.Schematic:B.PBRMode.Normal:B.PBRMode.Disabled;b.normalType=b.integratedMeshMode===v.IntegratedMeshMode.None?b.hasNormals?E.NormalAttributeType.CompressedAttribute:
E.NormalAttributeType.ScreenDerivative:E.NormalAttributeType.Ground;b.hasSlicePlane=n.isSome(a.slicePlane)&&this.commonMaterialParameters.hasSlicePlane;k.identifier===r.RenderPassIdentifier.ShadowMap?(b.output=w.ShaderOutput.Shadow,b.vertexDiscardMode=y.VertexDiscardMode.None):k.identifier===r.RenderPassIdentifier.Highlight?(b.output=w.ShaderOutput.Highlight,b.vertexDiscardMode=y.VertexDiscardMode.None):(this._computeWhichMaterialPass()===p.OpaqueAndTransparent?b.vertexDiscardMode=k.transparent?y.VertexDiscardMode.Opaque:
y.VertexDiscardMode.Transparent:b.vertexDiscardMode=y.VertexDiscardMode.None,b.output=V(k.subPass),k.subPass===r.MaterialSubPass.Alpha&&(b.hasOccludees=a.hasOccludees),k.subPass===r.MaterialSubPass.Color?(b.receiveAmbientOcclusion=a.ssaoHelper.ready,b.hasOccludees=a.hasOccludees,b.receiveShadows=a.shadowMap.ready,b.hasScreenSpaceReflections=a.ssr.enabled,b.hasCloudsReflections=n.isSome(a.cloudsFade.data)):(b.receiveAmbientOcclusion=!1,b.receiveShadows=!1),b.snowCover=this.hasSnowCover(a),k.subPass===
r.MaterialSubPass.ObjectAndLayerIdColor&&(b.objectAndLayerIdColor=!0));this._technique=h.releaseAndAcquire(P.ComponentTechnique,b,this._technique);this._setClean();return this._technique};l.hasSnowCover=function(h){return n.isSome(h.weather)&&h.weatherVisible&&"snowy"===h.weather.type&&"enabled"===h.weather.snowCover};l.submit=function(h,k,a){if(0!==this.objectOpacity){var f=a.renderable.geometry,b=a.components;a=a.renderable.meta.cameraDepthSquared;var x=b.geometryRanges,F=b.highlightRanges;b=b.defaultShadowMapRanges;
switch(this._computeWhichMaterialPass()){case p.Opaque:h.materialOpaque.submitDraw(this,f,x,a);break;case p.Transparent:h.materialTransparent.submitDraw(this,f,x,a);break;case p.OpaqueAndTransparent:h.materialOpaque.submitDraw(this,f,x,a);h.materialTransparent.submitDraw(this,f,x,a);break;case p.IntegratedMesh:h.materialIntegratedMesh.submitDraw(this,f,x,a),(0===k.overlays.length?0:n.isSome(k.overlays[D.OverlayIndex.INNER].getValidTexture(D.RenderTargetType.Highlight)))&&h.highlightIntegratedMesh.submitDraw(this,
f,x,a)}(k=this.componentParameters.castShadows!==g.ComponentParameterSummary.None)&&h.shadowMap.submitDraw(this,f,x,a);n.isSome(F)&&(h.highlight.submitDraw(this,f,F,a),k&&h.highlightShadowMap.submitDraw(this,f,F,a));k&&n.isSome(b)&&h.defaultShadowMap.submitDraw(this,f,b,a)}};l._computeWhichMaterialPass=function(){return this.isIntegratedMesh?p.IntegratedMesh:1>this.objectOpacity?p.Transparent:this.componentParameters.opaqueOverride===g.ComponentParameterSummary.All?p.Opaque:1>this.baseColor[3]||this.alphaDiscardMode===
C.AlphaDiscardMode.Blend||this.alphaDiscardMode===C.AlphaDiscardMode.MaskBlend?p.Transparent:this.componentParameters.transparent===g.ComponentParameterSummary.None?p.Opaque:this.componentParameters.transparent===g.ComponentParameterSummary.All?p.Transparent:p.OpaqueAndTransparent};u._createClass(q,[{key:"texture",get:function(){return n.isSome(this.baseColorTexture)?this.baseColorTexture.glTexture:null}},{key:"textureMetallicRoughness",get:function(){return n.isSome(this.metallicRoughnessTexture)?
this.metallicRoughnessTexture.glTexture:null}},{key:"textureEmissive",get:function(){return n.isSome(this.emissionTexture)?this.emissionTexture.glTexture:null}},{key:"textureOcclusion",get:function(){return n.isSome(this.occlusionTexture)?this.occlusionTexture.glTexture:null}},{key:"textureNormal",get:function(){return n.isSome(this.normalTexture)?this.normalTexture.glTexture:null}}]);return q}(c.MaterialBase);d.__decorate([c.parameter({vectorOps:I.vec4})],m.prototype,"baseColor",void 0);d.__decorate([c.parameter()],
m.prototype,"usePBR",void 0);d.__decorate([c.parameter()],m.prototype,"hasParametersFromSource",void 0);d.__decorate([c.parameter({vectorOps:t.vec3})],m.prototype,"mrrFactors",void 0);d.__decorate([c.parameter({vectorOps:t.vec3})],m.prototype,"emissiveFactor",void 0);d.__decorate([c.parameter({dispose:!0})],m.prototype,"baseColorTexture",void 0);d.__decorate([c.parameter({dispose:!0})],m.prototype,"metallicRoughnessTexture",void 0);d.__decorate([c.parameter({dispose:!0})],m.prototype,"emissionTexture",
void 0);d.__decorate([c.parameter({dispose:!0})],m.prototype,"occlusionTexture",void 0);d.__decorate([c.parameter({dispose:!0})],m.prototype,"normalTexture",void 0);d.__decorate([c.parameter()],m.prototype,"objectOpacity",void 0);d.__decorate([c.parameterBlock()],m.prototype,"commonMaterialParameters",void 0);d.__decorate([c.parameterBlock()],m.prototype,"componentParameters",void 0);d.__decorate([c.parameter()],m.prototype,"textureAlphaCutoff",void 0);d.__decorate([c.parameter()],m.prototype,"alphaDiscardMode",
void 0);d.__decorate([c.parameter()],m.prototype,"isIntegratedMesh",void 0);d.__decorate([c.parameter()],m.prototype,"polygonOffsetEnabled",void 0);d.__decorate([c.parameter()],m.prototype,"ellipsoidMode",void 0);d.__decorate([c.parameter()],m.prototype,"hasOccludees",void 0);var p;(function(e){e[e.Opaque=0]="Opaque";e[e.Transparent=1]="Transparent";e[e.OpaqueAndTransparent=2]="OpaqueAndTransparent";e[e.IntegratedMesh=3]="IntegratedMesh"})(p||(p={}));let z=function(e){function q(){var l=e.apply(this,
arguments)||this;l.doubleSided=!1;l.cullFace=C.CullFaceOptions.Back;l.hasSlicePlane=!0;return l}u._inheritsLoose(q,e);return q}(c.MaterialParameterBlock);d.__decorate([c.parameter()],z.prototype,"doubleSided",void 0);d.__decorate([c.parameter()],z.prototype,"cullFace",void 0);d.__decorate([c.parameter()],z.prototype,"hasSlicePlane",void 0);let A=function(e){function q(){var l=e.apply(this,arguments)||this;l.externalColor=J.fromValues(1,1,1,1);l.externalColorMixMode=K.ColorMixModeEnum.Multiply;l.castShadows=
g.ComponentParameterSummary.All;return l}u._inheritsLoose(q,e);u._createClass(q,[{key:"transparent",get:function(){return 1>this.externalColor[3]?g.ComponentParameterSummary.All:g.ComponentParameterSummary.None}},{key:"opaqueOverride",get:function(){return this.externalColorMixMode===K.ColorMixModeEnum.Replace&&1===this.externalColor[3]?g.ComponentParameterSummary.All:g.ComponentParameterSummary.None}},{key:"visible",get:function(){return 0<this.externalColor[3]?g.ComponentParameterSummary.All:g.ComponentParameterSummary.None}},
{key:"type",get:function(){return L.ComponentDataType.Uniform}}]);return q}(c.MaterialParameterBlock);d.__decorate([c.parameter({vectorOps:I.vec4})],A.prototype,"externalColor",void 0);d.__decorate([c.parameter()],A.prototype,"externalColorMixMode",void 0);d.__decorate([c.parameter()],A.prototype,"castShadows",void 0);g.ComponentParameterSummary=void 0;(function(e){e[e.All=0]="All";e[e.Some=1]="Some";e[e.None=2]="None"})(g.ComponentParameterSummary||(g.ComponentParameterSummary={}));t=function(e){function q(){var l=
e.apply(this,arguments)||this;l.texture=null;l.transparent=g.ComponentParameterSummary.None;l.opaqueOverride=g.ComponentParameterSummary.None;l.castShadows=g.ComponentParameterSummary.None;return l}u._inheritsLoose(q,e);u._createClass(q,[{key:"type",get:function(){return L.ComponentDataType.Varying}}]);return q}(c.MaterialParameterBlock);d.__decorate([c.parameter()],t.prototype,"texture",void 0);d.__decorate([c.parameter()],t.prototype,"transparent",void 0);d.__decorate([c.parameter()],t.prototype,
"opaqueOverride",void 0);d.__decorate([c.parameter()],t.prototype,"castShadows",void 0);g.CommonMaterialParameters=z;g.ComponentMaterial=m;g.ComponentParametersUniform=A;g.ComponentParametersVarying=t;Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});