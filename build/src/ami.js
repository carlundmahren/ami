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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./cameras/cameras"), exports);
__exportStar(require("./controls/controls"), exports);
__exportStar(require("./core/core"), exports);
__exportStar(require("./geometries/geometries"), exports);
__exportStar(require("./helpers/helpers"), exports);
__exportStar(require("./loaders/loaders"), exports);
__exportStar(require("./models/models"), exports);
__exportStar(require("./parsers/parsers"), exports);
__exportStar(require("./presets/presets"), exports);
__exportStar(require("./shaders/shaders"), exports);
__exportStar(require("./widgets/widgets"), exports);
const packageVersion = require('../package.json').version;
const d3Version = require('../node_modules/three/package.json').version;
window.console.log(`ami ${packageVersion} (three ${d3Version})`);
//# sourceMappingURL=ami.js.map