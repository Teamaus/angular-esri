/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{HandleOwner as s}from"../../core/HandleOwner.js";import{g as e,a as i,i as r,e as o}from"../../chunks/maybe.js";import{when as n,initial as p,watch as m,on as a}from"../../core/reactiveUtils.js";import{schedule as l}from"../../core/scheduling.js";import{m as u,a as c,b as h,r as j,o as d}from"../../chunks/timeUtils.js";import{property as g}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as y}from"../../core/accessorSupport/decorators/subclass.js";import k from"../../views/SceneView.js";import f from"../../views/3d/environment/SunLighting.js";import b from"../../views/3d/environment/VirtualLighting.js";import{p as S}from"../../chunks/earthUtils.js";import w from"../Slider/SliderViewModel.js";import U from"../support/DatePickerViewModel.js";import{f as v,a as D}from"../../chunks/timeWidgetUtils.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/object.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/Error.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../chunks/WatchUpdatingTracking.js";import"../../Camera.js";import"../../core/Clonable.js";import"../../chunks/Cyclical.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../core/JSONSupport.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number.js";import"../../chunks/locale.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/aaBoundingRect.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../Viewpoint.js";import"../../chunks/domUtils.js";import"../../core/workers/workers.js";import"../../core/workers/Connection.js";import"../../chunks/Queue.js";import"../../core/workers/RemoteClient.js";import"../../chunks/assets.js";import"../../intl.js";import"../../chunks/messages.js";import"../../chunks/GraphicsCollection.js";import"../../geometry/HeightModelInfo.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../geometry/projection.js";import"../../chunks/mat4.js";import"../../chunks/pe.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../chunks/boundedPlane.js";import"../../chunks/ray.js";import"../../chunks/byteSizeEstimations.js";import"../../chunks/mat3f64.js";import"../../chunks/mat4f64.js";import"../../chunks/quatf64.js";import"../../chunks/vec2f64.js";import"../../chunks/vec4f64.js";import"../../chunks/vector.js";import"../../chunks/lineSegment.js";import"../../chunks/plane.js";import"../../chunks/mathUtils2.js";import"../../chunks/RenderCoordsHelper.js";import"../../chunks/sphere.js";import"../../chunks/ElevationProvider.js";import"../../chunks/ViewingMode.js";import"../../chunks/spatialReferenceSupport.js";import"../../chunks/scaleUtils.js";import"../Popup/PopupViewModel.js";import"../../layers/Layer.js";import"../../symbols/support/symbolUtils.js";import"../../chunks/utils6.js";import"../../chunks/asyncUtils.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/mat4f32.js";import"../../chunks/_commonjsHelpers.js";import"../../chunks/ItemCache.js";import"../../chunks/MemCache.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/utils7.js";import"../../chunks/colorUtils2.js";import"../../chunks/projector.js";import"../../chunks/widgetUtils.js";import"../../chunks/mat2df32.js";import"../../chunks/mat2d.js";import"../../chunks/jsxFactory.js";import"../../chunks/jsxWidgetSupport.js";import"../../chunks/InputManager.js";import"../../chunks/ObservableValue.js";import"../../chunks/layerViewUtils.js";import"../Feature/FeatureViewModel.js";import"../../chunks/throttle.js";import"../Attachments/AttachmentsViewModel.js";import"../../rest/query/support/AttachmentInfo.js";import"../../rest/support/AttachmentQuery.js";import"../../chunks/DataLayerSource.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";import"../../chunks/executeQueryJSON.js";import"../../chunks/utils4.js";import"../../chunks/query.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/normalizeUtilsCommon.js";import"../../chunks/simplify.js";import"../../chunks/utils5.js";import"../../chunks/pbfQueryUtils.js";import"../../chunks/pbf.js";import"../../chunks/OptimizedFeature.js";import"../../chunks/OptimizedFeatureSet.js";import"../../chunks/queryZScale.js";import"../../rest/support/FeatureSet.js";import"../../rest/support/Query.js";import"../../TimeExtent.js";import"../../chunks/FullTextSearch.js";import"../../rest/support/StatisticDefinition.js";import"../../chunks/featureConversionUtils.js";import"../../rest/support/RelationshipQuery.js";import"../../rest/support/TopFeaturesQuery.js";import"../../rest/support/TopFilter.js";import"../../layers/FeatureLayer.js";import"../../renderers/ClassBreaksRenderer.js";import"../../renderers/Renderer.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";import"../../renderers/mixins/VisualVariablesMixin.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties2.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/symbolConversion.js";import"../../renderers/DictionaryRenderer.js";import"../../chunks/DictionaryLoader.js";import"../../chunks/LRUCache.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/support/HeatmapColorStop.js";import"../../chunks/heatmapUtils.js";import"../../renderers/PieChartRenderer.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/UniqueValueRenderer.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValue.js";import"../../renderers/support/UniqueValueClass.js";import"../../renderers/support/UniqueValueGroup.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/styleUtils2.js";import"../../renderers/support/jsonUtils.js";import"../../chunks/MultiOriginJSONSupport.js";import"../../core/sql.js";import"../../form/FormTemplate.js";import"../../form/ExpressionInfo.js";import"../../form/elements/GroupElement.js";import"../../form/elements/Element.js";import"../../form/support/elements.js";import"../../form/elements/FieldElement.js";import"../../form/elements/support/inputs.js";import"../../form/elements/inputs/BarcodeScannerInput.js";import"../../form/elements/inputs/TextInput.js";import"../../form/elements/inputs/Input.js";import"../../form/elements/inputs/ComboBoxInput.js";import"../../form/elements/inputs/DateTimePickerInput.js";import"../../form/elements/inputs/RadioButtonsInput.js";import"../../form/elements/inputs/SwitchInput.js";import"../../form/elements/inputs/TextAreaInput.js";import"../../form/elements/inputs/TextBoxInput.js";import"../../chunks/editsZScale.js";import"../../layers/mixins/APIKeyMixin.js";import"../../chunks/ArcGISService.js";import"../../chunks/arcgisLayerUrl.js";import"../../layers/mixins/BlendLayer.js";import"../../layers/mixins/CustomParametersMixin.js";import"../../chunks/EditBusLayer.js";import"../../layers/mixins/FeatureEffectLayer.js";import"../../layers/support/FeatureEffect.js";import"../../layers/support/FeatureFilter.js";import"../../layers/mixins/FeatureLayerBase.js";import"../../chunks/commonProperties.js";import"../../support/timeUtils.js";import"../../chunks/ElevationInfo.js";import"../../chunks/unitConversionUtils.js";import"../../layers/support/GeometryFieldsInfo.js";import"../../layers/support/LayerFloorInfo.js";import"../../layers/support/Relationship.js";import"../../layers/mixins/FeatureReductionLayer.js";import"../../layers/support/AggregateField.js";import"../../layers/support/ExpressionInfo.js";import"../../chunks/FeatureReduction.js";import"../../layers/support/FeatureReductionBinning.js";import"../../layers/support/LabelClass.js";import"../../chunks/labelUtils.js";import"../../chunks/defaults.js";import"../../chunks/defaultsJSON.js";import"../../layers/support/FeatureReductionCluster.js";import"../../layers/support/FeatureReductionSelection.js";import"../../chunks/clusterUtils.js";import"../../chunks/OperationalLayer.js";import"../../layers/mixins/OrderedLayer.js";import"../../layers/mixins/PortalLayer.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../layers/mixins/PublishableLayer.js";import"../../layers/support/PublishingInfo.js";import"../../layers/mixins/RefreshableLayer.js";import"../../layers/mixins/ScaleRangeLayer.js";import"../../layers/mixins/TemporalLayer.js";import"../../TimeInterval.js";import"../../layers/support/TimeInfo.js";import"../../layers/support/TimeReference.js";import"../../layers/support/FeatureTemplate.js";import"../../layers/support/FeatureType.js";import"../../chunks/fieldProperties.js";import"../../layers/support/FieldsIndex.js";import"../../chunks/labelingInfo.js";import"../../chunks/versionUtils.js";import"../../chunks/styleUtils.js";import"../../support/popupUtils.js";import"../../chunks/actions.js";import"../../chunks/AnchorElementViewModel.js";import"../support/GoTo.js";import"../../chunks/layerUtils.js";import"../../views/View.js";import"../../Map.js";import"../../Basemap.js";import"../../chunks/loadAll.js";import"../../chunks/writeUtils.js";import"../../Ground.js";import"../../chunks/debugFlags.js";import"../../chunks/CollectionFlattener.js";import"../../chunks/editableLayers.js";import"../../chunks/basemapUtils.js";import"../../chunks/collectionUtils2.js";import"../../support/LayersMixin.js";import"../../support/TablesMixin.js";import"../../views/BasemapView.js";import"../../views/Magnifier.js";import"../../chunks/Scheduler.js";import"../../chunks/debugFlags2.js";import"../../chunks/ViewEvents.js";import"../../chunks/IViewEvents.js";import"../../chunks/interfaces3.js";import"../../chunks/screenUtils2.js";import"../../views/input/Input.js";import"../../views/input/gamepad/GamepadSettings.js";import"../../views/input/gamepad/GamepadInputDevice.js";import"../../views/navigation/Navigation.js";import"../../views/navigation/gamepad/GamepadSettings.js";import"../../chunks/heightModelInfoUtils.js";import"../../views/BreakpointsOwner.js";import"../../views/DOMContainer.js";import"../Popup.js";import"../Feature.js";import"../Widget.js";import"../../chunks/uuid.js";import"../Attachments.js";import"../../chunks/unitFormatUtils.js";import"../../chunks/messageBundle.js";import"../../chunks/Heading.js";import"../support/widget.js";import"../../chunks/accessibleHandler.js";import"../../chunks/vmEvent.js";import"../../chunks/themeUtils.js";import"../../chunks/uriUtils.js";import"../../chunks/utils15.js";import"../../chunks/numberUtils.js";import"../../chunks/chartUtils.js";import"../../chunks/Spinner.js";import"../Spinner/SpinnerViewModel.js";import"../../views/GroundView.js";import"../../layers/support/ElevationSampler.js";import"../../chunks/TerrainConst.js";import"../../layers/support/TileInfo.js";import"../../layers/support/LOD.js";import"../../chunks/TileKey.js";import"../../chunks/WebGLRequirements.js";import"../../chunks/capabilities2.js";import"../../chunks/context-util.js";import"../../views/ViewAnimation.js";import"../../webscene/Environment.js";import"../../views/3d/environment/SunnyWeather.js";import"../../chunks/weather.js";import"../../views/3d/environment/CloudyWeather.js";import"../../views/3d/environment/FoggyWeather.js";import"../../views/3d/environment/RainyWeather.js";import"../../views/3d/environment/SnowyWeather.js";import"../../chunks/lightingTypes.js";import"../../webscene/SunLighting.js";import"../../webscene/VirtualLighting.js";import"../../webscene/background/Background.js";import"../../webscene/background/ColorBackground.js";import"../../chunks/vec2.js";import"../../chunks/SSAOHelper.js";import"../../chunks/bufferWriterUtils.js";import"../../chunks/basicInterfaces.js";import"../../chunks/Util2.js";import"../../chunks/Material.js";import"../../chunks/VertexAttribute.js";import"../../chunks/utils20.js";import"../../chunks/doublePrecisionUtils.js";import"../../chunks/triangle.js";import"../../chunks/Indices.js";import"../../chunks/ShaderTechniqueConfiguration.js";import"../../chunks/RenderSlot.js";import"../../chunks/vec3f32.js";import"../../chunks/requestImageUtils.js";import"../../chunks/enums3.js";import"../../chunks/Texture.js";import"../../chunks/FramebufferObject.js";import"../../chunks/VertexElementDescriptor.js";import"../../chunks/BufferView.js";import"../../chunks/OrderIndependentTransparency.js";import"../../chunks/CameraSpace.glsl.js";import"../../chunks/line2.js";import"../../chunks/DefaultBufferWriter.js";import"../../chunks/Octree.js";import"../../chunks/frustum.js";import"../../chunks/InterleavedLayout.js";import"../../chunks/types.js";import"../../chunks/floatRGBA.js";import"../../chunks/triangulationUtils.js";import"../../chunks/earcut.js";import"../../chunks/deduplicate.js";import"../../chunks/MultipassGeometryTest.glsl.js";import"../../chunks/graphicUtils.js";import"../../chunks/dehydratedFeatures.js";import"../../chunks/quantizationUtils.js";import"../../chunks/hydratedFeatures.js";import"../../chunks/interfaces4.js";import"../../chunks/vec2f32.js";import"../../chunks/NestedMap.js";import"../../chunks/Camera.js";import"../../chunks/Intersector.js";import"../../chunks/verticalOffsetUtils.js";import"../../chunks/mat3.js";import"../../chunks/quat.js";import"../../chunks/glUtil.js";import"../../chunks/OutputHighlight.glsl.js";import"../../chunks/GeometryUtil.js";import"../../chunks/HUDMaterial.js";import"../../chunks/VisualVariables.glsl.js";import"../../chunks/GLTextureMaterial.js";import"../../chunks/axisAngleDegrees.js";import"../../chunks/ShadowCastVisualizeTechniqueConfiguration.js";import"../../chunks/ElevationQuery.js";import"../../chunks/edgeUtils.js";import"../../chunks/vec32.js";import"../../chunks/SnappingCandidate.js";import"../../chunks/objectResourceUtils.js";import"../../chunks/devEnvironmentUtils.js";import"../../chunks/DefaultMaterial_COLOR_GAMMA.js";import"../../chunks/Version.js";import"../../chunks/mat3f32.js";import"../../chunks/symbolColorUtils.js";import"../../chunks/VertexColor.glsl.js";import"../../chunks/callExpressionWithFeature.js";import"../../chunks/line.js";import"../../chunks/lineStippleUtils.js";import"../../geometry/support/MeshComponent.js";import"../../geometry/support/MeshMaterial.js";import"../../geometry/support/MeshTexture.js";import"../../chunks/imageUtils.js";import"../../geometry/support/MeshMaterialMetallicRoughness.js";import"../../chunks/projection.js";import"../../chunks/NativeLineMaterial.js";import"../../chunks/ColorMaterial.js";import"../../chunks/viewpointUtils.js";import"../../chunks/ray2.js";import"../../chunks/resources.js";import"../../chunks/labelFormatUtils.js";import"../../chunks/FeatureTileDescriptor3D.js";import"../../chunks/vec4f32.js";import"../../chunks/geometryServiceUtils.js";import"../../chunks/project.js";import"../../rest/support/ProjectParameters.js";import"../../views/3d/support/SceneViewPerformanceInfo.js";import"../../views/3d/support/LayerPerformanceInfo.js";import"../../chunks/terrainUtils.js";import"../../chunks/ElevationQueryTileCache.js";import"../../chunks/LercDecoder.js";import"../../chunks/WorkerHandle.js";import"../../chunks/VectorTile.js";import"../../chunks/enums2.js";import"../../chunks/config.js";import"../../chunks/TiledDisplayObject.js";import"../../chunks/DisplayObject.js";import"../../chunks/TileKey2.js";import"../../chunks/ElevationSamplerData.js";import"../../chunks/DefaultVertexAttributeLayouts.js";import"../../views/2d/ViewState.js";import"../../chunks/mat2df64.js";import"../../chunks/I3SUtil.js";import"../../chunks/I3SBinaryReader.js";import"../../chunks/edgeProcessing.js";import"../../chunks/EdgeWorkerHandle.js";import"../../chunks/workerHelper.js";import"../../chunks/RenderingContext.js";import"../../chunks/ProgramCache.js";import"../../chunks/Program.js";import"../../chunks/intersectorUtilsConversions.js";import"../../chunks/hitTestSelectUtils.js";import"../../views/ui/DefaultUI.js";import"../../views/ui/UI.js";import"../Attribution.js";import"../Attribution/AttributionViewModel.js";import"../Compass.js";import"../Compass/CompassViewModel.js";import"../NavigationToggle.js";import"../NavigationToggle/NavigationToggleViewModel.js";import"../Zoom.js";import"../Zoom/ZoomViewModel.js";import"../support/DateTimeElementViewModel.js";var T;!function(t){t[t.NORTHERN=0]="NORTHERN",t[t.SOUTHERN=1]="SOUTHERN"}(T||(T={}));const C={spring:{dayOfMonth:20,month:2},summer:{dayOfMonth:21,month:5},fall:{dayOfMonth:23,month:8},winter:{dayOfMonth:21,month:11}},_=["spring","summer","fall","winter"];function L(t,s,e){const i=I(s,e),{dayOfMonth:r,month:o}=C[i],n=new Date(t.getTime());return n.setMonth(o,r),n}function I(t,s){return s===T.NORTHERN?t:function(t){const s=_.indexOf(t);return _[(s+2)%4]}(t)}let M=class extends w{constructor(t){super(t),this.items=null,this.currentIndex=0,this.isDropdownOpen=!1}get currentItem(){return null!==this.items&&null!==this.currentIndex&&this.currentIndex<this.items.length?this.items[this.currentIndex]:null}selectItem(t){this.currentIndex=t,this.isDropdownOpen=!1}toggle(){this.isDropdownOpen=!this.isDropdownOpen}};t([g()],M.prototype,"items",void 0),t([g()],M.prototype,"currentIndex",void 0),t([g()],M.prototype,"currentItem",null),t([g()],M.prototype,"isDropdownOpen",void 0),M=t([y("esri.widgets.Daylight.SliderWithDropdown")],M);let P=class extends s{constructor(t){super(t),this.view=null,this.datePickerViewModel=new U,this.timeSliderViewModel=new M({min:0,max:1439,values:[0],labelFormatFunction:v,inputFormatFunction:v}),this.lightingUpdateInterval=200,this._oldLighting=null,this.playSpeedMultiplier=1,this._cachedLightingDateUTC=new Date(0),this._cachedDisplayUTCOffset=0,this._firstInteraction=!0,this._lastLightingUpdate=0,this._nextLightingUpdate=null}initialize(){this.handles.add([n((()=>this.view),(t=>t.when((()=>this._updateLighting(null)))),p),m((()=>e(this._lighting,(t=>"virtual"!==t.type?t.date:null))),(t=>this._scheduleUpdateLighting(t))),a((()=>this._lighting),"timezone-will-change",(t=>this._timezoneWillChange(t)),{onListenerAdd:()=>this._timezoneWillChange(null)}),m((()=>!0===e(this.view,(t=>t.stationary))),(()=>{(this.dayPlaying||this.yearPlaying)&&this._updateSunriseAndSunset()}),p),m((()=>{const t=this.timeSliderViewModel;return{vm:t,state:t.state,sliderPosition:this.timeSliderPosition}}),(({vm:t,state:s,sliderPosition:e})=>{"ready"===s&&t.setValue(0,e)})),m((()=>this.timeSliderViewModel.currentItem?.utcOffset),(t=>this.utcOffset=t)),m((()=>this.timeSliderViewModel.isDropdownOpen),(()=>this.stopPlaying())),m((()=>this.timeSliderViewModel.values),(t=>this.timeSliderPosition=t[0])),m((()=>this.datePickerViewModel.value),(t=>{this.dayPlaying=!1,this.localDate=t})),m((()=>this.localDate),(t=>{this.datePickerViewModel.value.valueOf()!==t.getTime()&&this.datePickerViewModel.set("value",t)}))])}destroy(){this._nextLightingUpdate&&(clearTimeout(this._nextLightingUpdate),this._nextLightingUpdate=null),this.view=null}get isSupported(){return i(this.view)||"3d"===this.view.type}get utcOffset(){return this._cachedDisplayUTCOffset}set utcOffset(t){t!==this.utcOffset&&r(this._lighting)&&"virtual"!==this._lighting.type&&(this._lighting.displayUTCOffset=t,this._updateLighting(null))}get localDate(){return h(this._lightingDateDisplay)}set localDate(t){t.getTime()!==this.localDate.getTime()&&(this._lightingDateDisplay=j(this._lightingDateDisplay,t))}get timeSliderPosition(){var t;return t=this._lightingDateDisplay,c(t,"minutes")}set timeSliderPosition(t){var s;Math.abs(t-this.timeSliderPosition)>1/60&&(this._lightingDateDisplay=(s=this._lightingDateDisplay,u(s,t,"minutes")),this.stopPlaying(),this._enableDirectShadowsIfFirstInteraction())}_timezoneFromCamera(t,s){if(i(s)||!t.cameraTrackingEnabled)return 0;const e=S([s.longitude,s.latitude]);return i(e)?0:Math.round(e.hours+e.minutes/60+e.seconds/3600)}get directShadowsEnabled(){const t=e(this._lighting,(t=>t.directShadowsEnabled));return o(t,!1)}set directShadowsEnabled(t){e(this._lighting,(s=>{s.directShadowsEnabled=t}))}get sunLightingEnabled(){return"sun"===this._lightingType}set sunLightingEnabled(t){const s=this._environment;if(t===this._get("sunLightingEnabled")||i(s))return;const e=s.lighting,o=this._oldLighting;this._oldLighting=e;const n={directShadowsEnabled:e.directShadowsEnabled,ambientOcclusionEnabled:e.ambientOcclusionEnabled,waterReflectionEnabled:e.waterReflectionEnabled,cameraTrackingEnabled:e.cameraTrackingEnabled},p=t?"sun":"virtual";let m;m=r(o)&&o.type===p?o:t?new f:new b,m.set(n),s.lighting=m,t||(this.timeSliderViewModel.isDropdownOpen=!1)}set playingState(t){this.playingState!==t&&this.sunLightingEnabled&&(this._set("playingState",t),"none"!==t&&(this._updateSunriseAndSunset(),this._lastTime=Date.now(),this._play(),this._enableDirectShadowsIfFirstInteraction()))}get dayPlaying(){return"day"===this.playingState}set dayPlaying(t){t?this.playingState="day":this.dayPlaying&&(this.playingState="none")}get yearPlaying(){return"year"===this.playingState}set yearPlaying(t){t?this.playingState="year":this.yearPlaying&&(this.playingState="none")}get currentSeason(){return function(t,s){const e=function(t){const s=t.getTime(),e=L(t,"spring",T.NORTHERN).getTime(),i=L(t,"summer",T.NORTHERN).getTime(),r=L(t,"fall",T.NORTHERN).getTime(),o=L(t,"winter",T.NORTHERN).getTime();return s>=e&&s<i?"spring":s>=i&&s<r?"summer":s>=r&&s<o?"fall":"winter"}(t);return I(e,s)}(this.localDate,this._currentHemisphere)}set currentSeason(t){this.stopPlaying();const s=I(t,this._currentHemisphere);this.localDate=L(this.localDate,s,T.NORTHERN)}get _currentHemisphere(){const t=e(this.view,(t=>t.camera?.position));return i(t)||t.latitude>=0?T.NORTHERN:T.SOUTHERN}get _environment(){return e(this.view,(t=>t.environment))}get _lighting(){return e(this._environment,(t=>t.lighting))}get _lightingType(){return e(this._lighting,(t=>t.type))}get _lightingDateDisplay(){return d(this._cachedLightingDateUTC,this._cachedDisplayUTCOffset,"hours")}set _lightingDateDisplay(t){const s=this._lighting;if(i(s)||!this.sunLightingEnabled||"virtual"===s.type)return;const e=d(t,-this._cachedDisplayUTCOffset,"hours");e.getTime()!==s.date.getTime()&&(s.date=e,this._updateLighting(null))}stopPlaying(){this.playingState="none"}toggleDayPlaying(){this.dayPlaying=!this.dayPlaying}toggleYearPlaying(){this.yearPlaying=!this.yearPlaying}toggleSunLightingEnabled(){this.stopPlaying(),this.sunLightingEnabled=!this.sunLightingEnabled}toggleDirectShadowsEnabled(){this.stopPlaying(),this.directShadowsEnabled=!this.directShadowsEnabled}_enableDirectShadowsIfFirstInteraction(){this._firstInteraction&&(this._firstInteraction=!1,this.directShadowsEnabled=!0)}_updateLighting(t){const s=Date.now();this._lastLightingUpdate=s;const{view:e}=this,r=this._lighting;if(i(e)||i(r)||"virtual"===r.type)return;const o=t||r.date,n=r.displayUTCOffset,p=null!==n?n:this._timezoneFromCamera(r,e.camera?.position);this._cachedLightingDateUTC.getTime()!==o.getTime()&&(this._cachedLightingDateUTC=new Date(o.getTime())),this._cachedDisplayUTCOffset!==p&&(this._cachedDisplayUTCOffset=p)}_timezoneWillChange(t){const s=this._lighting;if(i(s)||"virtual"===s.type||!s.cameraTrackingEnabled)return;let e;if(t)e=t.timezoneOffset;else{if(null!=s.displayUTCOffset)return;e=f.calculateTimezoneOffset(s.positionTimezoneInfo)}s.displayUTCOffset=e,this._scheduleUpdateLighting(null)}_scheduleUpdateLighting(t){if(this._nextLightingUpdate||i(t))return;const s=Date.now()-this._lastLightingUpdate,e=this.lightingUpdateInterval-s;e<=0?l((()=>this._updateLighting(t))):this._nextLightingUpdate=setTimeout((()=>{this._updateLighting(null),this._nextLightingUpdate=null}),e)}_play(){const t=this._lighting;if(!i(t)&&this.sunLightingEnabled&&"virtual"!==t.type&&(this.dayPlaying||this.yearPlaying)){const s=Date.now()-this._lastTime;if(this.dayPlaying){this._lastTime=Date.now();const e=function(t,s,e){const i=12e5,r=3e5,o=18e5,n=2e5;if(isNaN(t.getTime())&&isNaN(s.getTime()))return r;const p=e.getTime(),m=t.getTime(),a=s.getTime(),l=m-36e5,u=m+36e5,c=a-48e5,h=a+24e5;let j=r;return p>=l&&p<=u?j=p-l<=i?o-(p-l)/i*16e5:u-p<=6e5?r-(u-p)/i*2*1e5:n:p>=c&&p<=h?j=p-c<=6e5?r-(p-c)/i*2*1e5:h-p<=i?o-(h-p)/i*16e5:n:(p<m||p>a)&&(j=o),j}(this._sunrise,this._sunset,t.date)*this.playSpeedMultiplier/100*s;if(e>0){let s=new Date(t.date.getTime()+e);if(((s.getUTCHours()+t.displayUTCOffset)%24+24)%24<((t.date.getUTCHours()+t.displayUTCOffset)%24+24)%24){const i=864e5;s=new Date(t.date.getTime()+e-i)}t.date=s}}else if(s>1e3){this._lastTime=Date.now();const s=(t.date.getUTCMonth()+1)%12,e=new Date(t.date.getTime());e.setUTCMonth(s),t.date=e}requestAnimationFrame((()=>this._play()))}}_updateSunriseAndSunset(){const t=this._lighting;if(i(t)||"virtual"===t.type||!this.sunLightingEnabled)return;const s=e(this.view,(t=>t.camera?.position));if(i(s))return;const r=D(t.date,s.latitude,s.longitude,t.displayUTCOffset);this._sunrise=new Date(r.sunrise),this._sunset=new Date(r.sunset)}};t([g({type:k})],P.prototype,"view",void 0),t([g({type:U,nonNullable:!0})],P.prototype,"datePickerViewModel",void 0),t([g({type:M,nonNullable:!0})],P.prototype,"timeSliderViewModel",void 0),t([g()],P.prototype,"isSupported",null),t([g()],P.prototype,"lightingUpdateInterval",void 0),t([g()],P.prototype,"utcOffset",null),t([g()],P.prototype,"localDate",null),t([g()],P.prototype,"timeSliderPosition",null),t([g()],P.prototype,"directShadowsEnabled",null),t([g()],P.prototype,"sunLightingEnabled",null),t([g({type:["none","day","year"],value:"none"})],P.prototype,"playingState",null),t([g()],P.prototype,"dayPlaying",null),t([g()],P.prototype,"yearPlaying",null),t([g()],P.prototype,"playSpeedMultiplier",void 0),t([g()],P.prototype,"currentSeason",null),t([g()],P.prototype,"_lastTime",void 0),t([g()],P.prototype,"_sunrise",void 0),t([g()],P.prototype,"_sunset",void 0),t([g()],P.prototype,"_cachedLightingDateUTC",void 0),t([g()],P.prototype,"_cachedDisplayUTCOffset",void 0),t([g()],P.prototype,"_firstInteraction",void 0),t([g()],P.prototype,"_currentHemisphere",null),t([g()],P.prototype,"_environment",null),t([g()],P.prototype,"_lighting",null),t([g()],P.prototype,"_lightingType",null),t([g()],P.prototype,"_lightingDateDisplay",null),P=t([y("esri.widgets.Daylight.DaylightViewModel")],P);const O=P;export{_ as O,M as S,O as default};
