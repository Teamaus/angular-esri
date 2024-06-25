/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as e}from"../../../../chunks/tslib.es6.js";import{e as t}from"../../../../core/promiseUtils.js";import{HandleOwnerMixin as s}from"../../../../core/HandleOwner.js";import{i as o}from"../../../../chunks/maybe.js";import{watch as n}from"../../../../core/reactiveUtils.js";import{property as i}from"../../../../core/accessorSupport/decorators/property.js";import"../../../../core/lang.js";import"../../../../chunks/ensureType.js";import{subclass as r}from"../../../../core/accessorSupport/decorators/subclass.js";import a from"../../../Widget.js";import u from"./ButtonMenuViewModel.js";import{P as d}from"../../../../chunks/Popover.js";import{i as c,m as l}from"../../../../chunks/widgetUtils.js";import{t as m}from"../../../../chunks/jsxFactory.js";import"../../../../chunks/object.js";import"../../../../core/Error.js";import"../../../../chunks/Logger.js";import"../../../../config.js";import"../../../../chunks/string.js";import"../../../../core/Accessor.js";import"../../../../core/Handles.js";import"../../../../chunks/get.js";import"../../../../chunks/utils.js";import"../../../../chunks/handleUtils.js";import"../../../../chunks/metadata.js";import"../../../../chunks/ArrayPool.js";import"../../../../chunks/tracking.js";import"../../../../chunks/watch.js";import"../../../../core/scheduling.js";import"../../../../chunks/nextTick.js";import"../../../../chunks/WatchUpdatingTracking.js";import"../../../../intl.js";import"../../../../chunks/number.js";import"../../../../chunks/jsonMap.js";import"../../../../chunks/locale.js";import"../../../../chunks/messages.js";import"../../../../request.js";import"../../../../kernel.js";import"../../../../core/urlUtils.js";import"../../../../chunks/assets.js";import"../../../../chunks/domUtils.js";import"../../../../core/Evented.js";import"../../../../core/Promise.js";import"../../../../chunks/uuid.js";import"../../../../core/accessorSupport/decorators/cast.js";import"../../../../chunks/projector.js";import"../../../../chunks/jsxWidgetSupport.js";import"./ButtonMenuItem.js";let p=class extends(s(a)){constructor(e,t){super(e,t),this._menuContentNode=null,this._popover=null,this._rootNode=null,this.disabled=!1,this.iconClass="",this.viewModel=new u,this._handleOutsideClick=this._handleOutsideClick.bind(this)}postInitialize(){this._popover=new d({owner:this,open:!!this.open,placement:c(this.container)?"bottom-start":"bottom-end",renderContentFunction:this.renderMenuContent,anchorElement:this._rootNode}),this.handles.add(n((()=>this.open),(e=>this._popover?.set("open",e)))),document.addEventListener("click",this._handleOutsideClick)}destroy(){this._popover?.destroy(),this._popover=null,document.removeEventListener("click",this._handleOutsideClick)}_handleOutsideClick(e){if(!this.open||!this._rootNode||!this._menuContentNode)return;const t=e.target;this._menuContentNode?.contains(t)||this._rootNode?.contains(t)||(this.open=!1)}get items(){return this.viewModel.items}set items(e){this.viewModel.items=e}get open(){return this.viewModel.open}set open(e){this.viewModel.open=e}render(){return m("div",{afterCreate:this._afterRootNodeCreate,bind:this,"data-node-ref":"_rootNode",class:this.classes("esri-button-menu","esri-widget"),key:"menu"},this.renderMenuButton())}renderMenuButton(){const{iconClass:e,id:t,label:s,open:o}=this,n=this.classes("esri-button-menu__button",e??"esri-icon-menu",o?"esri-button-menu__button--selected":null);return m("button",{"aria-pressed":o.toString(),"aria-controls":`${t}-menu`,"aria-expanded":o.toString(),"aria-haspopup":"true","aria-label":s,bind:this,class:n,disabled:this.disabled,id:`${t}-button`,title:s??"",selected:o,onclick:this._toggleOpen,tabindex:this.disabled?-1:0,type:"button"})}renderMenuContent(){const{id:e,open:t}=this;return m("div",{afterCreate:this._afterMenuContentNodeCreate,bind:this,class:"esri-button-menu__content","data-node-ref":"_menuContentNode",key:"esri-button-menu-content",hidden:!t},m("ul",{"aria-labelledby":`${e}-button`,bind:this,class:"esri-button-menu__item-wrapper",id:`${e}-menu`,role:"menu"},this.items?.length&&this.renderItems()))}renderItems(){return this.items?.map(((e,t)=>this.renderItem(e,t)))}renderItem(e,t,s){const n=o(s)?`${this.id}-menu-item-${t}-${s}`:`${this.id}-menu-item-${t}`,i=`${n}-label`,r=this.classes("esri-button-menu__item",e.selectionEnabled?"esri-button-menu__item--selectable":null,e.selectionEnabled&&e.selected?"esri-button-menu__item--selected":null);return m("li",{afterCreate:this._afterMenuItemCreate,bind:this,class:r,"data-item-index":t,"data-item-subIndex":s,for:n,key:n,onkeydown:t=>this._handleMenuItemKeydown(t,e),onclick:t=>this._handleMenuItemInteraction(t,e),role:"menuitem",tabindex:this.disabled?-1:0},m("input",{disabled:!0,checked:e.selected,class:"esri-button-menu__checkbox",id:n,name:n,tabindex:"-1",type:"checkbox"}),m("label",{bind:this,class:this.classes("esri-button-menu__button","esri-button-menu__item-label"),for:n,id:i},m("span",{class:this.classes("esri-button-menu__icon",e.iconClass),"aria-hidden":"true"}),m("span",{class:"esri-button-menu__item-label-content"},e.label)),m("ul",{"aria-labelledby":i,class:"esri-button-menu__embedded-content-wrapper",id:`${this.id}-submenu`,role:"menu"},e?.items?.map(((e,s)=>this.renderItem(e,t,s)))))}_afterRootNodeCreate(e){this._rootNode=e,this._popover?.set("anchorElement",(()=>e))}_handleMenuItemInteraction(e,t){t.selected=!t.selected,t.open=!(!t.selected||!t.items),t.autoCloseMenu&&this.set("open",!1),t.clickFunction&&t.clickFunction({event:e,item:t}),e.stopPropagation()}_handleMenuItemKeydown(e,s){const o=t(e);l(o)&&this._handleMenuItemInteraction(e,s),"Escape"===o&&(this.open=!1,e.preventDefault(),e.stopPropagation())}_afterMenuContentNodeCreate(e){this._menuContentNode=e,e.focus()}_toggleOpen(){this.open=!this.open}_afterMenuItemCreate(e){0===e["data-item-index"]&&e.focus()}};e([i()],p.prototype,"disabled",void 0),e([i()],p.prototype,"iconClass",void 0),e([i()],p.prototype,"items",null),e([i()],p.prototype,"open",null),e([i()],p.prototype,"viewModel",void 0),p=e([r("esri.widgets.FeatureTable.Grid.support.ButtonMenu")],p);const h=p;export{h as default};