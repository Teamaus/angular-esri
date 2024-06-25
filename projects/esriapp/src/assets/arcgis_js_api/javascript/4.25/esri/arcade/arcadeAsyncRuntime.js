// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ./ArcadeModule ./ArcadeModuleLoader ./Dictionary ./executionError ./Feature ./FunctionWrapper ../chunks/languageUtils ./treeAnalysis ../chunks/array ./functions/date ./functions/geomasync ./functions/geometry ./functions/maths ./functions/stats ./functions/string ../geometry/Geometry ../geometry/SpatialReference".split(" "),function(C,m,Ia,xa,y,g,ya,u,f,Ja,Ka,La,Ma,F,Na,Oa,Pa,za,Aa){function G(b,a){return H.apply(this,arguments)}function H(){H=m._asyncToGenerator(function*(b,
a){const c=[];for(let d=0;d<a.arguments.length;d++)c.push(yield k(b,a.arguments[d]));return c});return H.apply(this,arguments)}function v(b,a,c){return I.apply(this,arguments)}function I(){I=m._asyncToGenerator(function*(b,a,c){if(!0===a.preparsed)return c(b,null,a.arguments);const d=yield G(b,a);return c(b,a,d)});return I.apply(this,arguments)}function A(b,a,c){return J.apply(this,arguments)}function J(){J=m._asyncToGenerator(function*(b,a,c){if(!0===a.preparsed)return c(b,null,a.arguments);const d=
yield G(b,a);return c(b,a,d)});return J.apply(this,arguments)}function k(b,a,c){return K.apply(this,arguments)}function K(){K=m._asyncToGenerator(function*(b,a,c){if(a.breakpoint&&!0!==c)return yield a.breakpoint(),k(b,a,!0);try{switch(a?.type){case "VariableDeclarator":return yield Qa(b,a);case "ImportDeclaration":return yield Ra(b,a);case "ExportNamedDeclaration":return yield Sa(b,a);case "VariableDeclaration":return yield Ba(b,a,0);case "BlockStatement":case "Program":return yield Ta(b,a);case "FunctionDeclaration":return yield Ua(b,
a);case "ReturnStatement":return yield Va(b,a);case "IfStatement":return yield Wa(b,a);case "ExpressionStatement":return yield Xa(b,a);case "UpdateExpression":return yield Ya(b,a);case "AssignmentExpression":return yield Za(b,a);case "ForStatement":return yield $a(b,a);case "WhileStatement":return yield ab(b,a);case "ForInStatement":return yield bb(b,a);case "BreakStatement":return f.breakResult;case "EmptyStatement":return f.voidOperation;case "ContinueStatement":return f.continueResult;case "TemplateElement":return yield cb(b,
a);case "TemplateLiteral":return yield db(b,a);case "Identifier":return yield L(b,a);case "MemberExpression":return yield eb(b,a);case "Literal":return a.value;case "CallExpression":return yield fb(b,a);case "UnaryExpression":return yield gb(b,a);case "BinaryExpression":return yield hb(b,a);case "LogicalExpression":return yield ib(b,a);case "ArrayExpression":return yield jb(b,a);case "ObjectExpression":return yield kb(b,a);case "Property":return yield lb(b,a);default:throw new g.ArcadeExecutionError(b,
g.ExecutionErrorCodes.Unrecognised,a);}}catch(d){throw g.ensureArcadeExecutionError(b,a,d);}});return K.apply(this,arguments)}function kb(b,a){return M.apply(this,arguments)}function M(){M=m._asyncToGenerator(function*(b,a){const c=[];for(var d=0;d<a.properties.length;d++)c[d]=yield k(b,a.properties[d]);d={};const e=new Map;for(let h=0;h<c.length;h++){const l=c[h];if(f.isFunctionParameter(l.value))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.NoFunctionInDictionary,a);if(!1===f.isString(l.key))throw new g.ArcadeExecutionError(b,
g.ExecutionErrorCodes.KeyMustBeString,a);let n=l.key.toString();const p=n.toLowerCase();e.has(p)?n=e.get(p):e.set(p,n);d[n]=l.value===f.voidOperation?null:l.value}b=new y(d);b.immutable=!1;return b});return M.apply(this,arguments)}function lb(b,a){return N.apply(this,arguments)}function N(){N=m._asyncToGenerator(function*(b,a){const c=yield k(b,a.value);return"Identifier"===a.key.type?{key:a.key.name,value:c}:{key:yield k(b,a.key),value:c}});return N.apply(this,arguments)}function ab(b,a){return O.apply(this,
arguments)}function O(){O=m._asyncToGenerator(function*(b,a){var c=!0,d=f.voidOperation;c=yield k(b,a.test);if(!1===c)return f.voidOperation;if(!0!==c)throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.BooleanConditionRequired,a);for(;!0===c;){d=yield k(b,a.body);if(d===f.breakResult)break;if(d instanceof f.ReturnResult)break;c=yield k(b,a.test);if(!0!==c&&!1!==c)throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.BooleanConditionRequired,a);}return d instanceof f.ReturnResult?d:f.voidOperation});
return O.apply(this,arguments)}function mb(b,a,c){return P.apply(this,arguments)}function P(){P=m._asyncToGenerator(function*(b,a,c){const d=yield k(b,a.body);c.lastAction=d;if(c.lastAction===f.breakResult||c.lastAction instanceof f.ReturnResult)return c.testResult=!1,c;null!==a.update&&(yield k(b,a.update));return c});return P.apply(this,arguments)}function nb(b,a,c){return Q.apply(this,arguments)}function Q(){Q=m._asyncToGenerator(function*(b,a,c){if(null!==a.test){const d=yield k(b,a.test);if(!0===
b.abortSignal?.aborted)throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.Cancelled,a);c.testResult=d;if(!1===c.testResult)return c;if(!0!==c.testResult)throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.BooleanConditionRequired,a);}return mb(b,a,c)});return Q.apply(this,arguments)}function D(b,a,c,d,e,h){try{nb(b,a,c).then(()=>{try{!0===c.testResult?(h++,100<h?(h=0,setTimeout(()=>{D(b,a,c,d,e,h)},0)):D(b,a,c,d,e,h)):c.lastAction instanceof f.ReturnResult?d(c.lastAction):d(f.voidOperation)}catch(l){e(l)}},
l=>{e(l)})}catch(l){e(l)}}function $a(b,a){try{return null!==a.init?k(b,a.init).then(()=>new Promise((c,d)=>{D(b,a,{testResult:!0,lastAction:f.voidOperation},e=>{c(e)},e=>{d(e)},0)})):new Promise((c,d)=>{D(b,a,{testResult:!0,lastAction:f.voidOperation},e=>{c(e)},e=>{d(e)},0)})}catch(c){return Promise.reject(c)}}function R(b,a,c,d,e,h,l,n,p,q){try{d<=h?n(f.voidOperation):(e.value="k"===l?c[h]:h,k(b,a.body).then(r=>{try{r instanceof f.ReturnResult?n(r):r===f.breakResult?n(f.voidOperation):(q++,100<
q?(q=0,setTimeout(()=>{R(b,a,c,d,e,h+1,l,n,p,q)},0)):R(b,a,c,d,e,h+1,l,n,p,q))}catch(w){p(w)}},r=>{p(r)}))}catch(r){p(r)}}function S(b,a,c,d,e,h,l,n,p){try{c.length()<=e?l(f.voidOperation):(d.value="k"===h?c.get(e):e,k(b,a.body).then(q=>{q instanceof f.ReturnResult?l(q):q===f.breakResult?l(f.voidOperation):(p++,100<p?(p=0,setTimeout(()=>{S(b,a,c,d,e+1,h,l,n,p)},0)):S(b,a,c,d,e+1,h,l,n,p))},q=>{n(q)}))}catch(q){n(q)}}function T(b,a,c,d,e,h){try{void 0===h&&(h="i"),0===c.length?d.resolve(f.voidOperation):
R(b,a,c,c.length,e,0,h,l=>{d.resolve(l)},l=>{d.reject(l)},0)}catch(l){d.reject(l)}}function ob(b,a,c,d,e,h){try{void 0===h&&(h="i"),0===c.length?d.resolve(f.voidOperation):S(b,a,c,e,0,h,l=>{d.resolve(l)},l=>{d.reject(l)},0)}catch(l){d.reject(l)}}function pb(b,a,c,d,e){try{const h=c.keys();T(b,a,h,d,e,"k")}catch(h){d.reject(h)}}function U(b,a,c,d,e,h,l,n){try{b.next().then(p=>{try{if(null===p)h(f.voidOperation);else{const q=ya.createFromGraphicLikeObject(p.geometry,p.attributes,d);q._underlyingGraphic=
p;e.value=q;k(a,c.body).then(r=>{try{r===f.breakResult?h(f.voidOperation):r instanceof f.ReturnResult?h(r):(n++,100<n?(n=0,setTimeout(()=>{U(b,a,c,d,e,h,l,n)},0)):U(b,a,c,d,e,h,l,n))}catch(w){l(w)}},r=>{l(r)})}}catch(q){l(q)}},p=>{l(p)})}catch(p){l(p)}}function bb(b,a){return V.apply(this,arguments)}function V(){V=m._asyncToGenerator(function*(b,a){return new Promise((c,d)=>{k(b,a.right).then(e=>{try{let h=null;h="VariableDeclaration"===a.left.type?k(b,a.left):Promise.resolve();h.then(()=>{try{let n=
"";if("VariableDeclaration"===a.left.type){var l=a.left.declarations[0].id;"Identifier"===l.type&&(n=l.name)}else"Identifier"===a.left.type&&(n=a.left.name);if(!n)throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidIdentifier,a);n=n.toLowerCase();l=null;null!=b.localScope&&void 0!==b.localScope[n]&&(l=b.localScope[n]);null===l&&void 0!==b.globalScope[n]&&(l=b.globalScope[n]);null===l?d(new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidIdentifier,a)):f.isArray(e)||f.isString(e)?
T(b,a,e,{reject:d,resolve:c},l):f.isImmutableArray(e)?ob(b,a,e,{reject:d,resolve:c},l):e instanceof y||f.isFeature(e)?pb(b,a,e,{reject:d,resolve:c},l):f.isFeatureSet(e)?U(e.iterator(b.abortSignal),b,a,e,l,p=>{c(p)},p=>{d(p)},0):T(b,a,[],{reject:d,resolve:c},l)}catch(n){d(n)}},d)}catch(h){d(h)}},d)})});return V.apply(this,arguments)}function Ya(b,a){return W.apply(this,arguments)}function W(){W=m._asyncToGenerator(function*(b,a){var c=a.argument;if("MemberExpression"===c.type){var d=null,e=null;d=
yield k(b,c.object);!0===c.computed?e=yield k(b,c.property):"Identifier"===c.property.type&&(e=c.property.name);c=d;if(f.isArray(c))if(f.isNumber(e)){0>e&&(e=c.length+e);if(0>e||e>=c.length)throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.OutOfBounds,a);b=f.toNumber(c[e]);c[e]="++"===a.operator?b+1:b-1}else throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.ArrayAccessorMustBeNumber,a);else if(c instanceof y){if(!1===f.isString(e))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.KeyAccessorMustBeString,
a);if(!0===c.hasField(e))b=f.toNumber(c.field(e)),c.setField(e,"++"===a.operator?b+1:b-1);else throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.FieldNotFound,a,{key:e});}else if(c instanceof z){if(!1===f.isString(e))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.ModuleAccessorMustBeString,a);if(!0===c.hasGlobal(e))b=f.toNumber(yield c.global(e)),c.setGlobal(e,"++"===a.operator?b+1:b-1);else throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.ModuleExportNotFound,a);}else if(f.isFeature(c)){if(!1===
f.isString(e))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.KeyAccessorMustBeString,a);if(!0===c.hasField(e))b=f.toNumber(c.field(e)),c.setField(e,"++"===a.operator?b+1:b-1);else throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.FieldNotFound,a,{key:e});}else{if(f.isImmutableArray(c))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.Immutable,a);throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,a);}return!1===a.prefix?b:"++"===a.operator?b+1:b-1}e=
"Identifier"===a.argument.type?a.argument.name.toLowerCase():"";if(!e)throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidIdentifier,a);if(null!=b.localScope&&void 0!==b.localScope[e])return c=f.toNumber(b.localScope[e].value),b.localScope[e]={value:"++"===a.operator?c+1:c-1,valueset:!0,node:a},!1===a.prefix?c:"++"===a.operator?c+1:c-1;if(void 0!==b.globalScope[e])return c=f.toNumber(b.globalScope[e].value),b.globalScope[e]={value:"++"===a.operator?c+1:c-1,valueset:!0,node:a},!1===a.prefix?
c:"++"===a.operator?c+1:c-1;throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidIdentifier,a);});return W.apply(this,arguments)}function x(b,a,c,d,e){switch(a){case "\x3d":return b===f.voidOperation?null:b;case "/\x3d":return f.toNumber(c)/f.toNumber(b);case "*\x3d":return f.toNumber(c)*f.toNumber(b);case "-\x3d":return f.toNumber(c)-f.toNumber(b);case "+\x3d":return f.isString(c)||f.isString(b)?f.toString(c)+f.toString(b):f.toNumber(c)+f.toNumber(b);case "%\x3d":return f.toNumber(c)%
f.toNumber(b);default:throw new g.ArcadeExecutionError(e,g.ExecutionErrorCodes.UnsupportedOperator,d);}}function Za(b,a){return X.apply(this,arguments)}function X(){X=m._asyncToGenerator(function*(b,a){var c=a.left;if("MemberExpression"===c.type){var d=yield k(b,a.right);const e=yield k(b,c.object);let h=null;if(!0===c.computed)h=yield k(b,c.property);else if("Identifier"===c.property.type)h=c.property.name;else throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidIdentifier,a);if(f.isArray(e))if(f.isNumber(h)){0>
h&&(h=e.length+h);if(0>h||h>e.length)throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.OutOfBounds,a);if(h===e.length&&"\x3d"!==a.operator)throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.OutOfBounds,a);e[h]=x(d,a.operator,e[h],a,b)}else throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.ArrayAccessorMustBeNumber,a);else if(e instanceof y){if(!1===f.isString(h))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.KeyAccessorMustBeString,a);if(!0===e.hasField(h))e.setField(h,
x(d,a.operator,e.field(h),a,b));else{if("\x3d"!==a.operator)throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.FieldNotFound,a,{key:h});e.setField(h,x(d,a.operator,null,a,b))}}else if(e instanceof z){if(!1===f.isString(h))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.KeyAccessorMustBeString,a);if(!0===e.hasGlobal(h))e.setGlobal(h,x(d,a.operator,yield e.global(h),a,b));else throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.ModuleExportNotFound,a);}else if(f.isFeature(e)){if(!1===
f.isString(h))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.KeyAccessorMustBeString,a);if(!0===e.hasField(h))e.setField(h,x(d,a.operator,e.field(h),a,b));else{if("\x3d"!==a.operator)throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.FieldNotFound,a,{key:h});e.setField(h,x(d,a.operator,null,a,b))}}else{if(f.isImmutableArray(e))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.Immutable,a);throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,a);}return f.voidOperation}c=
c.name.toLowerCase();if(null!=b.localScope&&void 0!==b.localScope[c])return d=yield k(b,a.right),b.localScope[c]={value:x(d,a.operator,b.localScope[c].value,a,b),valueset:!0,node:a.right},f.voidOperation;if(void 0!==b.globalScope[c])return d=yield k(b,a.right),b.globalScope[c]={value:x(d,a.operator,b.globalScope[c].value,a,b),valueset:!0,node:a.right},f.voidOperation;throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidIdentifier,a);});return X.apply(this,arguments)}function Xa(b,a){return Y.apply(this,
arguments)}function Y(){Y=m._asyncToGenerator(function*(b,a){if("AssignmentExpression"===a.expression.type)return k(b,a.expression);if("CallExpression"===a.expression.type)return b=yield k(b,a.expression),b===f.voidOperation?f.voidOperation:new f.ImplicitResult(b);b=yield k(b,a.expression);return b===f.voidOperation?f.voidOperation:new f.ImplicitResult(b)});return Y.apply(this,arguments)}function Wa(b,a){return Z.apply(this,arguments)}function Z(){Z=m._asyncToGenerator(function*(b,a){const c=yield k(b,
a.test);if(!0===c)return k(b,a.consequent);if(!1===c)return null!==a.alternate?k(b,a.alternate):f.voidOperation;throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.BooleanConditionRequired,a);});return Z.apply(this,arguments)}function Ta(b,a){return aa.apply(this,arguments)}function aa(){aa=m._asyncToGenerator(function*(b,a){return Ca(b,a,0)});return aa.apply(this,arguments)}function Ca(b,a,c){return ba.apply(this,arguments)}function ba(){ba=m._asyncToGenerator(function*(b,a,c){if(c>=a.body.length)return f.voidOperation;
const d=yield k(b,a.body[c]);return d instanceof f.ReturnResult||d===f.breakResult||d===f.continueResult||c===a.body.length-1?d:Ca(b,a,c+1)});return ba.apply(this,arguments)}function Va(b,a){return ca.apply(this,arguments)}function ca(){ca=m._asyncToGenerator(function*(b,a){if(null===a.argument)return new f.ReturnResult(f.voidOperation);b=yield k(b,a.argument);return new f.ReturnResult(b)});return ca.apply(this,arguments)}function Ua(b,a){return da.apply(this,arguments)}function da(){da=m._asyncToGenerator(function*(b,
a){const c=a.id.name.toLowerCase();b.globalScope[c]={valueset:!0,node:null,value:new qb(a,b)};return f.voidOperation});return da.apply(this,arguments)}function Ra(b,a){return ea.apply(this,arguments)}function ea(){ea=m._asyncToGenerator(function*(b,a){const c=a.specifiers[0].local.name.toLowerCase(),d=b.libraryResolver.loadLibrary(c);let e=null;b.libraryResolver._moduleSingletons?.has(d.uri)?e=b.libraryResolver._moduleSingletons.get(d.uri):(e=new z(d),yield e.loadModule(b),b.libraryResolver._moduleSingletons?.set(d.uri,
e));b.globalScope[c]={value:e,valueset:!0,node:a};return f.voidOperation});return ea.apply(this,arguments)}function Sa(b,a){return fa.apply(this,arguments)}function fa(){fa=m._asyncToGenerator(function*(b,a){yield k(b,a.declaration);if("FunctionDeclaration"===a.declaration.type)b.exports[a.declaration.id.name.toLowerCase()]="function";else if("VariableDeclaration"===a.declaration.type)for(const c of a.declaration.declarations)b.exports[c.id.name.toLowerCase()]="variable";return f.voidOperation});
return fa.apply(this,arguments)}function Ba(b,a,c){return ha.apply(this,arguments)}function ha(){ha=m._asyncToGenerator(function*(b,a,c){if(c>=a.declarations.length)return f.voidOperation;yield k(b,a.declarations[c]);if(c===a.declarations.length-1)return f.voidOperation;yield Ba(b,a,c+1);return f.voidOperation});return ha.apply(this,arguments)}function Qa(b,a){return ia.apply(this,arguments)}function ia(){ia=m._asyncToGenerator(function*(b,a){let c=null;c=null===a.init?null:yield k(b,a.init);if(null!==
b.localScope){c===f.voidOperation&&(c=null);if("Identifier"!==a.id.type)throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidIdentifier,a);var d=a.id.name.toLowerCase();null!=b.localScope&&(b.localScope[d]={value:c,valueset:!0,node:a.init});return f.voidOperation}if("Identifier"!==a.id.type)throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidIdentifier,a);d=a.id.name.toLowerCase();c===f.voidOperation&&(c=null);b.globalScope[d]={value:c,valueset:!0,node:a.init};return f.voidOperation});
return ia.apply(this,arguments)}function eb(b,a){return ja.apply(this,arguments)}function ja(){ja=m._asyncToGenerator(function*(b,a){const c=yield k(b,a.object);if(null===c)throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.MemberOfNull,a);if(!1===a.computed){if("Identifier"===a.property.type){if(c instanceof y||f.isFeature(c))return c.field(a.property.name);if(c instanceof za)return F.geometryMember(c,a.property.name,b,a);if(c instanceof z){if(!c.hasGlobal(a.property.name))throw new g.ArcadeExecutionError(b,
g.ExecutionErrorCodes.InvalidIdentifier,a);return c.global(a.property.name)}}throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidMemberAccessKey,a);}let d=yield k(b,a.property);if(c instanceof y||f.isFeature(c)){if(f.isString(d))return c.field(d)}else if(c instanceof z){if(f.isString(d))return c.global(d)}else if(c instanceof za){if(f.isString(d))return F.geometryMember(c,d,b,a)}else if(f.isArray(c)){if(f.isNumber(d)&&isFinite(d)&&Math.floor(d)===d){0>d&&(d=c.length+d);if(d>=c.length||
0>d)throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.OutOfBounds,a);return c[d]}}else if(f.isImmutableArray(c)){if(f.isNumber(d)&&isFinite(d)&&Math.floor(d)===d){0>d&&(d=c.length()+d);if(d>=c.length()||0>d)throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.OutOfBounds,a);return c.get(d)}}else if(f.isString(c)&&f.isNumber(d)&&isFinite(d)&&Math.floor(d)===d){0>d&&(d=c.length+d);if(d>=c.length||0>d)throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.OutOfBounds,a);return c[d]}throw new g.ArcadeExecutionError(b,
g.ExecutionErrorCodes.InvalidMemberAccessKey,a);});return ja.apply(this,arguments)}function gb(b,a){return ka.apply(this,arguments)}function ka(){ka=m._asyncToGenerator(function*(b,a){const c=yield k(b,a.argument);if(f.isBoolean(c)&&"!"===a.operator)return!c;if("-"===a.operator)return-1*f.toNumber(c);if("+"===a.operator)return 1*f.toNumber(c);if("~"===a.operator)return~f.toNumber(c);throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.UnsupportedUnaryOperator,a);});return ka.apply(this,arguments)}
function jb(b,a){return la.apply(this,arguments)}function la(){la=m._asyncToGenerator(function*(b,a){const c=[];for(var d=0;d<a.elements.length;d++)c.push(yield k(b,a.elements[d]));for(d=0;d<c.length;d++){if(f.isFunctionParameter(c[d]))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.NoFunctionInArray,a);c[d]===f.voidOperation&&(c[d]=null)}return c});return la.apply(this,arguments)}function hb(b,a){return ma.apply(this,arguments)}function ma(){ma=m._asyncToGenerator(function*(b,a){var c=[];
c[0]=yield k(b,a.left);c[1]=yield k(b,a.right);const d=c[0];c=c[1];switch(a.operator){case "|":case "\x3c\x3c":case "\x3e\x3e":case "\x3e\x3e\x3e":case "^":case "\x26":return f.binaryOperator(f.toNumber(d),f.toNumber(c),a.operator);case "\x3d\x3d":return f.equalityTest(d,c);case "!\x3d":return!f.equalityTest(d,c);case "\x3c":return f.greaterThanLessThan(d,c,a.operator);case "\x3e":return f.greaterThanLessThan(d,c,a.operator);case "\x3c\x3d":return f.greaterThanLessThan(d,c,a.operator);case "\x3e\x3d":return f.greaterThanLessThan(d,
c,a.operator);case "+":return f.isString(d)||f.isString(c)?f.toString(d)+f.toString(c):f.toNumber(d)+f.toNumber(c);case "-":return f.toNumber(d)-f.toNumber(c);case "*":return f.toNumber(d)*f.toNumber(c);case "/":return f.toNumber(d)/f.toNumber(c);case "%":return f.toNumber(d)%f.toNumber(c);default:throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.UnsupportedOperator,a);}});return ma.apply(this,arguments)}function ib(b,a){return na.apply(this,arguments)}function na(){na=m._asyncToGenerator(function*(b,
a){const c=yield k(b,a.left);let d=null;if(f.isBoolean(c))switch(a.operator){case "||":if(!0===c)return c;d=yield k(b,a.right);if(f.isBoolean(d))return d;throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.LogicExpressionOrAnd,a);case "\x26\x26":if(!1===c)return c;d=yield k(b,a.right);if(f.isBoolean(d))return d;throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.LogicExpressionOrAnd,a);default:throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.LogicExpressionOrAnd,a);}else throw new g.ArcadeExecutionError(b,
g.ExecutionErrorCodes.LogicalExpressionOnlyBoolean,a);});return na.apply(this,arguments)}function L(b,a){return oa.apply(this,arguments)}function oa(){oa=m._asyncToGenerator(function*(b,a){const c=a.name.toLowerCase();if(null!=b.localScope&&void 0!==b.localScope[c]){a=b.localScope[c];if(!0===a.valueset)return a.value;if(null!==a.d)return a.d;a.d=k(b,a.node);b=yield a.d;a.value=b;a.valueset=!0;return b}if(void 0!==b.globalScope[c]){a=b.globalScope[c];if(!0===a.valueset)return a.value;if(null!==a.d)return a.d;
a.d=k(b,a.node);b=yield a.d;a.value=b;a.valueset=!0;return b}throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidIdentifier,a);});return oa.apply(this,arguments)}function fb(b,a){return pa.apply(this,arguments)}function pa(){pa=m._asyncToGenerator(function*(b,a){if("MemberExpression"===a.callee.type){var c=yield k(b,a.callee.object);if(!(c instanceof z))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.FuncionNotFound,a);const d=!1===a.callee.computed?a.callee.property.name:yield k(b,
a.callee.property);if(!c.hasGlobal(d))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.FuncionNotFound,a);c=yield c.global(d);if(!f.isFunctionParameter(c))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.CallNonFunction,a);return c.call(b,a)}if("Identifier"!==a.callee.type)throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.FuncionNotFound,a);if(null!=b.localScope&&void 0!==b.localScope[a.callee.name.toLowerCase()]){c=b.localScope[a.callee.name.toLowerCase()];if(f.isFunctionParameter(c.value))return c.value.call(b,
a);throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.CallNonFunction,a);}if(void 0!==b.globalScope[a.callee.name.toLowerCase()]){c=b.globalScope[a.callee.name.toLowerCase()];if(f.isFunctionParameter(c.value))return c.value.call(b,a);throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.CallNonFunction,a);}throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.FuncionNotFound,a);});return pa.apply(this,arguments)}function cb(b,a){return qa.apply(this,arguments)}function qa(){qa=m._asyncToGenerator(function*(b,
a){return a.value?a.value.cooked:""});return qa.apply(this,arguments)}function db(b,a){return ra.apply(this,arguments)}function ra(){ra=m._asyncToGenerator(function*(b,a){const c=[];for(var d=0;d<a.expressions.length;d++){var e=yield k(b,a.expressions[d]);c[d]=f.toString(e)}d="";e=0;for(const p of a.quasis)if(d+=p.value?p.value.cooked:"",!1===p.tail){if(c[e]){var h=c[e];var l=b,n=a;if(f.isFunctionParameter(h))throw new g.ArcadeExecutionError(l,g.ExecutionErrorCodes.NoFunctionInTemplateLiteral,n);
}else h="";d+=h;e++}return d});return ra.apply(this,arguments)}function Da(b,a,c,d){return sa.apply(this,arguments)}function sa(){sa=m._asyncToGenerator(function*(b,a,c,d){var e=yield k(b,a.arguments[c]);if(f.equalityTest(e,d))return k(b,a.arguments[c+1]);e=a.arguments.length-c;return 1===e?k(b,a.arguments[c]):2===e?null:3===e?k(b,a.arguments[c+2]):Da(b,a,c+2,d)});return sa.apply(this,arguments)}function Ea(b,a,c,d){return ta.apply(this,arguments)}function ta(){ta=m._asyncToGenerator(function*(b,
a,c,d){if(!0===d)return k(b,a.arguments[c+1]);if(3===a.arguments.length-c)return k(b,a.arguments[c+2]);d=yield k(b,a.arguments[c+2]);if(!1===f.isBoolean(d))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.ModuleExportNotFound,a.arguments[c+2]);return Ea(b,a,c+2,d)});return ta.apply(this,arguments)}function ua(b,a,c,d){return va.apply(this,arguments)}function va(){va=m._asyncToGenerator(function*(b,a,c,d){const e=b.body;if(c.length!==b.params.length)throw new g.ArcadeExecutionError(a,g.ExecutionErrorCodes.WrongNumberOfParameters,
null);for(let h=0;h<c.length;h++){const l=b.params[h];"Identifier"===l.type&&null!=a.localScope&&(a.localScope[l.name.toLowerCase()]={d:null,value:c[h],valueset:!0,node:null})}b=yield k(a,e);if(b instanceof f.ReturnResult)return b.value;if(b===f.breakResult)throw new g.ArcadeExecutionError(a,g.ExecutionErrorCodes.UnexpectedToken,d);if(b===f.continueResult)throw new g.ArcadeExecutionError(a,g.ExecutionErrorCodes.UnexpectedToken,d);return b instanceof f.ImplicitResult?b.value:b});return va.apply(this,
arguments)}function Fa(b,a){const c=new B;if(void 0===b||null===b)b={};if(void 0===a||null===a)a={};const d=new y({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});d.immutable=!1;c.textformatting={value:d,valueset:!0,node:null};for(const e in a)c[e]={value:new u.NativeFunction(a[e]),native:!0,valueset:!0,node:null};for(const e in b)c[e]=b[e]&&"esri.Graphic"===b[e].declaredClass?{value:ya.createFromGraphic(b[e]),valueset:!0,node:null}:{value:b[e],valueset:!0,
node:null};return c}function Ga(b){console.log(b)}function Ha(b){const a={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:v,standardFunctionAsync:A,evaluateIdentifier:L};for(let c=0;c<b.length;c++)b[c].registerFunctions(a);for(const c in a.functions)t[c]={value:new u.NativeFunction(a.functions[c]),valueset:!0,node:null},B.prototype[c]=t[c];for(b=0;b<a.signatures.length;b++)Ja.addFunctionDeclaration(a.signatures[b],"async")}function wa(){wa=m._asyncToGenerator(function*(b,a){let c=
a.spatialReference;if(null===c||void 0===c)c=new Aa({wkid:102100});let d=null;b.usesModules&&(d=new xa.ArcadeModuleLoader(new Map,b.loadedModules));const e=Fa(a.vars,a.customfunctions);a={spatialReference:c,services:a.services,exports:{},libraryResolver:d,abortSignal:void 0===a.abortSignal||null===a.abortSignal?{aborted:!1}:a.abortSignal,globalScope:e,console:a.console?a.console:Ga,lrucache:a.lrucache,interceptor:a.interceptor,localScope:null,depthCounter:{depth:1}};b=yield k(a,b);b instanceof f.ReturnResult&&
(b=b.value);b instanceof f.ImplicitResult&&(b=b.value);b===f.voidOperation&&(b=null);if(b===f.breakResult)throw new g.ArcadeExecutionError(a,g.ExecutionErrorCodes.IllegalResult,null);if(b===f.continueResult)throw new g.ArcadeExecutionError(a,g.ExecutionErrorCodes.IllegalResult,null);if(f.isFunctionParameter(b))throw new g.ArcadeExecutionError(a,g.ExecutionErrorCodes.IllegalResult,null);return b});return wa.apply(this,arguments)}let qb=function(b){function a(d,e){var h=b.call(this)||this;h.definition=
null;h.context=null;h.definition=d;h.context=e;return h}m._inheritsLoose(a,b);var c=a.prototype;c.createFunction=function(d){return(...e)=>{const h={spatialReference:this.context.spatialReference,console:this.context.console,lrucache:this.context.lrucache,exports:this.context.exports,libraryResolver:this.context.libraryResolver,interceptor:this.context.interceptor,localScope:{},depthCounter:{depth:d.depthCounter+1},globalScope:this.context.globalScope};if(64<h.depthCounter.depth)throw new g.ArcadeExecutionError(d,
g.ExecutionErrorCodes.MaximumCallDepth,null);return ua(this.definition,h,e,null)}};c.call=function(d,e){return A(d,e,(h,l,n)=>{h={spatialReference:d.spatialReference,services:d.services,console:d.console,libraryResolver:d.libraryResolver,exports:d.exports,lrucache:d.lrucache,interceptor:d.interceptor,localScope:{},abortSignal:d.abortSignal,globalScope:d.globalScope,depthCounter:{depth:d.depthCounter.depth+1}};if(64<h.depthCounter.depth)throw new g.ArcadeExecutionError(d,g.ExecutionErrorCodes.MaximumCallDepth,
e);return ua(this.definition,h,n,e)})};c.marshalledCall=function(d,e,h,l){var n=this;return l(d,e,function(){var p=m._asyncToGenerator(function*(q,r,w){q={spatialReference:d.spatialReference,globalScope:h.globalScope,depthCounter:{depth:d.depthCounter.depth+1},libraryResolver:d.libraryResolver,exports:d.exports,console:d.console,abortSignal:d.abortSignal,lrucache:d.lrucache,interceptor:d.interceptor,localScope:{}};w=w.map(E=>!f.isFunctionParameter(E)||E instanceof u.ScopeMarshalledFunction?E:u.wrapModuleScopedResponse(E,
d,l));return u.wrapModuleScopedResponse(yield ua(n.definition,q,w,e),h,l)});return function(q,r,w){return p.apply(this,arguments)}}())};return a}(u.ArcadeFunction),z=function(b){function a(d){return b.call(this,d)||this}m._inheritsLoose(a,b);var c=a.prototype;c.global=function(){var d=m._asyncToGenerator(function*(e){e=this.executingContext.globalScope[e.toLowerCase()];e.valueset||(e.value=yield k(this.executingContext,e.node),e.valueset=!0);if(f.isFunctionParameter(e.value)&&!(e.value instanceof
u.ScopeMarshalledFunction)){const h=new u.ScopeMarshalledFunction;h.fn=e.value;h.parameterEvaluator=A;h.context=this.executingContext;e.value=h}return e.value});return function(e){return d.apply(this,arguments)}}();c.setGlobal=function(d,e){if(f.isFunctionParameter(e))throw new g.ArcadeExecutionError(null,g.ExecutionErrorCodes.AssignModuleFunction,null);this.executingContext.globalScope[d.toLowerCase()]={value:e,valueset:!0,node:null}};c.hasGlobal=function(d){void 0===this.executingContext.exports[d]&&
(d=d.toLowerCase());return void 0!==this.executingContext.exports[d]?!0:!1};c.loadModule=function(){var d=m._asyncToGenerator(function*(e){let h=e.spatialReference;if(null===h||void 0===h)h=new Aa({wkid:102100});this.moduleScope=Fa({},e.customfunctions);this.executingContext={spatialReference:h,services:e.services,libraryResolver:new xa.ArcadeModuleLoader(e.libraryResolver._moduleSingletons,this.source.syntax.loadedModules),exports:{},abortSignal:void 0===e.abortSignal||null===e.abortSignal?{aborted:!1}:
e.abortSignal,globalScope:this.moduleScope,console:e.console?e.console:Ga,lrucache:e.lrucache,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}};yield k(this.executingContext,this.source.syntax)});return function(e){return d.apply(this,arguments)}}();return a}(Ia.ArcadeModule);const t={};La.registerFunctions(t,v);Pa.registerFunctions(t,v);Na.registerFunctions(t,v);F.registerFunctions(t,v);Oa.registerFunctions(t,v);Ma.registerFunctions({functions:t,compiled:!1,signatures:null,evaluateIdentifier:null,
mode:"async",standardFunction:v,standardFunctionAsync:A});t.iif=function(){var b=m._asyncToGenerator(function*(a,c){f.pcCheck(null===c.arguments?[]:c.arguments,3,3,a,c);const d=yield k(a,c.arguments[0]);if(!1===f.isBoolean(d))throw new g.ArcadeExecutionError(a,g.ExecutionErrorCodes.BooleanConditionRequired,c);return d?k(a,c.arguments[1]):k(a,c.arguments[2])});return function(a,c){return b.apply(this,arguments)}}();t.decode=function(){var b=m._asyncToGenerator(function*(a,c){if(2>c.arguments.length)throw new g.ArcadeExecutionError(a,
g.ExecutionErrorCodes.WrongNumberOfParameters,c);if(2===c.arguments.length)return k(a,c.arguments[1]);if(0===(c.arguments.length-1)%2)throw new g.ArcadeExecutionError(a,g.ExecutionErrorCodes.WrongNumberOfParameters,c);const d=yield k(a,c.arguments[0]);return Da(a,c,1,d)});return function(a,c){return b.apply(this,arguments)}}();t.when=function(){var b=m._asyncToGenerator(function*(a,c){if(3>c.arguments.length)throw new g.ArcadeExecutionError(a,g.ExecutionErrorCodes.WrongNumberOfParameters,c);if(0===
c.arguments.length%2)throw new g.ArcadeExecutionError(a,g.ExecutionErrorCodes.WrongNumberOfParameters,c);const d=yield k(a,c.arguments[0]);if(!1===f.isBoolean(d))throw new g.ArcadeExecutionError(a,g.ExecutionErrorCodes.BooleanConditionRequired,c.arguments[0]);return Ea(a,c,0,d)});return function(a,c){return b.apply(this,arguments)}}();const rb={fixSpatialReference:f.fixSpatialReference,parseArguments:G,standardFunction:v,standardFunctionAsync:A,evaluateIdentifier:L};for(const b in t)t[b]={value:new u.NativeFunction(t[b]),
valueset:!0,node:null};const B=function(){};B.prototype=t;B.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null};B.prototype.pi={value:Math.PI,valueset:!0,node:null};Ha([Ka.ArrayFunctions]);C.executeScript=function(b,a){return wa.apply(this,arguments)};C.extend=Ha;C.functionHelper=rb;Object.defineProperties(C,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});