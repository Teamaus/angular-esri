// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","./VertexAttribute","../../../webgl/enums","../../../webgl/VertexElementDescriptor"],function(d,a,b,c){const e=[new c.VertexElementDescriptor(a.VertexAttribute.POSITION,3,b.DataType.FLOAT,0,12)],f=[new c.VertexElementDescriptor(a.VertexAttribute.POSITION,3,b.DataType.FLOAT,0,20),new c.VertexElementDescriptor(a.VertexAttribute.UV0,2,b.DataType.FLOAT,12,20)],g=[new c.VertexElementDescriptor(a.VertexAttribute.POSITION,3,b.DataType.FLOAT,0,32),new c.VertexElementDescriptor(a.VertexAttribute.NORMAL,
3,b.DataType.FLOAT,12,32),new c.VertexElementDescriptor(a.VertexAttribute.UV0,2,b.DataType.FLOAT,24,32)],h=[new c.VertexElementDescriptor(a.VertexAttribute.POSITION,3,b.DataType.FLOAT,0,16),new c.VertexElementDescriptor(a.VertexAttribute.COLOR,4,b.DataType.UNSIGNED_BYTE,12,16)],k=[new c.VertexElementDescriptor(a.VertexAttribute.POSITION,2,b.DataType.FLOAT,0,8)];a=[new c.VertexElementDescriptor(a.VertexAttribute.POSITION,2,b.DataType.FLOAT,0,16),new c.VertexElementDescriptor(a.VertexAttribute.UV0,
2,b.DataType.FLOAT,8,16)];d.Pos2=k;d.Pos2Tex=a;d.Pos3=e;d.Pos3Col=h;d.Pos3NormalTex=g;d.Pos3Tex=f;Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});