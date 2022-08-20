"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.voxelprobeWidgetFactory = exports.VoxelProbeWidget = exports.velocityTimeIntegralWidgetFactory = exports.VelocityTimeIntegralWidget = exports.rulerWidgetFactory = exports.RulerWidget = exports.rectangleWidgetFactory = exports.RectangleWidget = exports.polygonWidgetFactory = exports.PolygonWidget = exports.pressureHalfTimeWidgetFactory = exports.PressureHalfTimeWidget = exports.peakVelocityWidgetFactory = exports.PeakVelocityWidget = exports.handleWidgetFactory = exports.HandleWidget = exports.freehandWidgetFactory = exports.FreehandWidget = exports.ellipseWidgetFactory = exports.EllipseWidget = exports.crossrulerWidgetFactory = exports.CrossRulerWidget = exports.birulerWidgetFactory = exports.BiRulerWidget = exports.annotationWidgetFactory = exports.AnnotationWidget = exports.angleWidgetFactory = exports.AngleWidget = exports.WidgetsCss = void 0;
const widgets_css_1 = __importDefault(require("./widgets.css"));
exports.WidgetsCss = widgets_css_1.default;
const widgets_angle_1 = __importStar(require("./widgets.angle"));
exports.AngleWidget = widgets_angle_1.default;
Object.defineProperty(exports, "angleWidgetFactory", { enumerable: true, get: function () { return widgets_angle_1.widgetsAngle; } });
const widgets_annotation_1 = __importStar(require("./widgets.annotation"));
exports.AnnotationWidget = widgets_annotation_1.default;
Object.defineProperty(exports, "annotationWidgetFactory", { enumerable: true, get: function () { return widgets_annotation_1.widgetsAnnotation; } });
const widgets_biruler_1 = __importStar(require("./widgets.biruler"));
exports.BiRulerWidget = widgets_biruler_1.default;
Object.defineProperty(exports, "birulerWidgetFactory", { enumerable: true, get: function () { return widgets_biruler_1.widgetsBiruler; } });
const widgets_crossRuler_1 = __importStar(require("./widgets.crossRuler"));
exports.CrossRulerWidget = widgets_crossRuler_1.default;
Object.defineProperty(exports, "crossrulerWidgetFactory", { enumerable: true, get: function () { return widgets_crossRuler_1.widgetsCrossRuler; } });
const widgets_ellipse_1 = __importStar(require("./widgets.ellipse"));
exports.EllipseWidget = widgets_ellipse_1.default;
Object.defineProperty(exports, "ellipseWidgetFactory", { enumerable: true, get: function () { return widgets_ellipse_1.widgetsEllipse; } });
const widgets_freehand_1 = __importStar(require("./widgets.freehand"));
exports.FreehandWidget = widgets_freehand_1.default;
Object.defineProperty(exports, "freehandWidgetFactory", { enumerable: true, get: function () { return widgets_freehand_1.widgetsFreehand; } });
const widgets_handle_1 = __importStar(require("./widgets.handle"));
exports.HandleWidget = widgets_handle_1.default;
Object.defineProperty(exports, "handleWidgetFactory", { enumerable: true, get: function () { return widgets_handle_1.widgetsHandle; } });
const widgets_peakVelocity_1 = __importStar(require("./widgets.peakVelocity"));
exports.PeakVelocityWidget = widgets_peakVelocity_1.default;
Object.defineProperty(exports, "peakVelocityWidgetFactory", { enumerable: true, get: function () { return widgets_peakVelocity_1.widgetsPeakVelocity; } });
const widgets_pressureHalfTime_1 = __importStar(require("./widgets.pressureHalfTime"));
exports.PressureHalfTimeWidget = widgets_pressureHalfTime_1.default;
Object.defineProperty(exports, "pressureHalfTimeWidgetFactory", { enumerable: true, get: function () { return widgets_pressureHalfTime_1.widgetsPressureHalfTime; } });
const widgets_polygon_1 = __importStar(require("./widgets.polygon"));
exports.PolygonWidget = widgets_polygon_1.default;
Object.defineProperty(exports, "polygonWidgetFactory", { enumerable: true, get: function () { return widgets_polygon_1.widgetsPolygon; } });
const widgets_rectangle_1 = __importStar(require("./widgets.rectangle"));
exports.RectangleWidget = widgets_rectangle_1.default;
Object.defineProperty(exports, "rectangleWidgetFactory", { enumerable: true, get: function () { return widgets_rectangle_1.widgetsRectangle; } });
const widgets_ruler_1 = __importStar(require("./widgets.ruler"));
exports.RulerWidget = widgets_ruler_1.default;
Object.defineProperty(exports, "rulerWidgetFactory", { enumerable: true, get: function () { return widgets_ruler_1.widgetsRuler; } });
const widgets_velocityTimeIntegral_1 = __importStar(require("./widgets.velocityTimeIntegral"));
exports.VelocityTimeIntegralWidget = widgets_velocityTimeIntegral_1.default;
Object.defineProperty(exports, "velocityTimeIntegralWidgetFactory", { enumerable: true, get: function () { return widgets_velocityTimeIntegral_1.widgetsVelocityTimeIntegral; } });
const widgets_voxelProbe_1 = __importStar(require("./widgets.voxelProbe"));
exports.VoxelProbeWidget = widgets_voxelProbe_1.default;
Object.defineProperty(exports, "voxelprobeWidgetFactory", { enumerable: true, get: function () { return widgets_voxelProbe_1.widgetsVoxelprobe; } });
//# sourceMappingURL=widgets.js.map