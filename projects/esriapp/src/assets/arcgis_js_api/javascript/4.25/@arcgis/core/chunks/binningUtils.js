/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import r from"../core/Error.js";function i(i,e){if(!i.view)throw new r(`${e}:missing-parameters`,"'view' parameter is required for binning");if(i.sqlExpression)throw new r(`${e}:invalid-parameters`,"'sqlExpression' parameter is not supported for binning");if("3d"===i.view.type)throw new r(`${e}:invalid-parameters`,"3d view is not supported for binning")}export{i as v};
