// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../core/accessorSupport/PropertyOrigin","./layerUtils"],function(l,k,r){function n(a){return p[a.type].propertyGroups.filter(b=>!b.predicate||b.predicate(a))}function q(a){a=n(a);const b=[];for(const c of a)b.push(...c.properties);return b}function t(a,b,c){const d=k.writableNameToId(c),{id:f,properties:g}=b;b=g.map(h=>a.originIdOf(h)<d?"source":"overridden").reduce((h,u)=>h===u?h:"overridden");return{id:f,properties:[...g],status:b}}function m(a){const b=p[a.type];return!(!b||
b.predicate&&!b.predicate(a))}const e=a=>"feature"===a.type&&!a.isTable,p={feature:{predicate:r.isFeatureServiceLayer,propertyGroups:[{id:"blend-mode",properties:["blendMode"],predicate:e},{id:"charts",properties:["charts"]},{id:"custom-parameters",properties:["customParameters"]},{id:"definition-expression",properties:["definitionExpression"]},{id:"effect",properties:["effect","featureEffect"],predicate:e},{id:"feature-reduction",properties:["featureReduction"],predicate:e},{id:"floor-info",properties:["floorInfo"],
predicate:e},{id:"form-template",properties:["formTemplate"]},{id:"labels",properties:["labelingInfo","labelsVisible"],predicate:e},{id:"legend-enabled",properties:["legendEnabled"],predicate:e},{id:"opacity",properties:["opacity"],predicate:e},{id:"order-by",properties:["orderBy"],predicate:e},{id:"popup",properties:["popupTemplate","popupEnabled"]},{id:"refresh-interval",properties:["refreshInterval"]},{id:"renderer",properties:["renderer"],predicate:e},{id:"scale-range",properties:["minScale",
"maxScale"],predicate:e},{id:"use-view-time",properties:["useViewTime"]}]}};l.clearOverrides=function(a,b){if(m(a)){var c=q(a);for(const f of c){c=a;var d=f;const g=k.writableNameToId(b);c.revert(d,k.idToReadableName(g-1))}}};l.disconnectFromSource=function(a,b){if(m(a)){var c=q(a);for(const f of c){var d=a;c=f;const g=k.writableNameToId(b),h=d.originIdOf(c);h<g&&h!==k.OriginId.COMPUTED&&d.updateOrigin(c,k.idToWritableName(g))}}};l.getLayerOriginInfo=function(a,b){if(m(a)){var c=n(a).map(d=>t(a,d,
b));return{propertyGroupOriginInfos:c,status:c.map(d=>d.status).reduce((d,f)=>d===f?d:"mixed")}}};l.isSupportedLayer=m;Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});