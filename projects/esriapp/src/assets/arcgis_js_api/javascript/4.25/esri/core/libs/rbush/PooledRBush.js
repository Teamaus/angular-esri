// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../arrayUtils ../../maybe ../../PooledArray ../../../chunks/quickselect".split(" "),function(C,D,E,F,q,O){function t(g,e){u(g,0,g.children.length,e,g)}function u(g,e,a,b,c){c||(c=new x([]));c.minX=Infinity;c.minY=Infinity;c.maxX=-Infinity;c.maxY=-Infinity;for(let d=e,f;d<a;d++)f=g.children[d],v(c,g.leaf?b(f):f);return c}function v(g,e){g.minX=Math.min(g.minX,e.minX);g.minY=Math.min(g.minY,e.minY);g.maxX=Math.max(g.maxX,e.maxX);g.maxY=Math.max(g.maxY,
e.maxY)}function K(g,e){return g.minX-e.minX}function L(g,e){return g.minY-e.minY}function G(g){return(g.maxX-g.minX)*(g.maxY-g.minY)}function y(g){return g.maxX-g.minX+(g.maxY-g.minY)}function H(g,e){return g.minX<=e.minX&&g.minY<=e.minY&&e.maxX<=g.maxX&&e.maxY<=g.maxY}function z(g,e){return e.minX<=g.maxX&&e.minY<=g.maxY&&e.maxX>=g.minX&&e.maxY>=g.minY}function M(g,e,a,b,c){for(e=[e,a];e.length;){a=F.assumeNonNull(e.pop());const d=F.assumeNonNull(e.pop());if(a-d<=b)continue;const f=d+Math.ceil((a-
d)/b/2)*b;O.quickselect(g,f,d,a,c);e.push(d,f,f,a)}}let P=function(){function g(a=9,b){this._compareMinX=K;this._compareMinY=L;this._toBBox=c=>c;this._maxEntries=Math.max(4,a||9);this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries));b&&("function"===typeof b?this._toBBox=b:this._initFormat(b));this.clear()}var e=g.prototype;e.destroy=function(){this.clear();r.prune();A.prune();n.prune();B.prune()};e.all=function(a){this._all(this._data,a)};e.search=function(a,b){let c=this._data;const d=this._toBBox;
if(z(a,c))for(r.clear();c;){for(let f=0,h=c.children.length;f<h;f++){const k=c.children[f],l=c.leaf?d(k):k;z(a,l)&&(c.leaf?b(k):H(a,l)?this._all(k,b):r.push(k))}c=r.pop()}};e.collides=function(a){let b=this._data;const c=this._toBBox;if(!z(a,b))return!1;for(r.clear();b;){for(let d=0,f=b.children.length;d<f;d++){const h=b.children[d],k=b.leaf?c(h):h;if(z(a,k)){if(b.leaf||H(a,k))return!0;r.push(h)}}b=r.pop()}return!1};e.load=function(a){if(!a.length)return this;if(a.length<this._minEntries){for(let b=
0,c=a.length;b<c;b++)this.insert(a[b]);return this}a=this._build(a.slice(0,a.length),0,a.length-1,0);if(this._data.children.length)if(this._data.height===a.height)this._splitRoot(this._data,a);else{if(this._data.height<a.height){const b=this._data;this._data=a;a=b}this._insert(a,this._data.height-a.height-1,!0)}else this._data=a;return this};e.insert=function(a){a&&this._insert(a,this._data.height-1);return this};e.clear=function(){this._data=new x([]);return this};e.remove=function(a){if(!a)return this;
let b=this._data,c=null,d=0,f=!1,h;const k=this._toBBox(a);n.clear();for(B.clear();b||0<n.length;){b||(b=F.assumeNonNull(n.pop()),c=n.data[n.length-1],d=B.pop()??0,f=!0);if(b.leaf&&(h=E.indexOf(b.children,a,b.children.length,b.indexHint),-1!==h)){b.children.splice(h,1);n.push(b);this._condense(n);break}f||b.leaf||!H(b,k)?c?(d++,b=c.children[d],f=!1):b=null:(n.push(b),B.push(d),d=0,c=b,b=b.children[0])}return this};e.toJSON=function(){return this._data};e.fromJSON=function(a){this._data=a;return this};
e._all=function(a,b){for(A.clear();a;){if(!0===a.leaf)for(const c of a.children)b(c);else A.pushArray(a.children);a=A.pop()??null}};e._build=function(a,b,c,d){var f=c-b+1,h=this._maxEntries;if(f<=h)return a=new x(a.slice(b,c+1)),t(a,this._toBBox),a;d||(d=Math.ceil(Math.log(f)/Math.log(h)),h=Math.ceil(f/h**(d-1)));const k=new I([]);k.height=d;f=Math.ceil(f/h);h=f*Math.ceil(Math.sqrt(h));for(M(a,b,c,h,this._compareMinX);b<=c;b+=h){const l=Math.min(b+h-1,c);M(a,b,l,f,this._compareMinY);for(let m=b;m<=
l;m+=f)k.children.push(this._build(a,m,Math.min(m+f-1,l),d-1))}t(k,this._toBBox);return k};e._chooseSubtree=function(a,b,c,d){for(;;){d.push(b);if(!0===b.leaf||d.length-1===c)break;let f=Infinity,h=Infinity,k=void 0;for(let l=0,m=b.children.length;l<m;l++){const p=b.children[l],w=G(p),J=(Math.max(p.maxX,a.maxX)-Math.min(p.minX,a.minX))*(Math.max(p.maxY,a.maxY)-Math.min(p.minY,a.minY))-w;J<h?(h=J,f=w<f?w:f,k=p):J===h&&w<f&&(f=w,k=p)}b=k||b.children[0]}return b};e._insert=function(a,b,c){var d=this._toBBox;
c=c?a:d(a);n.clear();d=this._chooseSubtree(c,this._data,b,n);d.children.push(a);for(v(d,c);0<=b;)if(n.data[b].children.length>this._maxEntries)this._split(n,b),b--;else break;this._adjustParentBBoxes(c,n,b)};e._split=function(a,b){const c=a.data[b];var d=c.children.length;const f=this._minEntries;this._chooseSplitAxis(c,f,d);(d=this._chooseSplitIndex(c,f,d))?(d=c.children.splice(d,c.children.length-d),d=c.leaf?new x(d):new I(d),d.height=c.height,t(c,this._toBBox),t(d,this._toBBox),b?a.data[b-1].children.push(d):
this._splitRoot(c,d)):console.log("  Error: assertion failed at PooledRBush._split: no valid split index")};e._splitRoot=function(a,b){this._data=new I([a,b]);this._data.height=a.height+1;t(this._data,this._toBBox)};e._chooseSplitIndex=function(a,b,c){let d,f,h=void 0;d=f=Infinity;for(let l=b;l<=c-b;l++){var k=u(a,0,l,this._toBBox);const m=u(a,l,c,this._toBBox),p=Math.max(0,Math.min(k.maxX,m.maxX)-Math.max(k.minX,m.minX))*Math.max(0,Math.min(k.maxY,m.maxY)-Math.max(k.minY,m.minY));k=G(k)+G(m);p<d?
(d=p,h=l,f=k<f?k:f):p===d&&k<f&&(f=k,h=l)}return h};e._chooseSplitAxis=function(a,b,c){const d=a.leaf?this._compareMinX:K,f=a.leaf?this._compareMinY:L,h=this._allDistMargin(a,b,c,d);b=this._allDistMargin(a,b,c,f);h<b&&a.children.sort(d)};e._allDistMargin=function(a,b,c,d){a.children.sort(d);d=this._toBBox;var f=u(a,0,b,d);const h=u(a,c-b,c,d);let k=y(f)+y(h);for(let l=b;l<c-b;l++){const m=a.children[l];v(f,a.leaf?d(m):m);k+=y(f)}for(c=c-b-1;c>=b;c--)f=a.children[c],v(h,a.leaf?d(f):f),k+=y(h);return k};
e._adjustParentBBoxes=function(a,b,c){for(;0<=c;c--)v(b.data[c],a)};e._condense=function(a){for(let b=a.length-1;0<=b;b--){const c=a.data[b];if(0===c.children.length)if(0<b){const d=a.data[b-1],f=d.children;f.splice(E.indexOf(f,c,f.length,d.indexHint),1)}else this.clear();else t(c,this._toBBox)}};e._initFormat=function(a){const b=["return a"," - b",";"];this._compareMinX=new Function("a","b",b.join(a[0]));this._compareMinY=new Function("a","b",b.join(a[1]));this._toBBox=new Function("a","return {minX: a"+
a[0]+", minY: a"+a[1]+", maxX: a"+a[2]+", maxY: a"+a[3]+"};")};return g}();const r=new q,A=new q,n=new q,B=new q({deallocator:void 0});q=function(){this.minY=this.minX=Infinity;this.maxY=this.maxX=-Infinity};let N=function(g){function e(){var a=g.apply(this,arguments)||this;a.height=1;a.indexHint=new E.PositionHint;return a}D._inheritsLoose(e,g);return e}(q),x=function(g){function e(a){var b=g.call(this)||this;b.children=a;b.leaf=!0;return b}D._inheritsLoose(e,g);return e}(N),I=function(g){function e(a){var b=
g.call(this)||this;b.children=a;b.leaf=!1;return b}D._inheritsLoose(e,g);return e}(N);C.BBox=q;C.PooledRBush=P;Object.defineProperties(C,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});