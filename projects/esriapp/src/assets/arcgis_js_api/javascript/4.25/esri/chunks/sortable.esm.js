// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports"],function(Ab){function fb(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}));c.push.apply(c,d)}return c}function S(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?fb(Object(c),!0).forEach(function(d){var e=c[d];d in a?Object.defineProperty(a,d,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[d]=e}):Object.getOwnPropertyDescriptors?
Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):fb(Object(c)).forEach(function(d){Object.defineProperty(a,d,Object.getOwnPropertyDescriptor(c,d))})}return a}function Qa(a){"@babel/helpers - typeof";Qa="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(b){return typeof b}:function(b){return b&&"function"===typeof Symbol&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b};return Qa(a)}function X(){X=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=
arguments[b],d;for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a};return X.apply(this,arguments)}function Bb(a,b){if(null==a)return{};if(null==a)var c={};else{c={};var d=Object.keys(a),e;for(e=0;e<d.length;e++){var f=d[e];0<=b.indexOf(f)||(c[f]=a[f])}}if(Object.getOwnPropertySymbols)for(e=Object.getOwnPropertySymbols(a),f=0;f<e.length;f++)d=e[f],0<=b.indexOf(d)||Object.prototype.propertyIsEnumerable.call(a,d)&&(c[d]=a[d]);return c}function Y(a){if("undefined"!==typeof window&&
window.navigator)return!!navigator.userAgent.match(a)}function v(a,b,c){a.addEventListener(b,c,!Z&&gb)}function u(a,b,c){a.removeEventListener(b,c,!Z&&gb)}function Ba(a,b){if(b){"\x3e"===b[0]&&(b=b.substring(1));if(a)try{if(a.matches)return a.matches(b);if(a.msMatchesSelector)return a.msMatchesSelector(b);if(a.webkitMatchesSelector)return a.webkitMatchesSelector(b)}catch(c){}return!1}}function T(a,b,c,d){if(a){c=c||document;do{if(null!=b&&("\x3e"===b[0]?a.parentNode===c&&Ba(a,b):Ba(a,b))||d&&a===
c)return a;if(a===c)break}while(a=a.host&&a!==document&&a.host.nodeType?a.host:a.parentNode)}return null}function L(a,b,c){if(a&&b)if(a.classList)a.classList[c?"add":"remove"](b);else{var d=(" "+a.className+" ").replace(hb," ").replace(" "+b+" "," ");a.className=(d+(c?" "+b:"")).replace(hb," ")}}function p(a,b,c){var d=a&&a.style;if(d){if(void 0===c)return document.defaultView&&document.defaultView.getComputedStyle?c=document.defaultView.getComputedStyle(a,""):a.currentStyle&&(c=a.currentStyle),void 0===
b?c:c[b];b in d||-1!==b.indexOf("webkit")||(b="-webkit-"+b);d[b]=c+("string"===typeof c?"":"px")}}function ka(a,b){var c="";if("string"===typeof a)c=a;else{do{var d=p(a,"transform");d&&"none"!==d&&(c=d+" "+c)}while(!b&&(a=a.parentNode))}return(a=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix)&&new a(c)}function ib(a,b,c){if(a){a=a.getElementsByTagName(b);b=0;var d=a.length;if(c)for(;b<d;b++)c(a[b],b);return a}return[]}function aa(){var a=document.scrollingElement;return a?
a:document.documentElement}function D(a,b,c,d,e){if(a.getBoundingClientRect||a===window){if(a!==window&&a.parentNode&&a!==aa()){var f=a.getBoundingClientRect();var g=f.top;var k=f.left;var l=f.bottom;var m=f.right;var n=f.height;var t=f.width}else k=g=0,l=window.innerHeight,m=window.innerWidth,n=window.innerHeight,t=window.innerWidth;if((b||c)&&a!==window&&(e=e||a.parentNode,!Z)){do if(e&&e.getBoundingClientRect&&("none"!==p(e,"transform")||c&&"static"!==p(e,"position"))){l=e.getBoundingClientRect();
g-=l.top+parseInt(p(e,"border-top-width"));k-=l.left+parseInt(p(e,"border-left-width"));l=g+f.height;m=k+f.width;break}while(e=e.parentNode)}d&&a!==window&&(d=(a=ka(e||a))&&a.a,e=a&&a.d,a&&(g/=e,k/=d,t/=d,n/=e,l=g+n,m=k+t));return{top:g,left:k,bottom:l,right:m,width:t,height:n}}}function jb(a,b,c){var d=ca(a,!0);for(a=D(a)[b];d;){b=D(d)[c];var e=void 0;e="top"===c||"left"===c?a>=b:a<=b;if(!e)return d;if(d===aa())break;d=ca(d,!1)}return!1}function la(a,b,c,d){for(var e=0,f=0,g=a.children;f<g.length;){if("none"!==
g[f].style.display&&g[f]!==q.ghost&&(d||g[f]!==q.dragged)&&T(g[f],c.draggable,a,!1)){if(e===b)return g[f];e++}f++}return null}function Ra(a,b){for(a=a.lastElementChild;a&&(a===q.ghost||"none"===p(a,"display")||b&&!Ba(a,b));)a=a.previousElementSibling;return a||null}function O(a,b){var c=0;if(!a||!a.parentNode)return-1;for(;a=a.previousElementSibling;)"TEMPLATE"===a.nodeName.toUpperCase()||a===q.clone||b&&!Ba(a,b)||c++;return c}function kb(a){var b=0,c=0,d=aa();if(a){do{var e=ka(a),f=e.d;b+=a.scrollLeft*
e.a;c+=a.scrollTop*f}while(a!==d&&(a=a.parentNode))}return[b,c]}function ca(a,b){if(!a||!a.getBoundingClientRect)return aa();var c=!1;do if(a.clientWidth<a.scrollWidth||a.clientHeight<a.scrollHeight){var d=p(a);if(a.clientWidth<a.scrollWidth&&("auto"==d.overflowX||"scroll"==d.overflowX)||a.clientHeight<a.scrollHeight&&("auto"==d.overflowY||"scroll"==d.overflowY)){if(!a.getBoundingClientRect||a===document.body)break;if(c||b)return a;c=!0}}while(a=a.parentNode);return aa()}function Sa(a,b){return Math.round(a.top)===
Math.round(b.top)&&Math.round(a.left)===Math.round(b.left)&&Math.round(a.height)===Math.round(b.height)&&Math.round(a.width)===Math.round(b.width)}function lb(a,b){return function(){if(!ra){var c=arguments;1===c.length?a.call(this,c[0]):a.apply(this,c);ra=setTimeout(function(){ra=void 0},b)}}}function mb(a,b,c){a.scrollLeft+=b;a.scrollTop+=c}function nb(a){var b=window.Polymer,c=window.jQuery||window.Zepto;return b&&b.dom?b.dom(a).cloneNode(!0):c?c(a).clone(!0)[0]:a.cloneNode(!0)}function Cb(){var a=
[],b;return{captureAnimationState:function(){a=[];this.options.animation&&[].slice.call(this.el.children).forEach(function(c){if("none"!==p(c,"display")&&c!==q.ghost){a.push({target:c,rect:D(c)});var d=S({},a[a.length-1].rect);if(c.thisAnimationDuration){var e=ka(c,!0);e&&(d.top-=e.f,d.left-=e.e)}c.fromRect=d}})},addAnimationState:function(c){a.push(c)},removeAnimationState:function(c){var d=a,e=d.splice;a:{var f=a;c={target:c};for(var g in f)if(f.hasOwnProperty(g))for(var k in c)if(c.hasOwnProperty(k)&&
c[k]===f[g][k]){f=Number(g);break a}f=-1}e.call(d,f,1)},animateAll:function(c){var d=this;if(this.options.animation){var e=!1,f=0;a.forEach(function(g){var k=0,l=g.target,m=l.fromRect,n=D(l),t=l.prevFromRect,E=l.prevToRect;g=g.rect;var B=ka(l,!0);B&&(n.top-=B.f,n.left-=B.e);l.toRect=n;l.thisAnimationDuration&&Sa(t,n)&&!Sa(m,n)&&(g.top-n.top)/(g.left-n.left)===(m.top-n.top)/(m.left-n.left)&&(k=Math.sqrt(Math.pow(t.top-g.top,2)+Math.pow(t.left-g.left,2))/Math.sqrt(Math.pow(t.top-E.top,2)+Math.pow(t.left-
E.left,2))*d.options.animation);Sa(n,m)||(l.prevFromRect=m,l.prevToRect=n,k||(k=d.options.animation),d.animate(l,g,n,k));k&&(e=!0,f=Math.max(f,k),clearTimeout(l.animationResetTimer),l.animationResetTimer=setTimeout(function(){l.animationTime=0;l.prevFromRect=null;l.fromRect=null;l.prevToRect=null;l.thisAnimationDuration=null},k),l.thisAnimationDuration=k)});clearTimeout(b);e?b=setTimeout(function(){"function"===typeof c&&c()},f):"function"===typeof c&&c();a=[]}else clearTimeout(b),"function"===typeof c&&
c()},animate:function(c,d,e,f){if(f){p(c,"transition","");p(c,"transform","");var g=ka(this.el),k=(d.left-e.left)/(g&&g.a||1);d=(d.top-e.top)/(g&&g.d||1);c.animatingX=!!k;c.animatingY=!!d;p(c,"transform","translate3d("+k+"px,"+d+"px,0)");this.forRepaintDummy=c.offsetWidth;p(c,"transition","transform "+f+"ms"+(this.options.easing?" "+this.options.easing:""));p(c,"transform","translate3d(0,0,0)");"number"===typeof c.animated&&clearTimeout(c.animated);c.animated=setTimeout(function(){p(c,"transition",
"");p(c,"transform","");c.animated=!1;c.animatingX=!1;c.animatingY=!1},f)}}}}function I(a){var b=S({putSortable:F,cloneEl:z,targetEl:h,rootEl:y,oldIndex:ma,oldDraggableIndex:sa,newIndex:M,newDraggableIndex:da},a);a=b.sortable;var c=b.rootEl,d=b.name,e=b.targetEl,f=b.cloneEl,g=b.toEl,k=b.fromEl,l=b.oldIndex,m=b.newIndex,n=b.oldDraggableIndex,t=b.newDraggableIndex,E=b.originalEvent,B=b.putSortable,G=b.extraEventProperties;if(a=a||c&&c[N]){var x=a.options,P="on"+d.charAt(0).toUpperCase()+d.substr(1);
!window.CustomEvent||Z||ta?(b=document.createEvent("Event"),b.initEvent(d,!0,!0)):b=new CustomEvent(d,{bubbles:!0,cancelable:!0});b.to=g||c;b.from=k||c;b.item=e||c;b.clone=f;b.oldIndex=l;b.newIndex=m;b.oldDraggableIndex=n;b.newDraggableIndex=t;b.originalEvent=E;b.pullMode=B?B.lastPutMode:void 0;d=S(S({},G),ua.getEventProperties(d,a));for(var Q in d)b[Q]=d[Q];c&&c.dispatchEvent(b);x[P]&&x[P].call(a,b)}}function q(a,b){if(!a||!a.nodeType||1!==a.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(a));
this.el=a;this.options=b=X({},b);a[N]=this;var c={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(a.nodeName)?"\x3eli":"\x3e*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return ob(a,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(f,g){f.setData("Text",g.textContent)},dropBubble:!1,
dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==q.supportPointer&&"PointerEvent"in window&&!va,emptyInsertThreshold:5};ua.initializePlugins(this,a,c);for(var d in c)d in b||(b[d]=c[d]);pb(b);for(var e in this)"_"===e.charAt(0)&&"function"===typeof this[e]&&
(this[e]=this[e].bind(this));if(this.nativeDraggable=b.forceFallback?!1:Db)this.options.touchStartThreshold=1;b.supportPointer?v(a,"pointerdown",this._onTapStart):(v(a,"mousedown",this._onTapStart),v(a,"touchstart",this._onTapStart));this.nativeDraggable&&(v(a,"dragover",this),v(a,"dragenter",this));Ca.push(this.el);b.store&&b.store.get&&this.sort(b.store.get(this)||[]);X(this,Cb())}function Da(a,b,c,d,e,f,g,k){var l=a[N],m=l.options.onMove,n;if(!window.CustomEvent||Z||ta){var t=document.createEvent("Event");
t.initEvent("move",!0,!0)}else t=new CustomEvent("move",{bubbles:!0,cancelable:!0});t.to=b;t.from=a;t.dragged=c;t.draggedRect=d;t.related=e||b;t.relatedRect=f||D(b);t.willInsertAfter=k;t.originalEvent=g;a.dispatchEvent(t);m&&(n=m.call(l,t,g));return n}function Ta(a){a.draggable=!1}function Eb(){Ua=!1}function Fb(a,b,c){c=D(la(c.el,0,c.options,!0));return b?a.clientX<c.left-10||a.clientY<c.top&&a.clientX<c.right:a.clientY<c.top-10||a.clientY<c.bottom&&a.clientX<c.left}function Gb(a,b,c){c=D(Ra(c.el,
c.options.draggable));return b?a.clientX>c.right+10||a.clientX<=c.right&&a.clientY>c.bottom&&a.clientX>=c.left:a.clientX>c.right&&a.clientY>c.top||a.clientX<=c.right&&a.clientY>c.bottom+10}function Hb(a,b,c,d,e,f,g,k){a=d?a.clientY:a.clientX;var l=d?c.height:c.width,m=d?c.top:c.left;c=d?c.bottom:c.right;d=!1;if(!g)if(k&&Ea<l*e)if(!wa&&(1===xa?a>m+l*f/2:a<c-l*f/2)&&(wa=!0),wa)d=!0;else{if(1===xa?a<m+Ea:a>c-Ea)return-xa}else if(a>m+l*(1-e)/2&&a<c-l*(1-e)/2)return b=O(h)<O(b)?1:-1,b;if(d||g)if(a<m+l*
f/2||a>c-l*f/2)return a>m+l/2?1:-1;return 0}function Ib(a){Fa.length=0;a=a.getElementsByTagName("input");for(var b=a.length;b--;){var c=a[b];c.checked&&Fa.push(c)}}function Ga(a){return setTimeout(a,0)}function Ha(){C.forEach(function(a){clearInterval(a.pid)});C=[]}function Va(){}function Wa(){}var Z=Y(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),ta=Y(/Edge/i),qb=Y(/firefox/i),va=Y(/safari/i)&&!Y(/chrome/i)&&!Y(/android/i),ya=Y(/iP(ad|od|hone)/i),rb=Y(/chrome/i)&&Y(/android/i),gb={capture:!1,
passive:!1},hb=/\s+/g,ra,N="Sortable"+(new Date).getTime(),na=[],Xa={initializeByDefault:!0},ua={mount:function(a){for(var b in Xa)!Xa.hasOwnProperty(b)||b in a||(a[b]=Xa[b]);na.forEach(function(c){if(c.pluginName===a.pluginName)throw"Sortable: Cannot mount plugin ".concat(a.pluginName," more than once");});na.push(a)},pluginEvent:function(a,b,c){var d=this;this.eventCanceled=!1;c.cancel=function(){d.eventCanceled=!0};var e=a+"Global";na.forEach(function(f){if(b[f.pluginName]){if(b[f.pluginName][e])b[f.pluginName][e](S({sortable:b},
c));if(b.options[f.pluginName]&&b[f.pluginName][a])b[f.pluginName][a](S({sortable:b},c))}})},initializePlugins:function(a,b,c,d){na.forEach(function(f){var g=f.pluginName;if(a.options[g]||f.initializeByDefault)f=new f(a,b,a.options),f.sortable=a,f.options=a.options,a[g]=f,X(c,f.defaults)});for(var e in a.options)a.options.hasOwnProperty(e)&&(d=this.modifyOption(a,e,a.options[e]),"undefined"!==typeof d&&(a.options[e]=d))},getEventProperties:function(a,b){var c={};na.forEach(function(d){"function"===
typeof d.eventProperties&&X(c,d.eventProperties.call(b[d.pluginName],a))});return c},modifyOption:function(a,b,c){var d;na.forEach(function(e){a[e.pluginName]&&e.optionListeners&&"function"===typeof e.optionListeners[b]&&(d=e.optionListeners[b].call(a[e.pluginName],c))});return d}},Jb=["evt"],K=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},d=c.evt;c=Bb(c,Jb);ua.pluginEvent.bind(q)(a,b,S({dragEl:h,parentEl:A,ghostEl:r,rootEl:y,nextEl:ha,lastDownEl:Ia,cloneEl:z,cloneHidden:ea,
dragStarted:za,putSortable:F,activeSortable:q.active,originalEvent:d,oldIndex:ma,oldDraggableIndex:sa,newIndex:M,newDraggableIndex:da,hideGhostForTarget:sb,unhideGhostForTarget:tb,cloneNowHidden:function(){ea=!0},cloneNowShown:function(){ea=!1},dispatchSortableEvent:function(e){I({sortable:b,name:e,originalEvent:d})}},c))},h,A,r,y,ha,Ia,z,ea,ma,M,sa,da,Ja,F,oa=!1,Ka=!1,Ca=[],ia,R,Ya,Za,ub,vb,za,pa,xa,wa=!1,La=!1,Ea,H,$a=[],Ua=!1,Fa=[],Ma="undefined"!==typeof document,wb=ta||Z?"cssFloat":"float",Db=
Ma&&!rb&&!ya&&"draggable"in document.createElement("div"),xb=function(){if(Ma){if(Z)return!1;var a=document.createElement("x");a.style.cssText="pointer-events:auto";return"auto"===a.style.pointerEvents}}(),ob=function(a,b){var c=p(a),d=parseInt(c.width)-parseInt(c.paddingLeft)-parseInt(c.paddingRight)-parseInt(c.borderLeftWidth)-parseInt(c.borderRightWidth),e=la(a,0,b);a=la(a,1,b);var f=e&&p(e);b=a&&p(a);var g=f&&parseInt(f.marginLeft)+parseInt(f.marginRight)+D(e).width,k=b&&parseInt(b.marginLeft)+
parseInt(b.marginRight)+D(a).width;return"flex"===c.display?"column"===c.flexDirection||"column-reverse"===c.flexDirection?"vertical":"horizontal":"grid"===c.display?1>=c.gridTemplateColumns.split(" ").length?"vertical":"horizontal":e&&f["float"]&&"none"!==f["float"]?(c="left"===f["float"]?"left":"right",!a||"both"!==b.clear&&b.clear!==c?"horizontal":"vertical"):e&&("block"===f.display||"flex"===f.display||"table"===f.display||"grid"===f.display||g>=d&&"none"===c[wb]||a&&"none"===c[wb]&&g+k>d)?"vertical":
"horizontal"},Kb=function(a,b,c){var d=c?a.left:a.top,e=c?a.right:a.bottom;a=c?a.width:a.height;var f=c?b.left:b.top,g=c?b.right:b.bottom;b=c?b.width:b.height;return d===f||e===g||d+a/2===f+b/2},Lb=function(a,b){var c;Ca.some(function(d){var e=d[N].options.emptyInsertThreshold;if(e&&!Ra(d)){var f=D(d),g=b>=f.top-e&&b<=f.bottom+e;if(a>=f.left-e&&a<=f.right+e&&g)return c=d}});return c},pb=function(a){function b(e,f){return function(g,k,l,m){var n=g.options.group.name&&k.options.group.name&&g.options.group.name===
k.options.group.name;if(null==e&&(f||n))return!0;if(null==e||!1===e)return!1;if(f&&"clone"===e)return e;if("function"===typeof e)return b(e(g,k,l,m),f)(g,k,l,m);g=(f?g:k).options.group.name;return!0===e||"string"===typeof e&&e===g||e.join&&-1<e.indexOf(g)}}var c={},d=a.group;d&&"object"==Qa(d)||(d={name:d});c.name=d.name;c.checkPull=b(d.pull,!0);c.checkPut=b(d.put);c.revertClone=d.revertClone;a.group=c},sb=function(){!xb&&r&&p(r,"display","none")},tb=function(){!xb&&r&&p(r,"display","")};Ma&&!rb&&
document.addEventListener("click",function(a){if(Ka)return a.preventDefault(),a.stopPropagation&&a.stopPropagation(),a.stopImmediatePropagation&&a.stopImmediatePropagation(),Ka=!1},!0);var ja=function(a){if(h){a=a.touches?a.touches[0]:a;var b=Lb(a.clientX,a.clientY);if(b){var c={},d;for(d in a)a.hasOwnProperty(d)&&(c[d]=a[d]);c.target=c.rootEl=b;c.preventDefault=void 0;c.stopPropagation=void 0;b[N]._onDragOver(c)}}},Mb=function(a){h&&h.parentNode[N]._isOutsideThisEl(a.target)};q.prototype={constructor:q,
_isOutsideThisEl:function(a){this.el.contains(a)||a===this.el||(pa=null)},_getDirection:function(a,b){return"function"===typeof this.options.direction?this.options.direction.call(this,a,b,h):this.options.direction},_onTapStart:function(a){if(a.cancelable){var b=this,c=this.el,d=this.options,e=d.preventOnFilter,f=a.type,g=a.touches&&a.touches[0]||a.pointerType&&"touch"===a.pointerType&&a,k=(g||a).target,l=a.target.shadowRoot&&(a.path&&a.path[0]||a.composedPath&&a.composedPath()[0])||k,m=d.filter;Ib(c);
if(!(h||/mousedown|pointerdown/.test(f)&&0!==a.button||d.disabled||l.isContentEditable||!this.nativeDraggable&&va&&k&&"SELECT"===k.tagName.toUpperCase()||(k=T(k,d.draggable,c,!1),k&&k.animated||Ia===k))){ma=O(k);sa=O(k,d.draggable);if("function"===typeof m){if(m.call(this,a,k,this)){I({sortable:b,rootEl:l,name:"filter",targetEl:k,toEl:c,fromEl:c});K("filter",b,{evt:a});e&&a.cancelable&&a.preventDefault();return}}else if(m&&(m=m.split(",").some(function(n){if(n=T(l,n.trim(),c,!1))return I({sortable:b,
rootEl:n,name:"filter",targetEl:k,fromEl:c,toEl:c}),K("filter",b,{evt:a}),!0}))){e&&a.cancelable&&a.preventDefault();return}d.handle&&!T(l,d.handle,c,!1)||this._prepareDragStart(a,g,k)}}},_prepareDragStart:function(a,b,c){var d=this,e=d.el,f=d.options,g=e.ownerDocument;if(c&&!h&&c.parentNode===e){var k=D(c);y=e;h=c;A=h.parentNode;ha=h.nextSibling;Ia=c;Ja=f.group;q.dragged=h;ia={target:h,clientX:(b||a).clientX,clientY:(b||a).clientY};ub=ia.clientX-k.left;vb=ia.clientY-k.top;this._lastX=(b||a).clientX;
this._lastY=(b||a).clientY;h.style["will-change"]="all";c=function(){K("delayEnded",d,{evt:a});q.eventCanceled?d._onDrop():(d._disableDelayedDragEvents(),!qb&&d.nativeDraggable&&(h.draggable=!0),d._triggerDragStart(a,b),I({sortable:d,name:"choose",originalEvent:a}),L(h,f.chosenClass,!0))};f.ignore.split(",").forEach(function(l){ib(h,l.trim(),Ta)});v(g,"dragover",ja);v(g,"mousemove",ja);v(g,"touchmove",ja);v(g,"mouseup",d._onDrop);v(g,"touchend",d._onDrop);v(g,"touchcancel",d._onDrop);qb&&this.nativeDraggable&&
(this.options.touchStartThreshold=4,h.draggable=!0);K("delayStart",this,{evt:a});!f.delay||f.delayOnTouchOnly&&!b||this.nativeDraggable&&(ta||Z)?c():q.eventCanceled?this._onDrop():(v(g,"mouseup",d._disableDelayedDrag),v(g,"touchend",d._disableDelayedDrag),v(g,"touchcancel",d._disableDelayedDrag),v(g,"mousemove",d._delayedDragTouchMoveHandler),v(g,"touchmove",d._delayedDragTouchMoveHandler),f.supportPointer&&v(g,"pointermove",d._delayedDragTouchMoveHandler),d._dragStartTimer=setTimeout(c,f.delay))}},
_delayedDragTouchMoveHandler:function(a){a=a.touches?a.touches[0]:a;Math.max(Math.abs(a.clientX-this._lastX),Math.abs(a.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){h&&Ta(h);clearTimeout(this._dragStartTimer);this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var a=this.el.ownerDocument;u(a,"mouseup",this._disableDelayedDrag);u(a,"touchend",this._disableDelayedDrag);
u(a,"touchcancel",this._disableDelayedDrag);u(a,"mousemove",this._delayedDragTouchMoveHandler);u(a,"touchmove",this._delayedDragTouchMoveHandler);u(a,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(a,b){b=b||"touch"==a.pointerType&&a;!this.nativeDraggable||b?this.options.supportPointer?v(document,"pointermove",this._onTouchMove):b?v(document,"touchmove",this._onTouchMove):v(document,"mousemove",this._onTouchMove):(v(h,"dragend",this),v(y,"dragstart",this._onDragStart));
try{document.selection?Ga(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(c){}},_dragStarted:function(a,b){oa=!1;if(y&&h){K("dragStarted",this,{evt:b});this.nativeDraggable&&v(document,"dragover",Mb);var c=this.options;!a&&L(h,c.dragClass,!1);L(h,c.ghostClass,!0);q.active=this;a&&this._appendGhost();I({sortable:this,name:"start",originalEvent:b})}else this._nulling()},_emulateDragOver:function(){if(R){this._lastX=R.clientX;this._lastY=R.clientY;sb();for(var a=
document.elementFromPoint(R.clientX,R.clientY),b=a;a&&a.shadowRoot;){a=a.shadowRoot.elementFromPoint(R.clientX,R.clientY);if(a===b)break;b=a}h.parentNode[N]._isOutsideThisEl(a);if(b){do{if(b[N]){var c=void 0;if((c=b[N]._onDragOver({clientX:R.clientX,clientY:R.clientY,target:a,rootEl:b}))&&!this.options.dragoverBubble)break}a=b}while(b=b.parentNode)}tb()}},_onTouchMove:function(a){if(ia){var b=this.options,c=b.fallbackTolerance,d=b.fallbackOffset;b=a.touches?a.touches[0]:a;var e=r&&ka(r,!0),f=r&&e&&
e.a,g=r&&e&&e.d,k=ya&&H&&kb(H);f=(b.clientX-ia.clientX+d.x)/(f||1)+(k?k[0]-$a[0]:0)/(f||1);d=(b.clientY-ia.clientY+d.y)/(g||1)+(k?k[1]-$a[1]:0)/(g||1);if(!q.active&&!oa){if(c&&Math.max(Math.abs(b.clientX-this._lastX),Math.abs(b.clientY-this._lastY))<c)return;this._onDragStart(a,!0)}r&&(e?(e.e+=f-(Ya||0),e.f+=d-(Za||0)):e={a:1,b:0,c:0,d:1,e:f,f:d},c="matrix(".concat(e.a,",").concat(e.b,",").concat(e.c,",").concat(e.d,",").concat(e.e,",").concat(e.f,")"),p(r,"webkitTransform",c),p(r,"mozTransform",
c),p(r,"msTransform",c),p(r,"transform",c),Ya=f,Za=d,R=b);a.cancelable&&a.preventDefault()}},_appendGhost:function(){if(!r){var a=this.options.fallbackOnBody?document.body:y,b=D(h,!0,ya,!0,a),c=this.options;if(ya){for(H=a;"static"===p(H,"position")&&"none"===p(H,"transform")&&H!==document;)H=H.parentNode;H!==document.body&&H!==document.documentElement?(H===document&&(H=aa()),b.top+=H.scrollTop,b.left+=H.scrollLeft):H=aa();$a=kb(H)}r=h.cloneNode(!0);L(r,c.ghostClass,!1);L(r,c.fallbackClass,!0);L(r,
c.dragClass,!0);p(r,"transition","");p(r,"transform","");p(r,"box-sizing","border-box");p(r,"margin",0);p(r,"top",b.top);p(r,"left",b.left);p(r,"width",b.width);p(r,"height",b.height);p(r,"opacity","0.8");p(r,"position",ya?"absolute":"fixed");p(r,"zIndex","100000");p(r,"pointerEvents","none");q.ghost=r;a.appendChild(r);p(r,"transform-origin",ub/parseInt(r.style.width)*100+"% "+vb/parseInt(r.style.height)*100+"%")}},_onDragStart:function(a,b){var c=this,d=a.dataTransfer,e=c.options;K("dragStart",this,
{evt:a});q.eventCanceled?this._onDrop():(K("setupClone",this),q.eventCanceled||(z=nb(h),z.removeAttribute("id"),z.draggable=!1,z.style["will-change"]="",this._hideClone(),L(z,this.options.chosenClass,!1),q.clone=z),c.cloneId=Ga(function(){K("clone",c);q.eventCanceled||(c.options.removeCloneOnHide||y.insertBefore(z,h),c._hideClone(),I({sortable:c,name:"clone"}))}),!b&&L(h,e.dragClass,!0),b?(Ka=!0,c._loopId=setInterval(c._emulateDragOver,50)):(u(document,"mouseup",c._onDrop),u(document,"touchend",c._onDrop),
u(document,"touchcancel",c._onDrop),d&&(d.effectAllowed="move",e.setData&&e.setData.call(c,d,h)),v(document,"drop",c),p(h,"transform","translateZ(0)")),oa=!0,c._dragStartId=Ga(c._dragStarted.bind(c,b,a)),v(document,"selectstart",c),za=!0,va&&p(document.body,"user-select","none"))},_onDragOver:function(a){function b(fa,Na){K(fa,x,S({evt:a,isOwner:E,axis:Q?"vertical":"horizontal",revert:l,dragRect:U,targetRect:k,canSort:B,fromSortable:G,target:g,completed:d,onMove:function(yb,Nb){return Da(y,f,h,U,
yb,D(yb),a,Nb)},changed:e},Na))}function c(){b("dragOverAnimationCapture");x.captureAnimationState();x!==G&&G.captureAnimationState()}function d(fa){b("dragOverCompleted",{insertion:fa});fa&&(E?t._hideClone():t._showClone(x),x!==G&&(L(h,F?F.options.ghostClass:t.options.ghostClass,!1),L(h,m.ghostClass,!0)),F!==x&&x!==q.active?F=x:x===q.active&&F&&(F=null),G===x&&(x._ignoreWhileAnimating=g),x.animateAll(function(){b("dragOverAnimationComplete");x._ignoreWhileAnimating=null}),x!==G&&(G.animateAll(),
G._ignoreWhileAnimating=null));if(g===h&&!h.animated||g===f&&!g.animated)pa=null;m.dragoverBubble||a.rootEl||g===document||(h.parentNode[N]._isOutsideThisEl(a.target),!fa&&ja(a));!m.dragoverBubble&&a.stopPropagation&&a.stopPropagation();return P=!0}function e(){M=O(h);da=O(h,m.draggable);I({sortable:x,name:"change",toEl:f,newIndex:M,newDraggableIndex:da,originalEvent:a})}var f=this.el,g=a.target,k,l,m=this.options,n=m.group,t=q.active,E=Ja===n,B=m.sort,G=F||t,x=this,P=!1;if(!Ua){void 0!==a.preventDefault&&
a.cancelable&&a.preventDefault();g=T(g,m.draggable,f,!0);b("dragOver");if(q.eventCanceled)return P;if(h.contains(a.target)||g.animated&&g.animatingX&&g.animatingY||x._ignoreWhileAnimating===g)return d(!1);Ka=!1;if(t&&!m.disabled&&(E?B||(l=A!==y):F===this||(this.lastPutMode=Ja.checkPull(this,t,h,a))&&n.checkPut(this,t,h,a))){var Q="vertical"===this._getDirection(a,g);var U=D(h);b("dragOverValid");if(q.eventCanceled)return P;if(l)return A=y,c(),this._hideClone(),b("revert"),q.eventCanceled||(ha?y.insertBefore(h,
ha):y.appendChild(h)),d(!0);n=Ra(f,m.draggable);if(!n||Gb(a,Q,this)&&!n.animated){if(n===h)return d(!1);n&&f===a.target&&(g=n);g&&(k=D(g));if(!1!==Da(y,f,h,U,g,k,a,!!g))return c(),n&&n.nextSibling?f.insertBefore(h,n.nextSibling):f.appendChild(h),A=f,e(),d(!0)}else if(n&&Fb(a,Q,this)){var V=la(f,0,m,!0);if(V===h)return d(!1);g=V;k=D(g);if(!1!==Da(y,f,h,U,g,k,a,!1))return c(),f.insertBefore(h,V),A=f,e(),d(!0)}else if(g.parentNode===f){k=D(g);var w=0;w=h.parentNode!==f;var J=!Kb(h.animated&&h.toRect||
U,g.animated&&g.toRect||k,Q);n=Q?"top":"left";var ba=jb(g,"top","top")||jb(h,"top","top"),Oa=ba?ba.scrollTop:void 0;pa!==g&&(V=k[n],wa=!1,La=!J&&m.invertSwap||w);w=Hb(a,g,k,Q,J?1:m.swapThreshold,null==m.invertedSwapThreshold?m.swapThreshold:m.invertedSwapThreshold,La,pa===g);if(0!==w){J=O(h);do{J-=w;var W=A.children[J]}while(W&&("none"===p(W,"display")||W===r))}if(0===w||W===g)return d(!1);pa=g;xa=w;W=g.nextElementSibling;J=!1;J=1===w;w=Da(y,f,h,U,g,k,a,J);if(!1!==w){if(1===w||-1===w)J=1===w;Ua=!0;
setTimeout(Eb,30);c();J&&!W?f.appendChild(h):g.parentNode.insertBefore(h,J?W:g);ba&&mb(ba,0,Oa-ba.scrollTop);A=h.parentNode;void 0===V||La||(Ea=Math.abs(V-D(g)[n]));e();return d(!0)}}if(f.contains(h))return d(!1)}return!1}},_ignoreWhileAnimating:null,_offMoveEvents:function(){u(document,"mousemove",this._onTouchMove);u(document,"touchmove",this._onTouchMove);u(document,"pointermove",this._onTouchMove);u(document,"dragover",ja);u(document,"mousemove",ja);u(document,"touchmove",ja)},_offUpEvents:function(){var a=
this.el.ownerDocument;u(a,"mouseup",this._onDrop);u(a,"touchend",this._onDrop);u(a,"pointerup",this._onDrop);u(a,"touchcancel",this._onDrop);u(document,"selectstart",this)},_onDrop:function(a){var b=this.el,c=this.options;M=O(h);da=O(h,c.draggable);K("drop",this,{evt:a});A=h&&h.parentNode;M=O(h);da=O(h,c.draggable);if(!q.eventCanceled&&(wa=La=oa=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),clearTimeout(this.cloneId),clearTimeout(this._dragStartId),this.nativeDraggable&&(u(document,
"drop",this),u(b,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),va&&p(document.body,"user-select",""),p(h,"transform",""),a&&(za&&(a.cancelable&&a.preventDefault(),!c.dropBubble&&a.stopPropagation()),r&&r.parentNode&&r.parentNode.removeChild(r),(y===A||F&&"clone"!==F.lastPutMode)&&z&&z.parentNode&&z.parentNode.removeChild(z),h&&(this.nativeDraggable&&u(h,"dragend",this),Ta(h),h.style["will-change"]="",za&&!oa&&L(h,F?F.options.ghostClass:this.options.ghostClass,!1),L(h,this.options.chosenClass,
!1),I({sortable:this,name:"unchoose",toEl:A,newIndex:null,newDraggableIndex:null,originalEvent:a}),y!==A?(0<=M&&(I({rootEl:A,name:"add",toEl:A,fromEl:y,originalEvent:a}),I({sortable:this,name:"remove",toEl:A,originalEvent:a}),I({rootEl:A,name:"sort",toEl:A,fromEl:y,originalEvent:a}),I({sortable:this,name:"sort",toEl:A,originalEvent:a})),F&&F.save()):M!==ma&&0<=M&&(I({sortable:this,name:"update",toEl:A,originalEvent:a}),I({sortable:this,name:"sort",toEl:A,originalEvent:a})),q.active)))){if(null==M||
-1===M)M=ma,da=sa;I({sortable:this,name:"end",toEl:A,originalEvent:a});this.save()}this._nulling()},_nulling:function(){K("nulling",this);y=h=A=r=ha=z=Ia=ea=ia=R=za=M=da=ma=sa=pa=xa=F=Ja=q.dragged=q.ghost=q.clone=q.active=null;Fa.forEach(function(a){a.checked=!0});Fa.length=Ya=Za=0},handleEvent:function(a){switch(a.type){case "drop":case "dragend":this._onDrop(a);break;case "dragenter":case "dragover":h&&(this._onDragOver(a),a.dataTransfer&&(a.dataTransfer.dropEffect="move"),a.cancelable&&a.preventDefault());
break;case "selectstart":a.preventDefault()}},toArray:function(){for(var a=[],b,c=this.el.children,d=0,e=c.length,f=this.options;d<e;d++)if(b=c[d],T(b,f.draggable,this.el,!1)){var g=a,k=g.push,l;if(!(l=b.getAttribute(f.dataIdAttr))){b=b.tagName+b.className+b.src+b.href+b.textContent;l=b.length;for(var m=0;l--;)m+=b.charCodeAt(l);l=m.toString(36)}k.call(g,l)}return a},sort:function(a,b){var c={},d=this.el;this.toArray().forEach(function(e,f){f=d.children[f];T(f,this.options.draggable,d,!1)&&(c[e]=
f)},this);b&&this.captureAnimationState();a.forEach(function(e){c[e]&&(d.removeChild(c[e]),d.appendChild(c[e]))});b&&this.animateAll()},save:function(){var a=this.options.store;a&&a.set&&a.set(this)},closest:function(a,b){return T(a,b||this.options.draggable,this.el,!1)},option:function(a,b){var c=this.options;if(void 0===b)return c[a];var d=ua.modifyOption(this,a,b);c[a]="undefined"!==typeof d?d:b;"group"===a&&pb(c)},destroy:function(){K("destroy",this);var a=this.el;a[N]=null;u(a,"mousedown",this._onTapStart);
u(a,"touchstart",this._onTapStart);u(a,"pointerdown",this._onTapStart);this.nativeDraggable&&(u(a,"dragover",this),u(a,"dragenter",this));Array.prototype.forEach.call(a.querySelectorAll("[draggable]"),function(b){b.removeAttribute("draggable")});this._onDrop();this._disableDelayedDragEvents();Ca.splice(Ca.indexOf(this.el),1);this.el=a=null},_hideClone:function(){ea||(K("hideClone",this),q.eventCanceled||(p(z,"display","none"),this.options.removeCloneOnHide&&z.parentNode&&z.parentNode.removeChild(z),
ea=!0))},_showClone:function(a){"clone"!==a.lastPutMode?this._hideClone():ea&&(K("showClone",this),q.eventCanceled||(h.parentNode!=y||this.options.group.revertClone?ha?y.insertBefore(z,ha):y.appendChild(z):y.insertBefore(z,h),this.options.group.revertClone&&this.animate(h,z),p(z,"display",""),ea=!1))}};Ma&&v(document,"touchmove",function(a){(q.active||oa)&&a.cancelable&&a.preventDefault()});q.utils={on:v,off:u,css:p,find:ib,is:function(a,b){return!!T(a,b,a,!1)},extend:function(a,b){if(a&&b)for(var c in b)b.hasOwnProperty(c)&&
(a[c]=b[c]);return a},throttle:lb,closest:T,toggleClass:L,clone:nb,index:O,nextTick:Ga,cancelNextTick:function(a){return clearTimeout(a)},detectDirection:ob,getChild:la};q.get=function(a){return a[N]};q.mount=function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];b[0].constructor===Array&&(b=b[0]);b.forEach(function(d){if(!d.prototype||!d.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(d));d.utils&&(q.utils=
S(S({},q.utils),d.utils));ua.mount(d)})};q.create=function(a,b){return new q(a,b)};q.version="1.15.0";var C=[],Aa,ab,bb=!1,cb,db,Pa,qa,eb=lb(function(a,b,c,d){if(b.scroll){var e=(a.touches?a.touches[0]:a).clientX,f=(a.touches?a.touches[0]:a).clientY,g=b.scrollSensitivity,k=b.scrollSpeed,l=aa(),m=!1;if(ab!==c){ab=c;Ha();Aa=b.scroll;var n=b.scrollFn;!0===Aa&&(Aa=ca(c,!0))}c=0;var t=Aa;do{var E=t,B=D(E),G=B.top,x=B.bottom,P=B.left,Q=B.right,U=B.width;B=B.height;var V=void 0,w=void 0,J=E.scrollWidth,
ba=E.scrollHeight;w=p(E);var Oa=E.scrollLeft,W=E.scrollTop;E===l?(V=U<J&&("auto"===w.overflowX||"scroll"===w.overflowX||"visible"===w.overflowX),w=B<ba&&("auto"===w.overflowY||"scroll"===w.overflowY||"visible"===w.overflowY)):(V=U<J&&("auto"===w.overflowX||"scroll"===w.overflowX),w=B<ba&&("auto"===w.overflowY||"scroll"===w.overflowY));P=V&&(Math.abs(Q-e)<=g&&Oa+U<J)-(Math.abs(P-e)<=g&&!!Oa);G=w&&(Math.abs(x-f)<=g&&W+B<ba)-(Math.abs(G-f)<=g&&!!W);if(!C[c])for(x=0;x<=c;x++)C[x]||(C[x]={});if(C[c].vx!=
P||C[c].vy!=G||C[c].el!==E)if(C[c].el=E,C[c].vx=P,C[c].vy=G,clearInterval(C[c].pid),0!=P||0!=G)m=!0,C[c].pid=setInterval(function(){d&&0===this.layer&&q.active._onTouchMove(Pa);var fa=C[this.layer].vy?C[this.layer].vy*k:0,Na=C[this.layer].vx?C[this.layer].vx*k:0;"function"===typeof n&&"continue"!==n.call(q.dragged.parentNode[N],Na,fa,a,Pa,C[this.layer].el)||mb(C[this.layer].el,Na,fa)}.bind({layer:c}),24);c++}while(b.bubbleScroll&&t!==l&&(t=ca(t,!1)));bb=m}},30),zb=function(a){var b=a.originalEvent,
c=a.putSortable,d=a.dragEl,e=a.activeSortable,f=a.dispatchSortableEvent,g=a.hideGhostForTarget;a=a.unhideGhostForTarget;b&&(e=c||e,g(),b=b.changedTouches&&b.changedTouches.length?b.changedTouches[0]:b,b=document.elementFromPoint(b.clientX,b.clientY),a(),e&&!e.el.contains(b)&&(f("spill"),this.onSpill({dragEl:d,putSortable:c})))};Va.prototype={startIndex:null,dragStart:function(a){this.startIndex=a.oldDraggableIndex},onSpill:function(a){var b=a.dragEl;a=a.putSortable;this.sortable.captureAnimationState();
a&&a.captureAnimationState();var c=la(this.sortable.el,this.startIndex,this.options);c?this.sortable.el.insertBefore(b,c):this.sortable.el.appendChild(b);this.sortable.animateAll();a&&a.animateAll()},drop:zb};X(Va,{pluginName:"revertOnSpill"});Wa.prototype={onSpill:function(a){var b=a.dragEl;a=a.putSortable||this.sortable;a.captureAnimationState();b.parentNode&&b.parentNode.removeChild(b);a.animateAll()},drop:zb};X(Wa,{pluginName:"removeOnSpill"});q.mount(new function(){function a(){this.defaults=
{scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var b in this)"_"===b.charAt(0)&&"function"===typeof this[b]&&(this[b]=this[b].bind(this))}a.prototype={dragStarted:function(b){b=b.originalEvent;this.sortable.nativeDraggable?v(document,"dragover",this._handleAutoScroll):this.options.supportPointer?v(document,"pointermove",this._handleFallbackAutoScroll):b.touches?v(document,"touchmove",this._handleFallbackAutoScroll):v(document,"mousemove",this._handleFallbackAutoScroll)},
dragOverCompleted:function(b){b=b.originalEvent;this.options.dragOverBubble||b.rootEl||this._handleAutoScroll(b)},drop:function(){this.sortable.nativeDraggable?u(document,"dragover",this._handleAutoScroll):(u(document,"pointermove",this._handleFallbackAutoScroll),u(document,"touchmove",this._handleFallbackAutoScroll),u(document,"mousemove",this._handleFallbackAutoScroll));clearInterval(qa);Ha();clearTimeout(ra);ra=void 0},nulling:function(){Pa=ab=Aa=bb=qa=cb=db=null;C.length=0},_handleFallbackAutoScroll:function(b){this._handleAutoScroll(b,
!0)},_handleAutoScroll:function(b,c){var d=this,e=(b.touches?b.touches[0]:b).clientX,f=(b.touches?b.touches[0]:b).clientY,g=document.elementFromPoint(e,f);Pa=b;if(c||this.options.forceAutoScrollFallback||ta||Z||va){eb(b,this.options,g,c);var k=ca(g,!0);!bb||qa&&e===cb&&f===db||(qa&&clearInterval(qa),qa=setInterval(function(){var l=ca(document.elementFromPoint(e,f),!0);l!==k&&(k=l,Ha());eb(b,d.options,l,c)},10),cb=e,db=f)}else this.options.bubbleScroll&&ca(g,!0)!==aa()?eb(b,this.options,ca(g,!1),!1):
Ha()}};return X(a,{pluginName:"scroll",initializeByDefault:!0})});q.mount(Wa,Va);Ab.Sortable=q});