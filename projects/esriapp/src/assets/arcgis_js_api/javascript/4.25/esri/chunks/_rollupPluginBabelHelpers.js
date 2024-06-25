// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports"],function(m){function n(a){function d(f,e){try{var h=a[f](e),k=h.value,q=k instanceof w;Promise.resolve(q?k.v:k).then(function(l){if(q){var x="return"===f?"return":"next";if(!k.k||l.done)return d(x,l);l=a[x](l).value}b(h.done?"return":"normal",l)},function(l){d("throw",l)})}catch(l){b("throw",l)}}function b(f,e){switch(f){case "return":c.resolve({value:e,done:!0});break;case "throw":c.reject(e);break;default:c.resolve({value:e,done:!1})}(c=c.next)?d(c.key,c.arg):g=null}var c,g;this._invoke=
function(f,e){return new Promise(function(h,k){h={key:f,arg:e,resolve:h,reject:k,next:null};g?g=g.next=h:(c=g=h,d(f,e))})};"function"!=typeof a.return&&(this.return=void 0)}function w(a,d){this.v=a;this.k=d}function r(a){function d(b){if(Object(b)!==b)return Promise.reject(new TypeError(b+" is not an object."));var c=b.done;return Promise.resolve(b.value).then(function(g){return{value:g,done:c}})}return r=function(b){this.s=b;this.n=b.next},r.prototype={s:null,n:null,next:function(){return d(this.n.apply(this.s,
arguments))},return:function(b){var c=this.s.return;return void 0===c?Promise.resolve({value:b,done:!0}):d(c.apply(this.s,arguments))},throw:function(b){var c=this.s.return;return void 0===c?Promise.reject(b):d(c.apply(this.s,arguments))}},new r(a)}function y(a,d,b,c,g,f,e){try{var h=a[f](e),k=h.value}catch(q){b(q);return}h.done?d(k):Promise.resolve(k).then(c,g)}function z(a,d){for(var b=0;b<d.length;b++){var c=d[b];c.enumerable=c.enumerable||!1;c.configurable=!0;"value"in c&&(c.writable=!0);Object.defineProperty(a,
c.key,c)}}function t(a){t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(d){return d.__proto__||Object.getPrototypeOf(d)};return t(a)}function p(a,d){p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(b,c){b.__proto__=c;return b};return p(a,d)}function A(){if("undefined"===typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}
function u(a,d,b){u=A()?Reflect.construct.bind():function(c,g,f){var e=[null];e.push.apply(e,g);c=new (Function.bind.apply(c,e));f&&p(c,f.prototype);return c};return u.apply(null,arguments)}function v(a){var d="function"===typeof Map?new Map:void 0;v=function(b){function c(){return u(b,arguments,t(this).constructor)}if(null===b||-1===Function.toString.call(b).indexOf("[native code]"))return b;if("function"!==typeof b)throw new TypeError("Super expression must either be null or a function");if("undefined"!==
typeof d){if(d.has(b))return d.get(b);d.set(b,c)}c.prototype=Object.create(b.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}});return p(c,b)};return v(a)}n.prototype["function"==typeof Symbol&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this};n.prototype.next=function(a){return this._invoke("next",a)};n.prototype.throw=function(a){return this._invoke("throw",a)};n.prototype.return=function(a){return this._invoke("return",a)};m._assertThisInitialized=function(a){if(void 0===
a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a};m._asyncIterator=function(a){var d,b,c,g=2;for("undefined"!=typeof Symbol&&(b=Symbol.asyncIterator,c=Symbol.iterator);g--;){if(b&&null!=(d=a[b]))return d.call(a);if(c&&null!=(d=a[c]))return new r(d.call(a));b="@@asyncIterator";c="@@iterator"}throw new TypeError("Object is not async iterable");};m._asyncToGenerator=function(a){return function(){var d=this,b=arguments;return new Promise(function(c,g){function f(k){y(h,
c,g,f,e,"next",k)}function e(k){y(h,c,g,f,e,"throw",k)}var h=a.apply(d,b);f(void 0)})}};m._awaitAsyncGenerator=function(a){return new w(a,0)};m._createClass=function(a,d,b){d&&z(a.prototype,d);b&&z(a,b);Object.defineProperty(a,"prototype",{writable:!1});return a};m._inheritsLoose=function(a,d){a.prototype=Object.create(d.prototype);a.prototype.constructor=a;p(a,d)};m._wrapAsyncGenerator=function(a){return function(){return new n(a.apply(this,arguments))}};m._wrapNativeSuper=v});