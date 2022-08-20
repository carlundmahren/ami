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
Object.defineProperty(exports, "__esModule", { value: true });
exports.orbitControlFactory = exports.OrbitControl = exports.trackballOrthoControlFactory = exports.TrackballOrthoControl = exports.trackballControlFactory = exports.TrackballControl = void 0;
const controls_trackball_1 = __importStar(require("./controls.trackball"));
exports.TrackballControl = controls_trackball_1.default;
Object.defineProperty(exports, "trackballControlFactory", { enumerable: true, get: function () { return controls_trackball_1.trackball; } });
const controls_trackballortho_1 = __importStar(require("./controls.trackballortho"));
exports.TrackballOrthoControl = controls_trackballortho_1.default;
Object.defineProperty(exports, "trackballOrthoControlFactory", { enumerable: true, get: function () { return controls_trackballortho_1.trackballOrtho; } });
const controls_orbit_1 = __importStar(require("./controls.orbit"));
exports.OrbitControl = controls_orbit_1.default;
Object.defineProperty(exports, "orbitControlFactory", { enumerable: true, get: function () { return controls_orbit_1.orbit; } });
//# sourceMappingURL=controls.js.map