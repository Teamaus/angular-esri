// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","./enums"],function(b,a){b.ContextState=function(){this.blend=!1;this.blendColor={r:0,g:0,b:0,a:0};this.blendFunction={srcRGB:a.BlendFactor.ONE,dstRGB:a.BlendFactor.ZERO,srcAlpha:a.BlendFactor.ONE,dstAlpha:a.BlendFactor.ZERO};this.blendEquation={mode:a.BlendOperation.ADD,modeAlpha:a.BlendOperation.ADD};this.colorMask={r:!0,g:!0,b:!0,a:!0};this.faceCulling=!1;this.cullFace=a.Face.BACK;this.frontFace=a.CullMode.CCW;this.scissorTest=!1;this.scissorRect={x:0,y:0,width:0,height:0};this.depthTest=
!1;this.depthFunction=a.CompareFunction.LESS;this.clearDepth=1;this.depthWrite=!0;this.depthRange={zNear:0,zFar:1};this.viewport=null;this.polygonOffsetFill=this.stencilTest=!1;this.polygonOffset=[0,0];this.stencilFunction={face:a.Face.FRONT_AND_BACK,func:a.CompareFunction.ALWAYS,ref:0,mask:1};this.clearStencil=0;this.stencilWriteMask=1;this.stencilOperation={face:a.Face.FRONT_AND_BACK,fail:a.StencilOperation.KEEP,zFail:a.StencilOperation.KEEP,zPass:a.StencilOperation.KEEP};this.clearColor={r:0,g:0,
b:0,a:0};this.copyWriteBuffer=this.copyReadBuffer=this.pixelUnpackBuffer=this.pixelPackBuffer=this.uniformBuffer=this.indexBuffer=this.vertexBuffer=this.program=null;this.uniformBufferBindingPoints=[];this.renderbuffer=this.drawFramebuffer=this.readFramebuffer=null;this.activeTexture=0;this.textureUnitMap=[];this.vertexArrayObject=null};Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});