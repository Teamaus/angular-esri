// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/Error ../../../core/has ../../../core/accessorSupport/decorators/subclass ../resources ../../support/widget ../../support/jsxFactory".split(" "),function(g,l,m,p,q,r,t,u,n,d,h,e){g.FeatureContentMixin=c=>{c=function(k){function f(){var b=k.apply(this,arguments)||this;b.renderNodeContent=a=>h.isWidget(a)&&!a.destroyed?
e.tsx("div",{class:d.CSS.contentNode,key:a},a.render()):a instanceof HTMLElement?e.tsx("div",{class:d.CSS.contentNode,key:a,bind:a,afterCreate:b._attachToNode}):h.hasDomNode(a)?e.tsx("div",{class:d.CSS.contentNode,key:a,bind:a.domNode,afterCreate:b._attachToNode}):null;return b}l._inheritsLoose(f,k);f.prototype._attachToNode=function(b){b.appendChild(this)};return f}(c);return c=m.__decorate([n.subclass("esri.widgets.Feature.ContentMixin")],c)};Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});