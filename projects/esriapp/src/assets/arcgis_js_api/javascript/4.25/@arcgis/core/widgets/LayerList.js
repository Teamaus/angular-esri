/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import t from"../core/Collection.js";import{e as i}from"../core/promiseUtils.js";import s from"../core/Handles.js";import{h as r}from"../chunks/object.js";import{i as o}from"../chunks/maybe.js";import{on as n,watch as l,initial as a,syncAndInitial as c}from"../core/reactiveUtils.js";import{property as d}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import{cast as h}from"../core/accessorSupport/decorators/cast.js";import{subclass as m}from"../core/accessorSupport/decorators/subclass.js";import u from"./Widget.js";import p from"./LayerList/LayerListViewModel.js";import g from"./LayerList/ListItem.js";import{f as _,s as y,h as b,j as v}from"../chunks/layerListUtils.js";import{a as I}from"../chunks/accessibleHandler.js";import{m as f}from"../chunks/messageBundle.js";import{v as k}from"../chunks/vmEvent.js";import{t as C}from"../chunks/jsxFactory.js";import"../chunks/widgetUtils.js";import{S as w}from"../chunks/sortable.esm.js";import"../chunks/ArrayPool.js";import"../core/Evented.js";import"../core/Accessor.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/string.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/Error.js";import"../chunks/ensureType.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../intl.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../core/Promise.js";import"../chunks/uuid.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../core/HandleOwner.js";import"../chunks/WatchUpdatingTracking.js";import"../core/Identifiable.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../chunks/ActionSlider.js";import"../support/actions/ActionToggle.js";import"./LayerList/ListItemPanel.js";import"./support/widget.js";import"../chunks/themeUtils.js";function A(e,t,i){e.splice(i,0,e.splice(t,1)[0])}const j=t.ofType(g),S="esri-layer-list__item-actions-menu-item",L="esri-layer-list__item-label",M={exclusive:"exclusive",inherited:"inherited",independent:"independent"};function T(e){const{actionsOpen:t,children:i}=e;t&&(e.actionsOpen=!1),i.forEach((e=>T(e)))}const E={statusIndicators:!0,errors:!1};let x=class extends u{constructor(e,t){super(e,t),this._handles=new s,this._sortableNodes=new Map,this._sortableMap=new Map,this._focusSortUid=null,this._newUI=r("esri-layerlist-new-ui"),this._tooltipReferenceMap=new Map,this.visibleItems=null,this.iconClass="esri-icon-layers",this.listItemCanGiveFunction=null,this.listItemCanReceiveFunction=null,this.messages=null,this.messagesCommon=null,this.multipleSelectionEnabled=!1,this.selectionEnabled=!1,this.selectedItems=new j,this.viewModel=new p,this.visibleElements={...E},this._onSortableSort=({to:e,from:t,item:i,newIndex:s})=>{t&&e&&(t===e?this._sortLayers(this._sortableMap.get(t.dataset.group)):this._moveLayerFromChildList({to:e,from:t,item:i,newIndex:s}))},this._sortableCanSort=(e,t)=>!(!e.el.dataset.group||!t.el.dataset.group),this._sortableCanPull=(e,t,i)=>{const{listItemCanGiveFunction:s}=this,r={selected:i["data-item"],from:t.el["data-item"],to:e.el["data-item"]};return!this._sortableCanSort(e,t)||"function"!=typeof s||s.call(null,r)},this._sortableCanPut=(e,t,i)=>{const{listItemCanReceiveFunction:s}=this,r={selected:i["data-item"],from:t.el["data-item"],to:e.el["data-item"]};return!this._sortableCanSort(e,t)||"function"!=typeof s||s.call(null,r)},this._onSortableEnd=({oldIndex:e,from:t,to:i,item:s})=>{t!==i&&t.insertBefore(s,t.children[e])}}initialize(){const e=this.operationalItems;this._setVisibleItems(e),this.addHandles([n((()=>this.operationalItems),"change",(()=>this._itemsChanged(e))),l((()=>this.visibleElements),(()=>this._itemsChanged(e))),l((()=>this.selectionEnabled),(()=>this._toggleAllSorting()),a)])}loadDependencies(){return Promise.all([import("../chunks/calcite-icon.js"),import("../chunks/calcite-tooltip.js")])}destroy(){this._destroySortables(),this._tooltipReferenceMap.clear(),this._handles.destroy(),this._handles=null}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get listItemCreatedFunction(){return this.viewModel.listItemCreatedFunction}set listItemCreatedFunction(e){this.viewModel.listItemCreatedFunction=e}get operationalItems(){return this.viewModel.operationalItems}set operationalItems(e){this.viewModel.operationalItems=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}castVisibleElements(e){return{...E,...e}}triggerAction(e,t){return this.viewModel.triggerAction(e,t)}render(){const{visibleItems:e,_newUI:t}=this,i=this.viewModel?.state,s={"esri-layer-list--new-ui":t,"esri-hidden":"loading"===i,"esri-disabled":"disabled"===i},r=this.renderItemTooltips(),o=this.renderItems();return C("div",{class:this.classes("esri-layer-list esri-widget esri-widget--panel",s)},e?.length?[r,o]:this.renderNoItems())}renderItemTooltip(e){const{_tooltipReferenceMap:t,messages:i}=this;return e?C("calcite-tooltip",{label:i.layerIncompatible,referenceElement:t.get(e.uid)},i.layerIncompatibleTooltip):null}renderItemTooltipNodes(e){const{incompatible:t,children:i}=e;return[t?this.renderItemTooltip(e):null,...t?[]:i?.toArray().map((e=>this.renderItemTooltipNodes(e)))]}renderItemTooltips(){return this.visibleItems.toArray().map((e=>this.renderItemTooltipNodes(e)))}renderNoItems(){return C("div",{class:"esri-layer-list__no-items"},this.messages.noItemsToDisplay)}renderItems(){const{visibleItems:e,selectionEnabled:t,messages:i}=this;return C("ul",{"aria-label":i.widgetLabel,role:t?"listbox":void 0,afterCreate:this._sortNodeCreated,afterUpdate:this._sortNodeCreated,afterRemoved:this._sortNodeRemoved,"data-group":"root",bind:this,class:this.classes("esri-layer-list__list","esri-layer-list__list--root","esri-layer-list__list--independent")},e?.map((e=>this.renderItem(e,null))).toArray())}renderActionsMenuIcon(e,t){const{messagesCommon:i}=this,s={"esri-layer-list__item-actions-menu-item--active":e.actionsOpen};return C("div",{key:"actions-menu-toggle","data-item":e,bind:this,onclick:this._toggleActionsOpen,onkeydown:this._toggleActionsOpen,class:this.classes(S,s),tabindex:"0",role:"button","aria-controls":t,"aria-label":i.options,title:i.options},C("span",{"aria-hidden":"true",class:"esri-icon-handle-horizontal"}))}renderActionsMenu(e,t,i,s){const{panel:r}=e,o=r&&r.visible?this.renderPanelButton(r):null,n=1===i&&this._getSingleActionButton(t),l=n?this.renderAction({item:e,action:n,singleAction:!0}):null,a=!n&&i?this.renderActionsMenuIcon(e,s):null;return a||o||n?C("div",{key:"actions-menu",class:"esri-layer-list__item-actions-menu"},o,l,a):null}renderChildList(e,t){const{selectionEnabled:i}=this,{visibilityMode:s,children:r}=e,o=this._hasChildren(e),n=!o&&i&&"group"===e.layer?.type,{exclusive:l,inherited:a}=M,c={"esri-layer-list__list--exclusive":s===l,"esri-layer-list__list--inherited":s===a,"esri-layer-list__list--independent":s!==a&&s!==l};return o||n?C("ul",{bind:this,key:"list-items",id:t,"data-group":e.uid,"data-item":e,afterCreate:this._sortNodeCreated,afterUpdate:this._sortNodeCreated,afterRemoved:this._sortNodeRemoved,class:this.classes("esri-layer-list__list",c),"aria-expanded":e.open?"true":"false",role:i?"listbox":s===l?"radiogroup":"group",hidden:!e.open&&!n||null},r?.map((t=>this.renderItem(t,e))).toArray()):null}renderChildrenToggle(e,t){const{messagesCommon:i}=this,s=this._hasChildren(e),r={"esri-layer-list__child-toggle--open":e.open},o=e.open?i.collapse:i.expand;return s?C("span",{onclick:this._toggleChildrenClick,onkeydown:this._toggleChildrenClick,"data-item":e,key:"toggle-children",class:this.classes("esri-layer-list__child-toggle",r),tabindex:"0",role:"button","aria-controls":t,"aria-label":o,title:o},C("span",{"aria-hidden":"true",class:this.classes("esri-layer-list__child-toggle-icon--closed","esri-icon-right-triangle-arrow")}),C("span",{"aria-hidden":"true",class:this.classes("esri-layer-list__child-toggle-icon--opened","esri-icon-down-arrow")}),C("span",{"aria-hidden":"true",class:this.classes("esri-layer-list__child-toggle-icon--closed-rtl","esri-icon-left-triangle-arrow")})):null}renderItemMessage(e){return e.error?C("div",{key:"esri-layer-list__error",class:"esri-layer-list__item-message",role:"alert"},C("span",{"aria-hidden":"true",class:"esri-icon-notice-triangle"}),this.messages.layerError):e.incompatible?C("div",{key:"esri-layer-list__incompatible",class:"esri-layer-list__item-message",role:"alert"},C("span",{bind:this,tabIndex:0,"aria-hidden":"true",class:"esri-icon-notice-triangle",afterCreate:t=>this._setTooltipReference(t,e)}),this.messages.layerIncompatible):null}renderItemContent(e,t,i){const{id:s}=this,r=`${s}_${e.uid}`,o=`${r}_actions`,n=`${r}__list`,{panel:l}=e,a=this._filterActions(e.actionsSections),c=this._countActions(a);return[C("div",{key:"list-item-container",class:"esri-layer-list__item-container"},this.renderChildrenToggle(e,n),this.renderLabel(e,t,i),this.renderActionsMenu(e,a,c,o)),this.renderItemMessage(e),c?this.renderActionsSections(e,a,o):null,l&&l.open&&!l.disabled?l.render():null,this.renderChildList(e,n)]}renderItem(e,t){const{_newUI:i,id:s,selectionEnabled:r,selectedItems:o}=this,n=`${s}_${e.uid}__title`,l=this._hasMessage(e),a={"esri-layer-list__item--has-children":this._hasChildren(e),"esri-layer-list__item--has-message":!!l,"esri-layer-list__item--invisible":i&&!e.visible,"esri-layer-list__item--invisible-at-scale":!e.visibleAtCurrentScale,"esri-layer-list__item--selectable":r};if(r){const i={"data-layer-uid":e.layer?.uid,"data-sort-filter":(!e.sortable).toString()};return C("li",{key:`item-with-selection-${e.uid}`,bind:this,afterCreate:this._focusListItem,afterUpdate:this._focusListItem,class:this.classes("esri-layer-list__item",a),"aria-labelledby":n,onclick:this._toggleSelection,onkeydown:this._selectionKeydown,"data-item":e,"data-group":t?t.uid:"root",tabIndex:0,"aria-selected":_(e,o)?"true":"false",role:"option",...i},this.renderItemContent(e,t,n))}return C("li",{key:`item-no-selection-${e.uid}`,bind:this,afterCreate:this._focusListItem,afterUpdate:this._focusListItem,class:this.classes("esri-layer-list__item",a),"aria-labelledby":n},this.renderItemContent(e,t,n))}renderConnectionIcon(e){const{connectionStatus:t}=e;return o(t)?C("calcite-icon",{icon:"connected"===t?"check-circle":"offline",scale:"s"}):null}renderItemStatus(e,t){const{visibleElements:i}=this;if(!i.statusIndicators)return null;const{connectionStatus:s,publishing:r,updating:o}=e,n=o&&!t,l=!!s;return C("span",{class:this.classes({"esri-layer-list__status-indicator":!0,"esri-layer-list__publishing":r,"esri-layer-list__updating":n,"esri-layer-list__connection-status":l,"esri-layer-list__connection-status--connected":l&&"connected"===s}),key:"layer-item-status"},this.renderConnectionIcon(e))}renderItemTitle(e,t){const{messages:i}=this;if(!e)return null;const s=e.title||i.untitledLayer,r=e.visibleAtCurrentScale?s:`${s} (${i.layerInvisibleAtScale})`;return C("span",{key:"layer-title-container",id:t,title:r,"aria-label":r,class:"esri-layer-list__item-title"},s)}renderItemToggleIcon(e,t){const{_newUI:i}=this,{exclusive:s}=M,r=t&&t.visibilityMode,o={"esri-layer-list__item-toggle-icon":i,"esri-layer-list__item-toggle-icon":i&&r!==s,"esri-layer-list__item-radio-icon":i&&r===s,"esri-icon-radio-checked":r===s&&e.visible,"esri-icon-radio-unchecked":r===s&&!e.visible,"esri-icon-visible":r!==s&&e.visible,"esri-icon-non-visible":r!==s&&!e.visible};return C("span",{key:"item-toggle-icon",class:this.classes(o),"aria-hidden":"true"})}renderItemToggle(e,t,i){const{selectionEnabled:s,messages:r}=this,{exclusive:o}=M,n=t&&t.visibilityMode,l=n===o?"radio":"switch";return C("span",s?{key:"item-toggle-selection-enabled",class:"esri-layer-list__item-toggle",bind:this,onclick:this._toggleVisibility,onkeydown:this._toggleVisibility,"data-item":e,"data-parent-visibility":n,tabIndex:0,title:e.visible?r.hideLayer:r.showLayer,"aria-checked":e.visible?"true":"false",role:l,"aria-labelledby":i}:{key:"item-toggle",class:"esri-layer-list__item-toggle"},this.renderItemToggleIcon(e,t))}renderLabel(e,t,i){const{selectionEnabled:s,_newUI:r,messages:o}=this,{inherited:n,exclusive:l}=M,a=t?.visibilityMode,c=a===l?"radio":"switch",d=r?[this.renderItemTitle(e,i),this.renderItemStatus(e,t),this.renderItemToggle(e,t,i)]:[this.renderItemToggle(e,t,i),this.renderItemTitle(e,i),this.renderItemStatus(e,t)],h=C("div",s?{key:`item-label-no-selection-${e.uid}`,class:L}:{key:`item-label-with-selection-${e.uid}`,class:L,bind:this,onclick:this._toggleVisibility,onkeydown:this._toggleVisibility,"data-item":e,"data-parent-visibility":a,tabIndex:0,"aria-checked":e.visible?"true":"false",title:e.visible?o.hideLayer:o.showLayer,role:c,"aria-labelledby":i},d);return a===n||e.error?C("div",{key:`item-label-container-${e.uid}`,class:L},this.renderItemTitle(e,i),this.renderItemStatus(e,t)):h}renderPanelButton(e){const{className:t,open:i,title:s,image:r}=e,o=r||t?t:"esri-icon-default-action",n=this._getIconImageStyles(e),l={"esri-layer-list__item-actions-menu-item--active":i},a={"esri-layer-list__item-action-image":!!n["background-image"],"esri-disabled-element":e.disabled};return o&&(a[o]=!!o),C("div",{"aria-disabled":e.disabled.toString(),key:`panel-${e.uid}`,bind:this,"data-panel":e,onclick:this._triggerPanel,onkeydown:this._triggerPanel,class:this.classes(S,l),role:"button",tabindex:e.disabled?null:0,title:s,"aria-label":s},C("span",{class:this.classes(a),styles:n}))}renderActionsSections(e,t,i){const s=t.toArray().map(((t,i)=>C("ul",{key:`${e}-action-section-${i}`,class:"esri-layer-list__item-actions-list"},this.renderActionSection(e,t))));return C("div",{role:"group","aria-expanded":e.actionsOpen?"true":"false",key:"actions-section",id:i,class:"esri-layer-list__item-actions",hidden:!e.actionsOpen||null},s)}renderActionSection(e,t){return(t&&t.toArray()).map((t=>this.renderAction({item:e,action:t})))}renderActionIcon(e){const{active:t,className:i}=e,s=this._getIconImageStyles(e),r="button"!==e.type||e.image||i?i:"esri-icon-default-action",o={"esri-layer-list__item-action-image":!t&&!!s["background-image"],"esri-icon-loading-indicator":t,"esri-rotating":t};return r&&!t&&(o[r]=!0),C("span",{key:"action-icon","aria-hidden":"true",class:this.classes("esri-layer-list__item-action-icon",o),styles:s})}renderActionTitle(e,t){return t?null:C("span",{key:"action-title",class:"esri-layer-list__item-action-title"},e)}renderAction(e){const{item:t,action:i,singleAction:s}=e,{active:r,disabled:o,title:n}=i,l={[S]:s&&"button"===i.type,"esri-layer-list__item-action":r||!s&&"toggle"!==i.type,"esri-layer-list__action-toggle":!r&&"toggle"===i.type,"esri-layer-list__action-toggle--on":!r&&"toggle"===i.type&&i.value,"esri-disabled-element":o},a=[this.renderActionIcon(i),this.renderActionTitle(n,s)];return s?C("div",{bind:this,"data-item":t,"data-action":i,role:"button",key:`single-action-${i.uid}`,onclick:this._triggerAction,onkeydown:this._triggerAction,classes:l,tabindex:"0",title:n,"aria-label":n},a):C("li",{bind:this,"data-item":t,"data-action":i,key:`action-${i.uid}`,onclick:this._triggerAction,onkeydown:this._triggerAction,classes:l,tabindex:"0",role:"button",title:n,"aria-label":n},a)}_setTooltipReference(e,t){this._tooltipReferenceMap.set(t.uid,e),this.scheduleRender()}_hasMessage(e){return!!e.error||e.incompatible}_hasChildren(e){return!!e.children.length&&!this._hasMessage(e)}_sortNodeRemoved(e){const{_sortableMap:t}=this,i=e.dataset.group,s=t.get(i);s&&s.destroy(),t.delete(i)}_destroySortables(){const{_sortableMap:e,_sortableNodes:t}=this;e.forEach((e=>e&&e.destroy())),e.clear(),t.clear()}_moveLayerFromChildList({to:e,from:t,item:i,newIndex:s}){const r=i["data-item"],o=e["data-item"],n=t["data-item"];this.viewModel.moveListItem(r,n,o,s)}_sortLayers(e){if(!e)return;const t=e.el["data-item"],i=e.toArray();t?b(t,i):y(this.view?.map?.layers,i)}_toggleSorting(e,t){const{_sortableMap:i,selectionEnabled:s}=this,r=i.get(t),o=e["data-item"],n=("root"===t||o.childrenSortable&&v(o))&&s;if(r)r.option("disabled",!n);else if(n){const s=w.create(e,{dataIdAttr:"data-layer-uid",group:{name:t,pull:this._sortableCanPull,put:this._sortableCanPut},filter:'[data-sort-filter="true"]',fallbackTolerance:4,onSort:this._onSortableSort,onEnd:this._onSortableEnd,disabled:!n,chosenClass:"esri-layer-list--chosen"});i.set(t,s)}}_toggleAllSorting(){this._sortableNodes.forEach(((e,t)=>this._toggleSorting(e,t)))}_sortNodeCreated(e){const t=e.dataset.group;t&&(this._sortableNodes.set(t,e),this._toggleSorting(e,t))}_setVisibleItems(e){this.visibleItems=e?.filter((e=>!e.hidden&&(this.visibleElements.errors||!e.error)))}_getSingleActionButton(e){return e.reduce((e=>e)).filter((e=>e&&"button"===e.type)).getItemAt(0)}_focusListItem(e){const{_focusSortUid:t}=this;e&&t&&e["data-item"].layer?.uid===t&&(e.focus(),this._focusSortUid=null)}_watchActionSectionChanges(e,t){const i="action-section"+t;this._handles.add(e.on("change",this.scheduleRender.bind(this)),i),e.forEach((e=>this._renderOnActionChanges(e,t)))}_renderOnActionChanges(e,t){const i="actions"+t;"toggle"!==e.type?"slider"!==e.type?this._handles.add(l((()=>[e?.className,e?.image,e?.id,e?.title,e?.visible]),(()=>this.scheduleRender()),a),i):this._handles.add(l((()=>[e?.className,e?.id,e?.title,e?.visible,e?.value,e?.displayValueEnabled,e?.max,e?.min,e?.step]),(()=>this.scheduleRender()),a),i):this._handles.add(l((()=>[e?.className,e?.image,e?.id,e?.title,e?.visible,e?.value]),(()=>this.scheduleRender()),a),i)}_renderOnItemChanges(e){const t=e.uid,i="items"+t;this._handles.add([l((()=>[e?.actionsOpen,e?.visible,e?.open,e?.updating,e?.connectionStatus,e?.publishing,e?.title,e?.visibleAtCurrentScale,e?.error,e?.visibilityMode,e?.panel,e?.panel?.title,e?.panel?.content,e?.panel?.className,e?.sortable,e?.childrenSortable]),(()=>this.scheduleRender()),c),l((()=>[e?.hidden,e?.error]),(()=>this._setVisibleItems(this.operationalItems))),e.actionsSections.on("change",(()=>this.scheduleRender())),e.children.on("change",(()=>this.scheduleRender()))],i),e.children.forEach((e=>this._renderOnItemChanges(e))),e.actionsSections.forEach((e=>this._watchActionSectionChanges(e,t)))}_itemsChanged(e){this._handles.removeAll(),e.forEach((e=>this._renderOnItemChanges(e))),this._tooltipReferenceMap.clear(),this._setVisibleItems(e),this.scheduleRender()}_filterActions(e){return e.map((e=>e.filter((e=>e.visible))))}_countActions(e){return e.reduce(((e,t)=>e+t.length),0)}_getIconImageStyles(e){const t="esri.widgets.LayerList.ListItemPanel"===e.declaredClass||"esri.support.Action.ActionButton"===e.declaredClass||"esri.support.Action.ActionToggle"===e.declaredClass?e.image:null;return{"background-image":t?`url("${t}")`:null}}_selectionKeydown(e){const t=i(e);if(!["ArrowDown","ArrowUp"].includes(t))return void this._toggleSelection(e);e.stopPropagation();const s=e.currentTarget,r=s["data-item"],{_sortableMap:o,selectedItems:n}=this,l=s.dataset.group,a=o.get(l);if(!a)return;const c=_(r,n),d=a.toArray(),h=e.target,m=d.indexOf(h.dataset.layerUid);if(-1!==m){if("ArrowDown"===t){const e=m+1;if(e>=d.length)return;c?(A(d,m,e),a.sort(d),this._sortLayers(a),this._focusSortUid=r.layer?.uid):(this._focusSortUid=r.layer?.uid,this.scheduleRender())}if("ArrowUp"===t){const e=m-1;if(e<=-1)return;c?(A(d,m,e),a.sort(d),this._sortLayers(a),this._focusSortUid=r.layer?.uid):(this._focusSortUid=r.layer?.uid,this.scheduleRender())}}}_toggleActionsOpen(e){const t=e.currentTarget["data-item"],{actionsOpen:i}=t,s=!i;s&&this.operationalItems.forEach((e=>T(e))),t.actionsOpen=s,e.stopPropagation()}_triggerPanel(e){const t=e.currentTarget["data-panel"];e.stopPropagation(),t&&!t.disabled&&(t.open=!t.open)}_triggerAction(e){const t=e.currentTarget,i=t["data-action"],s=t["data-item"];"toggle"===i.type&&(i.value=!i.value),this.triggerAction(i,s),e.stopPropagation()}_toggleVisibility(e){const t=e.currentTarget,i=t.getAttribute("data-parent-visibility"),s=t["data-item"];i===M.exclusive&&s.visible||(s.visible=!s.visible),e.stopPropagation()}_toggleChildrenClick(e){const t=e.currentTarget["data-item"];t.open=!t.open,e.stopPropagation()}_toggleSelection(e){e.stopPropagation();const{multipleSelectionEnabled:t,selectedItems:i}=this,s=e.currentTarget["data-item"],r=_(s,i),{length:o}=i;if(!t)return!o||r&&1===o?void(r?i.remove?.(r):i.add(s)):(i.removeAll(),void i.add(s));r?i.remove?.(r):i.add(s)}};e([d()],x.prototype,"visibleItems",void 0),e([d()],x.prototype,"iconClass",void 0),e([d()],x.prototype,"label",null),e([d()],x.prototype,"listItemCanGiveFunction",void 0),e([d()],x.prototype,"listItemCanReceiveFunction",void 0),e([d()],x.prototype,"listItemCreatedFunction",null),e([d(),f("esri/widgets/LayerList/t9n/LayerList")],x.prototype,"messages",void 0),e([d(),f("esri/t9n/common")],x.prototype,"messagesCommon",void 0),e([d()],x.prototype,"multipleSelectionEnabled",void 0),e([d()],x.prototype,"operationalItems",null),e([d()],x.prototype,"selectionEnabled",void 0),e([d()],x.prototype,"selectedItems",void 0),e([d()],x.prototype,"view",null),e([k("trigger-action"),d({type:p})],x.prototype,"viewModel",void 0),e([d()],x.prototype,"visibleElements",void 0),e([h("visibleElements")],x.prototype,"castVisibleElements",null),e([I()],x.prototype,"_toggleActionsOpen",null),e([I()],x.prototype,"_triggerPanel",null),e([I()],x.prototype,"_triggerAction",null),e([I()],x.prototype,"_toggleVisibility",null),e([I()],x.prototype,"_toggleChildrenClick",null),e([I()],x.prototype,"_toggleSelection",null),x=e([m("esri.widgets.LayerList")],x);const U=x;export{U as default};
