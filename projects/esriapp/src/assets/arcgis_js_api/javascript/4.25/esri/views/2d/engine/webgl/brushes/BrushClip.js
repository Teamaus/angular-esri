// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../../../../../chunks/vec4f32 ../Utils ./WGLBrush ../shaders/BackgroundPrograms ../../../../webgl/enums ../../../../webgl/ProgramTemplate".split(" "),function(m,g,n,p,q,r,b,t){return function(h){function e(){var a=h.apply(this,arguments)||this;a._color=n.fromValues(0,1,0,1);return a}m._inheritsLoose(e,h);var f=e.prototype;f.dispose=function(){this._program&&this._program.dispose()};f.prepareState=function({context:a}){a.setStencilTestEnabled(!0);
a.setBlendingEnabled(!1);a.setFaceCullingEnabled(!1);a.setColorMask(!1,!1,!1,!1);a.setStencilOp(b.StencilOperation.KEEP,b.StencilOperation.KEEP,b.StencilOperation.REPLACE);a.setStencilWriteMask(255);a.setStencilFunction(b.CompareFunction.ALWAYS,0,255)};f.draw=function(a,d){const {context:c,state:k,requestRender:l,allowDelayedRender:u}=a;a=p.createProgramDescriptor("clip",{geometry:[{location:0,name:"a_pos",count:2,type:b.DataType.SHORT}]});d=d.getVAO(c,k,a.attributes,a.bufferLayouts);g.isNone(d.indexBuffer)||
(this._program||(this._program=t.createProgram(c,r.background)),u&&g.isSome(l)&&!this._program.isCompiled?l():(c.useProgram(this._program),this._program.setUniform2fv("u_coord_range",[1,1]),this._program.setUniform4fv("u_color",this._color),this._program.setUniformMatrix3fv("u_dvsMat3",k.displayMat3),c.bindVAO(d),c.drawElements(b.PrimitiveType.TRIANGLES,d.indexBuffer.size,b.DataType.UNSIGNED_INT,0),c.bindVAO()))};return e}(q)});