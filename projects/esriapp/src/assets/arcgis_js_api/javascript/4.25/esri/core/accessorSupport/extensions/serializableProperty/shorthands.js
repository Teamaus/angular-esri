// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){function d(a){a.name&&(a.read?"object"===typeof a.read?void 0===a.read.source&&(a.read.source=a.name):a.read={source:a.name}:a.read={source:a.name},a.write?"object"===typeof a.write?void 0===a.write.target&&(a.write.target=a.name):a.write={target:a.name}:a.write={target:a.name})}function e(a){"boolean"===typeof a.read?a.read={enabled:a.read}:"function"===typeof a.read?a.read={enabled:!0,reader:a.read}:a.read&&"object"===typeof a.read&&void 0===a.read.enabled&&(a.read.enabled=
!0)}function f(a){"boolean"===typeof a.write?a.write={enabled:a.write}:"function"===typeof a.write?a.write={enabled:!0,writer:a.write}:a.write&&"object"===typeof a.write&&void 0===a.write.enabled&&(a.write.enabled=!0)}c.process=function(a){a.json||(a.json={});e(a.json);f(a.json);d(a.json);if(a.json.origins)for(const b in a.json.origins)e(a.json.origins[b]),f(a.json.origins[b]),d(a.json.origins[b]);return!0};Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});