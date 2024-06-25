// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../core/Logger ../Entity ../GraphObject ../ObjectValue ../Path ../Relationship ./KnowledgeWasmInterface ./WasmQueryWrapperInterfaces ./wasmToGeometryFactories".split(" "),function(e,w,x,y,z,A,B,g,h,l){function t(a,b){const d=[],k=a.count();for(let c=0;c<k;c++){const f=a.get_value_at(c);d.push(p(f,b))}return d}function p(a,b){if(null===a||void 0===a)return null;if("object"!==typeof a||"getDate"in a)return a;if("geometry_type"in a)switch(a.geometry_type.value){case null:return null;
case g.WasmGeometryTypeCodes.ESRI_GEOMETRY_POINT:return l.wasmToPointGeometry(a);case g.WasmGeometryTypeCodes.ESRI_GEOMETRY_MULTIPOINT:return l.wasmToMultipointGeometry(a);case g.WasmGeometryTypeCodes.ESRI_GEOMETRY_POLYLINE:return l.wasmToPolylineGeometry(a);case g.WasmGeometryTypeCodes.ESRI_GEOMETRY_POLYGON:return l.wasmToPolygonGeometry(a);case g.WasmGeometryTypeCodes.ESRI_GEOMETRY_ENVELOPE:case g.WasmGeometryTypeCodes.ESRI_GEOMETRY_MULTI_PATCH:return m.warnOnce("Envelope and Multipatch are not supported on knowledge entities, but one of those geometry types was detected.  Result interpreted as null"),
null;default:return m.warnOnce("Unknown or blank geometry type returned - Result interpreted as null"),null}else if("object_value_type"in a)switch(a.object_value_type.value){case h.WasmGraphQueryResponseTypeCodes.OBJECT:return u(a,b);case h.WasmGraphQueryResponseTypeCodes.ENTITY:return q(a,b);case h.WasmGraphQueryResponseTypeCodes.RELATIONSHIP:return r(a,b);case h.WasmGraphQueryResponseTypeCodes.PATH:return v(a,b);case h.WasmGraphQueryResponseTypeCodes.ARRAY:return t(a,b);default:return m.warnOnce("Unknown graph object type detected!  Result interpreted as null"),
null}else return m.warnOnce("A decoded value came back of a type that is not supported.  Result interpreted as null"),null}function q(a,b){const d=a.type_name;a=n(a,b);return new x(Object.assign({typeName:d,id:b.globalIdField?a.properties?a.properties[b.globalIdField]:"":""},a))}function n(a,b){const d={},k=a.key_count();for(let c=0;c<k;c++)d[a.get_key_at(c)]=p(a.get_value_at(c),b);return{properties:d}}function u(a,b){return new z(n(a,b))}function v(a,b){const d=a.entity_count(),k=a.relationship_count(),
c=[];for(let f=0;f<d;f++)c.push(q(a.get_entity_at(f),b)),f<k&&c.push(r(a.get_relationship_at(f),b));return new A({path:c})}function r(a,b){const d=a.type_name;a=n(a,b);return new B(Object.assign({typeName:d,id:b.globalIdField?a.properties?a.properties[b.globalIdField]:"":"",originId:b.originEntityGlobalIdField?a.properties?a.properties[b.originEntityGlobalIdField]:"":"",destinationId:b.destEntityGlobalIdField?a.properties?a.properties[b.destEntityGlobalIdField]:"":""},a))}const m=w.getLogger("esri.rest.knowledgeGraph.WasmToQueryResponseObjConstructors");
e.decodedWasmObjToQueryResponseObj=p;e.wasmArrayToArray=t;e.wasmToEntity=q;e.wasmToGraphObject=function(a,b){return new y(n(a,b))};e.wasmToObjectValue=u;e.wasmToPath=v;e.wasmToRelationship=r;Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});