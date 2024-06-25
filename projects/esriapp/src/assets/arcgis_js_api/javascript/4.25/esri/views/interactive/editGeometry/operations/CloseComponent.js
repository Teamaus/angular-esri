// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/arrayUtils","../../../../core/maybe","../EditGeometry"],function(e,h,a,k){let l=function(){function f(b,c){this._editGeometry=b;this._component=c;this._createdEdge=null}var d=f.prototype;d.apply=function(){let b="redo";if(a.isNone(this._createdEdge)){b="apply";const c=this._component.getFirstVertex(),g=this._component.getLastVertex();if(this._component.isClosed()||3>this._component.vertices.length||a.isNone(c)||a.isNone(g))return;this._createdEdge=new k.Edge(this._component,
g,c)}this._createdEdge.leftVertex.rightEdge=this._createdEdge;this._createdEdge.rightVertex.leftEdge=this._createdEdge;this._component.edges.push(this._createdEdge);this._editGeometry.notifyChanges({operation:b})};d.undo=function(){a.isNone(this._createdEdge)||(h.remove(this._component.edges,this._createdEdge),this._createdEdge.leftVertex.rightEdge=null,this._createdEdge.rightVertex.leftEdge=null,this._editGeometry.notifyChanges({operation:"undo"}))};d.accumulate=function(){return!1};return f}();
e.CloseComponent=l;Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});