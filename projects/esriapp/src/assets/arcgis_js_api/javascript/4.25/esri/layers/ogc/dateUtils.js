// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports"],function(g){function m(b){b=(new Date(b)).getTime();return Number.isNaN(b)?null:b}const n=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;g.parseDate=function(b){var a=n.exec(b);if(a?.groups){a=a.groups;var h=+a.year,k=+a.month-1,l=+a.day,d=+(a.hours??0),e=+(a.minutes??0),f=+(a.seconds??0);if(23<d||59<e||59<f)a=null;
else{var c=a.ms??"0";c=c?+c.padEnd(3,"0").substring(0,3):0;a=a.isUTC?Date.UTC(h,k,l,d,e,f,c):a.offsetSign?6E4*("+"===a.offsetSign?-1:1)*(60*+a.offsetHours+ +a.offsetMinutes)+Date.UTC(h,k,l,d,e,f,c):(new Date(h,k,l,d,e,f,c)).getTime();a=Number.isNaN(a)?null:a}}else a=null;return a??m(b)};g.parseJSDate=m;Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});