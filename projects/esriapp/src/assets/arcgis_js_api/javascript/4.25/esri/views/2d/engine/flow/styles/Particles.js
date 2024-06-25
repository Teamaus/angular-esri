// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/promiseUtils ../utils ../../../../webgl/BufferObject ../../../../webgl/enums ../../../../webgl/VertexArrayObject ../../../../webgl/VertexElementDescriptor".split(" "),function(m,n,t,k,p,e,u,l){let x=function(){function f(a){this._params=a}var g=f.prototype;g.isCompatible=function(a){return a instanceof f?k.areStreamlinesCompatible(this._params,a._params):!1};g.load=function(){var a=n._asyncToGenerator(function*(d,
c){const {extent:b,size:q}=d;t.throwIfAborted(c);d=yield this._params.loadImagery(b,q[0],q[1],this._params.timeExtent,c);const {vertexData:v,indexData:w}=yield this._params.createFlowMesh("Particles",this._params.simulationSettings,d,c);return new r(v,w,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})});return function(d,c){return a.apply(this,arguments)}}();g.render=function(a,d,c){({context:a}=a);const {program:b}=c;a.setFaceCullingEnabled(!1);a.setBlendingEnabled(!0);
a.setBlendFunction(e.BlendFactor.ONE,e.BlendFactor.ONE_MINUS_SRC_ALPHA);a.useProgram(b);b.setUniform1f("u_time",d.time);b.setUniform1f("u_trailLength",this._params.trailLength);b.setUniform1f("u_flowSpeed",this._params.flowSpeed);b.setUniform1f("u_featheringSize",this._params.featheringSize);b.setUniform1f("u_featheringOffset",this._params.featheringOffset);b.setUniform1f("u_introFade",this._params.introFade?1:0);b.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0);b.setUniform1f("u_decayRate",
this._params.decayRate);b.setUniformMatrix3fv("u_dvsMat3",d.dvsMat3);b.setUniformMatrix3fv("u_displayViewMat3",d.displayViewMat3);k.setUniforms(b,"color","vec4",this._params.color);k.setUniforms(b,"opacity","float",this._params.opacity);k.setUniforms(b,"size","float",this._params.size);a.bindVAO(c.vertexArray);a.drawElements(e.PrimitiveType.TRIANGLES,c.indexCount,e.DataType.UNSIGNED_INT,0)};n._createClass(f,[{key:"animated",get:function(){return 0<this._params.flowSpeed}}]);return f}();const h=new Map;
h.set("a_xyts0",0);h.set("a_xyts1",1);h.set("a_typeIdDurationSeed",2);h.set("a_extrudeInfo",3);const y={geometry:[new l.VertexElementDescriptor("a_xyts0",4,e.DataType.FLOAT,0,64),new l.VertexElementDescriptor("a_xyts1",4,e.DataType.FLOAT,16,64),new l.VertexElementDescriptor("a_typeIdDurationSeed",4,e.DataType.FLOAT,32,64),new l.VertexElementDescriptor("a_extrudeInfo",4,e.DataType.FLOAT,48,64)]},z={vsPath:"raster/flow/particles",fsPath:"raster/flow/particles",attributes:h};let r=function(){function f(a,
d,c){this._vertexData=a;this._indexData=d;this._values=c}var g=f.prototype;g.attach=function(a){var {context:d}=a,c=p.BufferObject.createVertex(d,e.Usage.STATIC_DRAW,this._vertexData);const b=p.BufferObject.createIndex(d,e.Usage.STATIC_DRAW,this._indexData);d=new u.VertexArrayObject(d,h,y,{geometry:c},b);c=[];"ramp"===this._values.color.kind&&c.push("vvColor");"ramp"===this._values.opacity.kind&&c.push("vvOpacity");"ramp"===this._values.size.kind&&c.push("vvSize");a=a.painter.materialManager.getProgram(z,
c);this.vertexArray=d;this.program=a;this.indexCount=this._indexData.length;this._indexData=this._vertexData=null};g.detach=function(){this.vertexArray.dispose()};n._createClass(f,[{key:"ready",get:function(){return this.program.isCompiled}}]);return f}();m.Particles=x;m.ParticlesResources=r;Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});