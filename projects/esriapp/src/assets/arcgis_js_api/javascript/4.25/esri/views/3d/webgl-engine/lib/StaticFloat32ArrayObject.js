// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","./VertexArrayObject","../../../webgl/BufferObject","../../../webgl/enums"],function(b,d,e,f,g){let m=function(){function a(c,h,k,l){this.vao=new e.VertexArrayObject(c,h,{geometry:k},{geometry:f.BufferObject.createVertex(c,g.Usage.STATIC_DRAW)});this.array=new Float32Array(l);this.vao.vertexBuffers.geometry.setSize(this.array.byteLength)}a.prototype.dispose=function(){this.vao.dispose(!0)};d._createClass(a,[{key:"length",get:function(){return this.array.length}}]);
return a}();b.StaticFloat32ArrayObject=m;Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});