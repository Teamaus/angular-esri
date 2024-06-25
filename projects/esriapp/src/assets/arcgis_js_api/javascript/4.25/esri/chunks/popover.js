// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ./componentsUtils ./floating-ui ./openCloseComponent ./key ./action ./icon ./loader".split(" "),function(l,c,f,m,u,v,w,x){function p(){"undefined"!==typeof customElements&&["calcite-popover","calcite-action","calcite-icon","calcite-loader"].forEach(a=>{switch(a){case "calcite-popover":customElements.get(a)||customElements.define(a,q);break;case "calcite-action":customElements.get(a)||v.defineCustomElement();break;case "calcite-icon":customElements.get(a)||w.defineCustomElement();break;
case "calcite-loader":customElements.get(a)||x.defineCustomElement()}})}const r=(a,b)=>{const d=`h${a.level}`;delete a.level;return c.h(d,{...a},b)};class y{constructor(){this.registeredElements=new Map;this.registeredElementCount=0;this.queryPopover=a=>{const {registeredElements:b}=this;a=a.find(d=>b.has(d));return b.get(a)};this.togglePopovers=a=>{const b=a.composedPath(),d=this.queryPopover(b);d&&!d.triggerDisabled&&d.toggle();Array.from(this.registeredElements.values()).filter(e=>e!==d&&e.autoClose&&
e.open&&!b.includes(e)).forEach(e=>e.toggle(!1))};this.keyHandler=a=>{!a.defaultPrevented&&u.isActivationKey(a.key)&&this.togglePopovers(a)};this.clickHandler=a=>{c.isPrimaryPointerButton(a)&&this.togglePopovers(a)}}registerElement(a,b){this.registeredElementCount++;this.registeredElements.set(a,b);1===this.registeredElementCount&&this.addListeners()}unregisterElement(a){this.registeredElements.delete(a)&&this.registeredElementCount--;0===this.registeredElementCount&&this.removeListeners()}addListeners(){document.addEventListener("pointerdown",
this.clickHandler,{capture:!0});document.addEventListener("keydown",this.keyHandler,{capture:!0})}removeListeners(){document.removeEventListener("pointerdown",this.clickHandler,{capture:!0});document.removeEventListener("keydown",this.keyHandler,{capture:!0})}}const t=new y,q=c.proxyCustomElement(class extends c.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calcitePopoverBeforeClose=c.createEvent(this,"calcitePopoverBeforeClose",6);this.calcitePopoverClose=c.createEvent(this,
"calcitePopoverClose",6);this.calcitePopoverBeforeOpen=c.createEvent(this,"calcitePopoverBeforeOpen",6);this.calcitePopoverOpen=c.createEvent(this,"calcitePopoverOpen",6);this.disablePointer=this.disableFlip=this.closable=this.dismissible=this.closeButton=this.autoClose=!1;this.offsetDistance=f.defaultOffsetDistance;this.offsetSkidding=0;this.open=!1;this.overlayPositioning="absolute";this.placement="auto";this.triggerDisabled=!1;this.intlClose="Close";this.guid=`calcite-popover-${c.guid()}`;this.openTransitionProp=
"opacity";this.hasLoaded=!1;this.setTransitionEl=a=>{this.transitionEl=a;m.connectOpenCloseComponent(this)};this.setFilteredPlacements=()=>{const {el:a,flipPlacements:b}=this;this.filteredFlipPlacements=b?f.filterComputedPlacements(b,a):null};this.setUpReferenceElement=(a=!0)=>{this.removeReferences();this.effectiveReferenceElement=this.getReferenceElement();f.connectFloatingUI(this,this.effectiveReferenceElement,this.el);const {el:b,referenceElement:d,effectiveReferenceElement:e}=this;a&&d&&!e&&
console.warn(`${b.tagName}: reference-element id "${d}" was not found.`,{el:b});this.addReferences()};this.getId=()=>this.el.id||this.guid;this.setExpandedAttr=()=>{const {effectiveReferenceElement:a,open:b}=this;a&&"setAttribute"in a&&a.setAttribute("aria-expanded",c.toAriaBoolean(b))};this.addReferences=()=>{const {effectiveReferenceElement:a}=this;if(a){var b=this.getId();"setAttribute"in a&&a.setAttribute("aria-controls",b);t.registerElement(a,this.el);this.setExpandedAttr()}};this.removeReferences=
()=>{const {effectiveReferenceElement:a}=this;a&&("removeAttribute"in a&&(a.removeAttribute("aria-controls"),a.removeAttribute("aria-expanded")),t.unregisterElement(a))};this.hide=()=>{this.open=!1};this.storeArrowEl=a=>{this.arrowEl=a;this.reposition(!0)}}handleDismissible(a){this.closable=a}handleClosable(a){this.dismissible=a}flipPlacementsHandler(){this.setFilteredPlacements();this.reposition(!0)}offsetDistanceOffsetHandler(){this.reposition(!0)}offsetSkiddingHandler(){this.reposition(!0)}openHandler(a){a?
this.reposition(!0):f.updateAfterClose(this.el);this.setExpandedAttr()}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}referenceElementHandler(){this.setUpReferenceElement();this.reposition(!0)}connectedCallback(){this.setFilteredPlacements();m.connectOpenCloseComponent(this);const a=this.closable||this.dismissible;a&&this.handleDismissible(a);a&&this.handleClosable(a);this.setUpReferenceElement(this.hasLoaded)}componentDidLoad(){this.referenceElement&&!this.effectiveReferenceElement&&
this.setUpReferenceElement();this.reposition();this.hasLoaded=!0}disconnectedCallback(){this.removeReferences();f.disconnectFloatingUI(this,this.effectiveReferenceElement,this.el);m.disconnectOpenCloseComponent(this)}async reposition(a=!1){const {el:b,effectiveReferenceElement:d,placement:e,overlayPositioning:g,disableFlip:h,filteredFlipPlacements:k,offsetDistance:n,offsetSkidding:z,arrowEl:A}=this;return f.reposition(this,{floatingEl:b,referenceEl:d,overlayPositioning:g,placement:e,disableFlip:h,
flipPlacements:k,offsetDistance:n,offsetSkidding:z,includeArrow:!this.disablePointer,arrowEl:A,type:"popover"},a)}async setFocus(a){var b;const {closeButtonEl:d}=this;"close-button"===a&&d?(c.forceUpdate(d),d.setFocus()):null===(b=this.el)||void 0===b?void 0:b.focus()}async toggle(a=!this.open){this.open=a}getReferenceElement(){const {referenceElement:a,el:b}=this;return("string"===typeof a?c.queryElementRoots(b,{id:a}):a)||null}onBeforeOpen(){this.calcitePopoverBeforeOpen.emit()}onOpen(){this.calcitePopoverOpen.emit()}onBeforeClose(){this.calcitePopoverBeforeClose.emit()}onClose(){this.calcitePopoverClose.emit()}renderCloseButton(){const {closeButton:a,
intlClose:b,heading:d,closable:e}=this;return e||a?c.h("div",{class:"close-button-container"},c.h("calcite-action",{class:"close-button",onClick:this.hide,ref:g=>this.closeButtonEl=g,scale:d?"s":"m",text:b},c.h("calcite-icon",{icon:"x",scale:d?"s":"m"}))):null}renderHeader(){const {heading:a,headingLevel:b}=this,d=a?c.h(r,{class:"heading",level:b||2},a):null;return d?c.h("div",{class:"header"},d,this.renderCloseButton()):null}render(){const {effectiveReferenceElement:a,heading:b,label:d,open:e,disablePointer:g}=
this,h=a&&e,k=!h,n=g?null:c.h("div",{class:"arrow",ref:this.storeArrowEl});return c.h(c.Host,{"aria-hidden":c.toAriaBoolean(k),"aria-label":d,"aria-live":"polite","calcite-hydrated-hidden":k,id:this.getId(),role:"dialog"},c.h("div",{class:{[f.FloatingCSS.animation]:!0,[f.FloatingCSS.animationActive]:h},ref:this.setTransitionEl},n,c.h("div",{class:{["has-header"]:!!b,container:!0}},this.renderHeader(),c.h("div",{class:"content"},c.h("slot",null)),b?null:this.renderCloseButton())))}get el(){return this}static get watchers(){return{dismissible:["handleDismissible"],
closable:["handleClosable"],flipPlacements:["flipPlacementsHandler"],offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}static get style(){return'@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block;position:absolute;z-index:900}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);visibility:hidden;transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:1;border-radius:0.25rem}:host([data-placement^\x3dbottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^\x3dtop]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^\x3dleft]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^\x3dright]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;visibility:visible;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.arrow,.arrow::before{position:absolute;inline-size:8px;block-size:8px;z-index:-1}.arrow::before{content:"";--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-placement^\x3dtop]) .arrow{inset-block-end:-4px}:host([data-placement^\x3dbottom]) .arrow{inset-block-start:-4px}:host([data-placement^\x3dleft]) .arrow{direction:ltr;inset-inline-end:-4px}:host([data-placement^\x3dright]) .arrow{direction:ltr;inset-inline-start:-4px}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-block-end-width:1px;border-style:solid;background-color:var(--calcite-ui-foreground-1);border-block-end-color:var(--calcite-ui-border-3)}.heading{margin:0px;display:block;flex:1 1 auto;align-self:center;white-space:normal;padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);word-wrap:break-word;word-break:break-word}.container{position:relative;display:flex;block-size:100%;flex-direction:row;flex-wrap:nowrap;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1)}.container.has-header{flex-direction:column}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:0.25rem;border-end-end-radius:0.25rem}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%}'}},
[1,"calcite-popover",{autoClose:[516,"auto-close"],closeButton:[516,"close-button"],dismissible:[1540],closable:[1540],disableFlip:[516,"disable-flip"],disablePointer:[516,"disable-pointer"],flipPlacements:[16],heading:[1],headingLevel:[514,"heading-level"],label:[1],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],open:[1540],overlayPositioning:[513,"overlay-positioning"],placement:[513],referenceElement:[1,"reference-element"],triggerDisabled:[516,"trigger-disabled"],
intlClose:[1,"intl-close"],effectiveReferenceElement:[32],reposition:[64],setFocus:[64],toggle:[64]}]);p();l.Heading=r;l.Popover=q;l.defineCustomElement=p});