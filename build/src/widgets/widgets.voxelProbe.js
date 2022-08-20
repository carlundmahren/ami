"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.widgetsVoxelprobe = void 0;
const widgets_base_1 = require("./widgets.base");
const widgets_handle_1 = require("./widgets.handle");
const models_voxel_1 = __importDefault(require("../models/models.voxel"));
const core_utils_1 = __importDefault(require("../core/core.utils"));
/**
 * @module widgets/voxelProbe
 */
const widgetsVoxelprobe = (three = window.THREE) => {
    if (three === undefined || three.Object3D === undefined) {
        return null;
    }
    const Constructor = (0, widgets_base_1.widgetsBase)(three);
    return class extends Constructor {
        constructor(targetMesh, controls, params = {}) {
            super(targetMesh, controls, params);
            this._widgetType = 'VoxelProbe';
            // incoming parameters (optional: worldPosition)
            this._stack = params.stack; // required
            this._container.style.cursor = 'pointer';
            this._controls.enabled = false; // controls should be disabled for widgets with a single handle
            this._initialized = false; // set to true onEnd
            this._active = true;
            this._moving = true;
            this._domHovered = false;
            // dom stuff
            this._label = null;
            // handle (represent voxel)
            const WidgetsHandle = (0, widgets_handle_1.widgetsHandle)(three);
            this._handle = new WidgetsHandle(targetMesh, controls, params);
            this.add(this._handle);
            this._moveHandle = new WidgetsHandle(targetMesh, controls, params);
            this.add(this._moveHandle);
            this._moveHandle.hide();
            this.create();
            // event listeners
            this.onMove = this.onMove.bind(this);
            this.onHover = this.onHover.bind(this);
            this.addEventListeners();
        }
        addEventListeners() {
            this._label.addEventListener('mouseenter', this.onHover);
            this._label.addEventListener('mouseleave', this.onHover);
            this._container.addEventListener('wheel', this.onMove);
        }
        removeEventListeners() {
            this._label.removeEventListener('mouseenter', this.onHover);
            this._label.removeEventListener('mouseleave', this.onHover);
            this._container.removeEventListener('wheel', this.onMove);
        }
        onStart(evt) {
            this._moveHandle.onMove(evt, true);
            this._handle.onStart(evt);
            this._active = this._handle.active || this._domHovered;
            if (this._domHovered) {
                this._moving = true;
                this._controls.enabled = false;
            }
            this.update();
        }
        onMove(evt) {
            if (this._active) {
                const prevPosition = this._moveHandle.worldPosition.clone();
                this._dragged = true;
                this._moveHandle.onMove(evt, true);
                if (this._moving) {
                    this._handle.worldPosition.add(this._moveHandle.worldPosition.clone().sub(prevPosition));
                }
            }
            else {
                this.onHover(null);
            }
            this._handle.onMove(evt);
            this.update();
        }
        onEnd() {
            this._handle.onEnd();
            if (!this._dragged && this._active && this._initialized) {
                this._selected = !this._selected; // change state if there was no dragging
                this._handle.selected = this._selected;
            }
            this._initialized = true;
            this._active = this._handle.active;
            this._dragged = false;
            this._moving = false;
            this.update();
        }
        onHover(evt) {
            if (evt) {
                this.hoverDom(evt);
            }
            this._hovered = this._handle.hovered || this._domHovered;
            this._container.style.cursor = this._hovered ? 'pointer' : 'default';
        }
        hoverDom(evt) {
            this._domHovered = evt.type === 'mouseenter';
        }
        create() {
            this.createVoxel();
            this.createDOM();
        }
        createVoxel() {
            this._voxel = new models_voxel_1.default();
            this._voxel.id = this.id;
        }
        createDOM() {
            this._label = document.createElement('div');
            this._label.className = 'widgets-label';
            // measurements
            let measurementsContainer = document.createElement('div');
            // LPS
            let lpsContainer = document.createElement('div');
            lpsContainer.className = 'lpsPosition';
            measurementsContainer.appendChild(lpsContainer);
            // IJK
            let ijkContainer = document.createElement('div');
            ijkContainer.className = 'ijkPosition';
            measurementsContainer.appendChild(ijkContainer);
            // Value
            let valueContainer = document.createElement('div');
            valueContainer.className = 'value';
            measurementsContainer.appendChild(valueContainer);
            this._label.appendChild(measurementsContainer);
            this._container.appendChild(this._label);
            this.updateDOMColor();
        }
        update() {
            this.updateColor();
            this._handle.update();
            this._worldPosition.copy(this._handle.worldPosition);
            this.updateVoxel(); // set data coordinates && value
            this.updateDOM();
        }
        updateVoxel() {
            this._voxel.worldCoordinates = this._worldPosition;
            this._voxel.dataCoordinates = core_utils_1.default.worldToData(this._stack.lps2IJK, this._worldPosition);
            // update value
            let value = core_utils_1.default.getPixelData(this._stack, this._voxel.dataCoordinates);
            this._voxel.value =
                value === null || this._stack.numberOfChannels > 1
                    ? 'NA' // coordinates outside the image or RGB
                    : core_utils_1.default.rescaleSlopeIntercept(value, this._stack.rescaleSlope, this._stack.rescaleIntercept).toFixed();
        }
        updateDOM() {
            const rasContainer = this._label.querySelector('.lpsPosition');
            const ijkContainer = this._label.querySelector('.ijkPosition');
            const valueContainer = this._label.querySelector('.value');
            rasContainer.innerHTML = `LPS: 
      ${this._voxel.worldCoordinates.x.toFixed(2)} :
      ${this._voxel.worldCoordinates.y.toFixed(2)} :
      ${this._voxel.worldCoordinates.z.toFixed(2)}`;
            ijkContainer.innerHTML = `IJK: 
      ${this._voxel.dataCoordinates.x} :
      ${this._voxel.dataCoordinates.y} :
      ${this._voxel.dataCoordinates.z}`;
            valueContainer.innerHTML = `Value: ${this._voxel.value}`;
            this.updateDOMColor();
            const transform = this.adjustLabelTransform(this._label, this._handle.screenPosition, true);
            this._label.style.transform = `translate3D(${transform.x}px, ${transform.y}px, 0)`;
        }
        updateDOMColor() {
            this._label.style.borderColor = this._color;
        }
        free() {
            this.removeEventListeners();
            this.remove(this._handle);
            this._handle.free();
            this._handle = null;
            this.remove(this._moveHandle);
            this._moveHandle.free();
            this._moveHandle = null;
            this._container.removeChild(this._label);
            this._stack = null;
            this._voxel = null;
            super.free();
        }
        hideDOM() {
            this._label.style.display = 'none';
            this._handle.hideDOM();
        }
        showDOM() {
            this._label.style.display = '';
            this._handle.showDOM();
        }
        get targetMesh() {
            return this._targetMesh;
        }
        set targetMesh(targetMesh) {
            this._targetMesh = targetMesh;
            this._handle.targetMesh = targetMesh;
            this._moveHandle.targetMesh = targetMesh;
            this.update();
        }
        get worldPosition() {
            return this._worldPosition;
        }
        set worldPosition(worldPosition) {
            this._handle.worldPosition.copy(worldPosition);
            this._moveHandle.worldPosition.copy(worldPosition);
            this._worldPosition.copy(worldPosition);
            this.update();
        }
        get active() {
            return this._active;
        }
        set active(active) {
            this._active = active;
            this._controls.enabled = !this._active;
            this.update();
        }
    };
};
exports.widgetsVoxelprobe = widgetsVoxelprobe;
exports.default = widgetsVoxelprobe();
//# sourceMappingURL=widgets.voxelProbe.js.map