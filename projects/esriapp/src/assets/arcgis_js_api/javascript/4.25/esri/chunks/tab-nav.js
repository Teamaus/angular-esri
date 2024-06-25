// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","./componentsUtils","./observers"],function(g,c,l){function h(){"undefined"!==typeof customElements&&["calcite-tab-nav"].forEach(a=>{switch(a){case "calcite-tab-nav":customElements.get(a)||customElements.define(a,k)}})}const k=c.proxyCustomElement(class extends c.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteTabChange=c.createEvent(this,"calciteTabChange",6);this.calciteInternalTabChange=c.createEvent(this,"calciteInternalTabChange",6);this.scale=
"m";this.layout="inline";this.position="bottom";this.bordered=!1;this.animationActiveDuration=.3;this.resizeObserver=l.createObserver("resize",()=>{this.activeIndicatorEl.style.transitionDuration="0s";this.updateActiveWidth();this.updateOffsetPosition()});this.handleContainerScroll=()=>{this.activeIndicatorEl.style.transitionDuration="0s";this.updateOffsetPosition()}}async selectedTabChanged(){localStorage&&this.storageId&&void 0!==this.selectedTab&&null!==this.selectedTab&&localStorage.setItem(`calcite-tab-nav-${this.storageId}`,
JSON.stringify(this.selectedTab));this.calciteInternalTabChange.emit({tab:this.selectedTab});this.selectedTabEl=await this.getTabTitleById(this.selectedTab)}selectedTabElChanged(){this.updateOffsetPosition();this.updateActiveWidth();this.activeIndicatorEl.style.transitionDuration=`${this.animationActiveDuration}s`}connectedCallback(){var a;this.parentTabsEl=this.el.closest("calcite-tabs");null===(a=this.resizeObserver)||void 0===a?void 0:a.observe(this.el)}disconnectedCallback(){var a;null===(a=this.resizeObserver)||
void 0===a?void 0:a.disconnect()}componentWillLoad(){const a=`calcite-tab-nav-${this.storageId}`;localStorage&&this.storageId&&localStorage.getItem(a)&&(this.selectedTab=JSON.parse(localStorage.getItem(a)))}componentWillRender(){const {parentTabsEl:a}=this;this.layout=null===a||void 0===a?void 0:a.layout;this.position=null===a||void 0===a?void 0:a.position;this.scale=null===a||void 0===a?void 0:a.scale;this.bordered=null===a||void 0===a?void 0:a.bordered;this.selectedTabEl&&this.updateOffsetPosition()}componentDidRender(){this.tabTitles.length&&
this.tabTitles.every(a=>!a.active)&&!this.selectedTab&&this.tabTitles[0].getTabIdentifier().then(a=>{this.calciteInternalTabChange.emit({tab:a})})}render(){const a=c.getElementDir(this.el),b=`${this.indicatorWidth}px`,e=`${this.indicatorOffset}px`;return c.h(c.Host,{role:"tablist"},c.h("div",{class:"tab-nav",onScroll:this.handleContainerScroll,ref:d=>this.tabNavEl=d},c.h("div",{class:"tab-nav-active-indicator-container",ref:d=>this.activeIndicatorContainerEl=d},c.h("div",{class:"tab-nav-active-indicator",
ref:d=>this.activeIndicatorEl=d,style:"rtl"!==a?{width:b,left:e}:{width:b,right:e}})),c.h("slot",null)))}focusPreviousTabHandler(a){var b=this.getIndexOfTabTitle(a.target,this.enabledTabTitles);b=this.enabledTabTitles[b-1]||this.enabledTabTitles[this.enabledTabTitles.length-1];null===b||void 0===b?void 0:b.focus();a.stopPropagation();a.preventDefault()}focusNextTabHandler(a){var b=this.getIndexOfTabTitle(a.target,this.enabledTabTitles);b=this.enabledTabTitles[b+1]||this.enabledTabTitles[0];null===
b||void 0===b?void 0:b.focus();a.stopPropagation();a.preventDefault()}internalActivateTabHandler(a){this.selectedTab=a.detail.tab?a.detail.tab:this.getIndexOfTabTitle(a.target);a.stopPropagation();a.preventDefault()}activateTabHandler(a){this.calciteTabChange.emit({tab:this.selectedTab});a.stopPropagation();a.preventDefault()}updateTabTitles(a){a.target.active&&(this.selectedTab=a.detail)}globalInternalTabChangeHandler(a){this.syncId&&a.target!==this.el&&a.target.syncId===this.syncId&&this.selectedTab!==
a.detail.tab&&(this.selectedTab=a.detail.tab);a.stopPropagation()}iconStartChangeHandler(){this.updateActiveWidth()}updateOffsetPosition(){var a,b,e,d,f;const m=c.getElementDir(this.el),n=null===(a=this.activeIndicatorContainerEl)||void 0===a?void 0:a.offsetWidth;a=null===(b=this.selectedTabEl)||void 0===b?void 0:b.offsetLeft;b=null===(e=this.selectedTabEl)||void 0===e?void 0:e.offsetWidth;this.indicatorOffset="rtl"!==m?a-(null===(d=this.tabNavEl)||void 0===d?NaN:d.scrollLeft):n-(a+b)+(null===(f=
this.tabNavEl)||void 0===f?void 0:f.scrollLeft)}updateActiveWidth(){var a;this.indicatorWidth=null===(a=this.selectedTabEl)||void 0===a?void 0:a.offsetWidth}getIndexOfTabTitle(a,b=this.tabTitles){return b.indexOf(a)}async getTabTitleById(a){return Promise.all(this.tabTitles.map(b=>b.getTabIdentifier())).then(b=>this.tabTitles[b.indexOf(a)])}get tabTitles(){return c.filterDirectChildren(this.el,"calcite-tab-title")}get enabledTabTitles(){return c.filterDirectChildren(this.el,"calcite-tab-title:not([disabled])")}get el(){return this}static get watchers(){return{selectedTab:["selectedTabChanged"],
selectedTabEl:["selectedTabElChanged"]}}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;display:flex}:host([scale\x3ds]){min-block-size:1.5rem}:host([scale\x3dm]){min-block-size:2rem}:host([scale\x3dl]){min-block-size:2.75rem}.tab-nav{display:flex;inline-size:100%;justify-content:flex-start;overflow:auto}.tab-nav-active-indicator-container{position:absolute;inset-inline:0px;inset-block-end:0px;block-size:0.125rem;inline-size:100%;overflow:hidden}.tab-nav-active-indicator{position:absolute;inset-block-end:0px;display:block;block-size:0.125rem;background-color:var(--calcite-ui-brand);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0, 0, 0.2, 1)}:host([position\x3dbelow]) .tab-nav-active-indicator{inset-block-end:unset;inset-block-start:0px}:host([position\x3dbottom]) .tab-nav-active-indicator{inset-block-end:unset;inset-block-start:0px}:host([position\x3dbelow]) .tab-nav-active-indicator-container{inset-block-start:0px;inset-block-end:unset}:host([position\x3dbottom]) .tab-nav-active-indicator-container{inset-block-end:unset;inset-block-start:0px}:host([bordered]) .tab-nav-active-indicator-container{inset-block-end:unset}:host([bordered][position\x3dbelow]) .tab-nav-active-indicator-container{inset-block-end:0;inset-block-start:unset}:host([bordered][position\x3dbottom]) .tab-nav-active-indicator-container{inset-block-end:0;inset-block-start:unset}@media (forced-colors: active){.tab-nav-active-indicator{background-color:highlight}}"}},
[1,"calcite-tab-nav",{storageId:[513,"storage-id"],syncId:[513,"sync-id"],scale:[1537],layout:[1537],position:[1537],bordered:[1540],indicatorOffset:[1026,"indicator-offset"],indicatorWidth:[1026,"indicator-width"],selectedTab:[32],selectedTabEl:[32]},[[0,"calciteInternalTabsFocusPrevious","focusPreviousTabHandler"],[0,"calciteInternalTabsFocusNext","focusNextTabHandler"],[0,"calciteInternalTabsActivate","internalActivateTabHandler"],[0,"calciteTabsActivate","activateTabHandler"],[0,"calciteInternalTabTitleRegister",
"updateTabTitles"],[16,"calciteInternalTabChange","globalInternalTabChangeHandler"],[0,"calciteInternalTabIconChanged","iconStartChangeHandler"]]]);h();g.TabNav=k;g.defineCustomElement=h});