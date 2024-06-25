// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../intl ../../core/events ../../core/Logger ../../core/maybe ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../Widget ./datePickerUtils ./DatePickerViewModel ./Popover ./decorators/accessibleHandler ./decorators/messageBundle ./jsxFactory ./widgetUtils ../../chunks/datetime ../../intl/date ../../intl/locale".split(" "),
function(v,l,k,x,J,K,B,r,R,S,L,M,y,C,N,z,O,h,n,p,m,A){const t={year:"numeric",month:"2-digit",day:"2-digit"},P=" ;ArrowDown;ArrowLeft;ArrowRight;ArrowUp;End;Enter;Home;PageDown;PageUp".split(";");k=function(D){function w(a,c){var b=D.call(this,a,c)||this;b._activeDate=null;b._calendarNode=null;b._calendarPopover=new N({owner:v._assertThisInitialized(b),placement:"bottom-start",anchorElement:()=>b._rootNode,renderContentFunction:b._renderCalendar});b._inputOrButtonNode=null;b._isOpen=!1;b._requestDayPickerFocusOnCreate=
!1;b._rootNode=null;b.dateInputEnabled=!1;b.messages=null;b.commitOnMonthChange=!1;b.viewModel=new C;b.disabled=!1;b._toggle=b._toggle.bind(v._assertThisInitialized(b));return b}v._inheritsLoose(w,D);var e=w.prototype;e.initialize=function(){this.addHandles(B.watch(()=>({viewModel:this.viewModel,value:this.viewModel?.value}),({viewModel:a,value:c})=>{if(!this.destroyed&&a&&!K.isNone(this.onChange))this.onChange(c)},B.sync))};e.destroy=function(){this._calendarPopover.destroy()};e.render=function(){return h.tsx("div",
{afterCreate:n.storeNode,bind:this,class:this.classes("esri-date-picker","esri-widget"),"data-node-ref":"_rootNode"},this.dateInputEnabled?this.renderInputAndButtonMode():this.renderButtonOnlyMode())};e.renderButtonOnlyMode=function(){const a=m.formatDate(this.viewModel.value,t),{disabled:c,_isOpen:b,messages:f}=this;return h.tsx("div",{key:`date-button-${c}`,afterCreate:n.storeNode,"aria-controls":b?this._getCalendarId():null,"aria-expanded":b.toString(),"aria-haspopup":"true","aria-label":f.setDate,
"aria-pressed":b.toString(),bind:this,class:this.classes("esri-widget--button","esri-select","esri-date-picker__calendar-toggle"),"data-node-ref":"_inputOrButtonNode",onclick:this._toggle,onkeydown:this._handleDateButtonKeyDown,role:"button",tabIndex:c?null:0},h.tsx("span",{class:"esri-date-picker__date"},a))};e.renderInputAndButtonMode=function(){const a=m.formatDate(this.viewModel.value,t),{_isOpen:c,messages:b}=this;return h.tsx("div",{class:this.classes("esri-date-picker__input")},h.tsx("input",
{afterCreate:n.storeNode,"data-node-ref":"_inputOrButtonNode","aria-controls":c?this._getCalendarId():null,"aria-haspopup":"true","aria-label":b.setDate,bind:this,class:this.classes("esri-date-picker__text-input","esri-input"),key:"date-input",onblur:this._handleDateInputBlur,onclick:this._handleDateInputClick,onkeydown:this._handleDateInputKeyDown,type:"text",value:a}),h.tsx("span",{"aria-hidden":"true",class:this.classes("esri-date-picker__icon--leading","esri-icon-calendar")}))};e._handleDateInputClick=
function(){this._open(this.viewModel.value,!1)};e._handleDateInputKeyDown=function(a){const {key:c}=a;this._isOpen?"Enter"===c?this._handleDateText(a):"Escape"===c&&this._close():"ArrowDown"===c&&(this._open(this.viewModel.value),a.preventDefault())};e._handleDateButtonKeyDown=function(a){const {key:c,shiftKey:b}=a;this._isOpen&&"Tab"===c&&b?this._close():n.isActivationKey(c)&&this._toggle()};e._handleDateInputBlur=function(a){this._isOpen||this._handleDateText(a)};e._handleDateText=function(a){a=
a.currentTarget;try{var c=y.parseDateIntoParts(a.value,t)}catch(b){J.getLogger(this.declaredClass).warn(b);a.value=m.formatDate(this.viewModel.value,t);return}c=p.DateTime.fromObject(c);c.isValid?(this.viewModel.value=c.toJSDate(),this._activeDate=c):a.value=m.formatDate(this.viewModel.value,t)};e._handleDatePickerKeydown=function(a){"Escape"===x.eventKey(a)&&(this._close(),a.preventDefault(),a.stopPropagation())};e._renderCalendar=function(){const a=this._activeDate,c=p.DateTime.fromJSDate(this.viewModel.value);
return h.tsx("div",{afterCreate:n.storeNode,bind:this,class:this.classes("esri-date-picker__calendar","esri-widget"),"data-node-ref":"_calendarNode",id:this._getCalendarId(),key:"esri-date-picker__calendar",onkeydown:this._handleDatePickerKeydown},this._renderMonthPicker(a),this._renderDayPicker(a,c),this._renderYearPicker(a))};e._getCalendarId=function(){return`date-picker__calendar--${this.id}`};e._renderMonthPicker=function(a){var c=n.isRTL(this.container);const b=c?"esri-icon-right":"esri-icon-left";
c=c?"esri-icon-left":"esri-icon-right";const f=p.Info.months("long",{locale:A.getLocale()}).map((q,u)=>h.tsx("option",{selected:a.month-1===u,value:u.toString()},q)),{disabled:d,messages:g}=this;return h.tsx("div",{class:"esri-date-picker__month-picker"},h.tsx("div",{key:`previous-month-${d}`,"aria-label":g.goToPreviousMonth,bind:this,class:"esri-widget--button",onclick:this._setPreviousMonth,onkeydown:this._handlePreviousMonthKeyDown,role:"button",tabIndex:d?null:0,title:g.goToPreviousMonth},h.tsx("span",
{"aria-hidden":"true",class:b})),h.tsx("select",{"aria-live":"assertive","aria-label":g.selectMonth,bind:this,class:this.classes("esri-date-picker__month-dropdown","esri-select"),disabled:d,id:`${this.id}__month-picker`,onchange:this._setMonth,onkeydown:this._setMonth,title:g.selectMonth},f),h.tsx("div",{key:`next-month-${d}`,"aria-label":g.goToNextMonth,bind:this,class:"esri-widget--button",onclick:this._setNextMonth,onkeydown:this._setNextMonth,role:"button",tabIndex:d?null:0,title:g.goToNextMonth},
h.tsx("span",{"aria-hidden":"true",class:c})))};e._renderDayPicker=function(a,c){const b=this._getWeekLabels(),f=this._getDayId(a);a=this._renderMonth(a,c);const {id:d,disabled:g}=this;return h.tsx("div",{key:`day-picker-${g}`,afterCreate:this._handleDayPickerCreate,"aria-activedescendant":f,"aria-labelledby":`${d}__month-picker ${d}__selected-year`,bind:this,class:"esri-date-picker__day-picker",id:`${d}__day-picker`,onkeydown:this._handleDayPickerKeydown,role:"grid",tabIndex:g?null:0},h.tsx("div",
{class:"esri-date-picker__week-item",role:"row"},b.map(q=>h.tsx("div",{"aria-label":q.name,class:this.classes("esri-date-picker__day-item","esri-date-picker__day-item--header"),role:"columnheader",title:q.name},q.abbr))),a)};e._getDayId=function(a){return`${this.id}__${m.formatDate(a.valueOf(),t)}`};e._handleDayPickerCreate=function(a){this._requestDayPickerFocusOnCreate&&(this._requestDayPickerFocusOnCreate=!1,a.focus())};e._getWeekLabels=function(){const a=[],c={weekday:"long"},b={weekday:"narrow"};
let f=p.DateTime.now().set({weekday:y.getFirstDayOfWeek(A.getLocale())});for(let d=0;7>d;d++)a.push({name:m.formatDate(f.valueOf(),c),abbr:m.formatDate(f.valueOf(),b)}),f=f.plus({day:1});return a};e._handleDayPickerKeydown=function(a){const {ctrlKey:c,shiftKey:b}=a,f=x.eventKey(a);if(P.includes(f)){var d=this._activeDate;"ArrowLeft"===f?d=d.minus({day:1}):"ArrowRight"===f?d=d.plus({day:1}):"ArrowUp"===f?d=d.minus({week:1}):"ArrowDown"===f?d=d.plus({week:1}):"PageUp"===f?d=d.minus({[b?"year":"month"]:1}):
"PageDown"===f?d=d.plus({[b?"year":"month"]:1}):"Home"===f?d=d.startOf(c?"year":"month"):"End"===f?d=d.endOf(c?"year":"month"):n.isActivationKey(f)&&(this.viewModel.value=d.toJSDate(),this._close());this._activeDate=d;a.preventDefault();a.stopPropagation()}};e._renderMonth=function(a,c){const b=p.DateTime.now(),f=a.startOf("month"),d=a.endOf("month");let g=f.minus({day:y.getLocaleDayOfWeek(A.getLocale(),f.weekday)});const q=[];for(let E=0;6>E;E++){const F=[];for(let G=0;7>G;G++){const H=g.day,I=g.hasSame(a,
"day");var u=g.hasSame(c,"day");const Q=this._getDayId(g);u={["esri-date-picker__day-item--nearby-month"]:!p.Interval.fromDateTimes(f,d).contains(g),["esri-date-picker__day-item--today"]:g.hasSame(b,"day"),["esri-date-picker__day-item--active"]:I,["esri-date-picker__day-item--selected"]:u};F.push(h.tsx("div",{"aria-label":H.toString(),"aria-selected":I.toString(),bind:this,class:this.classes("esri-date-picker__day-item",u),"data-iso-date":g.toISO(),id:Q,onclick:this._handleSelectedDate,onkeydown:this._handleSelectedDate,
role:"gridcell"},H));g=g.plus({day:1})}q.push(h.tsx("div",{class:"esri-date-picker__week-item",role:"row"},F))}return q};e._renderYearPicker=function(a){const c={year:"numeric"},b=m.formatDate(a.valueOf(),c),f=m.formatDate(a.plus({year:1}).valueOf(),c);a=m.formatDate(a.minus({year:1}).valueOf(),c);const {disabled:d,messages:g}=this;return h.tsx("div",{class:"esri-date-picker__year-picker"},h.tsx("div",{key:`previous-year-${d}`,"aria-label":g.goToPreviousYear,bind:this,class:"esri-date-picker__year-picker-item",
onclick:this._setPreviousYear,onkeydown:this._setPreviousYear,tabIndex:d?null:0,title:g.goToPreviousYear},a),h.tsx("div",{class:this.classes("esri-date-picker__year-picker-item","esri-date-picker__year-picker-item--selected"),id:`${this.id}__selected-year`},b),h.tsx("div",{key:`next-year-${d}`,"aria-label":g.goToNextYear,bind:this,class:"esri-date-picker__year-picker-item",onclick:this._setNextYear,onkeydown:this._handleNextYearKeyDown,tabIndex:d?null:0,title:g.goToNextYear},f))};e._toggle=function(){this._isOpen?
this._close():this._open(this.viewModel.value)};e._setMonth=function(a){this._activeDate=this._activeDate.set({month:Number(a.target.value)+1});this.commitOnMonthChange&&(this.viewModel.value=this._activeDate.toJSDate())};e._close=function(a=!0){this._activeDate=null;this._isOpen=!1;this._calendarPopover.open=!1;this._pageClickHandler.pause();a&&this._inputOrButtonNode.focus()};e._open=function(a,c=!0){this._activeDate=p.DateTime.fromJSDate(a);this._isOpen=!0;this._calendarPopover.open=!0;this._requestDayPickerFocusOnCreate=
c;this._pageClickHandler||(this._pageClickHandler=x.pausable(document,"click",({target:b})=>{this._calendarNode?.contains(b)||this._rootNode?.contains(b)||this._close()}),this.addHandles(this._pageClickHandler));this._pageClickHandler.resume()};e._setPreviousMonth=function(){this._activeDate=this._activeDate.minus({month:1});this.commitOnMonthChange&&(this.viewModel.value=this._activeDate.toJSDate())};e._handlePreviousMonthKeyDown=function(a){"Tab"===a.key&&a.shiftKey?(a.preventDefault(),this._close()):
n.isActivationKey(a.key)&&this._setPreviousMonth()};e._setNextMonth=function(){this._activeDate=this._activeDate.plus({month:1});this.commitOnMonthChange&&(this.viewModel.value=this._activeDate.toJSDate())};e._setPreviousYear=function(){this._activeDate=this._activeDate.minus({year:1})};e._setNextYear=function(){this._activeDate=this._activeDate.plus({year:1})};e._handleNextYearKeyDown=function(a){"Tab"!==a.key||a.shiftKey?n.isActivationKey(a.key)&&this._setNextYear():(a.preventDefault(),this._close())};
e._handleSelectedDate=function(a){this.viewModel.value=p.DateTime.fromISO(a.target.getAttribute("data-iso-date")).toJSDate();this._close()};v._createClass(w,[{key:"value",get:function(){return this.viewModel.value},set:function(a){this.viewModel.value=a}}]);return w}(M);l.__decorate([r.property()],k.prototype,"dateInputEnabled",void 0);l.__decorate([r.property(),O.messageBundle("esri/widgets/support/t9n/DatePicker")],k.prototype,"messages",void 0);l.__decorate([r.property()],k.prototype,"value",null);
l.__decorate([r.property()],k.prototype,"commitOnMonthChange",void 0);l.__decorate([r.property({type:C})],k.prototype,"viewModel",void 0);l.__decorate([r.property()],k.prototype,"onChange",void 0);l.__decorate([r.property()],k.prototype,"disabled",void 0);l.__decorate([z.accessibleHandler()],k.prototype,"_setNextMonth",null);l.__decorate([z.accessibleHandler()],k.prototype,"_setPreviousYear",null);l.__decorate([z.accessibleHandler()],k.prototype,"_handleSelectedDate",null);return k=l.__decorate([L.subclass("esri.widgets.support.DatePicker")],
k)});