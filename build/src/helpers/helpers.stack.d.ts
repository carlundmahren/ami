declare const _default: {
    new (stack: any): {
        _stack: any;
        _bBox: {
            _stack: any;
            _visible: boolean;
            _color: number;
            _material: any;
            _geometry: any;
            _mesh: any;
            _meshStack: any;
            visible: boolean;
            color: number;
            _create(): void;
            _update(): void;
            dispose(): void;
        };
        _slice: {
            _stack: any;
            _invert: any;
            _lut: string;
            _lutTexture: any;
            _intensityAuto: boolean;
            _interpolation: number;
            _index: number;
            _windowWidth: any;
            _windowCenter: any;
            _opacity: number;
            _rescaleSlope: any;
            _rescaleIntercept: any;
            _spacing: number;
            _thickness: number;
            _thicknessMethod: number;
            _lowerThreshold: any;
            _upperThreshold: any;
            _canvasWidth: number;
            _canvasHeight: number;
            _borderColor: any;
            _planePosition: any;
            _planeDirection: any;
            _aaBBspace: string;
            _material: any;
            _textures: any[];
            _shadersFragment: typeof import("../ami").DataFragmentShader;
            _shadersVertex: typeof import("../ami").DataVertexShader;
            _uniforms: {
                uTextureSize: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uTextureContainer: {
                    type: string;
                    value: any[];
                    typeGLSL: string;
                    length: number;
                };
                uDataDimensions: {
                    type: string;
                    value: number[];
                    typeGLSL: string;
                };
                uWorldToData: {
                    type: string;
                    value: import("three").Matrix4;
                    typeGLSL: string;
                };
                uWindowCenterWidth: {
                    type: string;
                    value: number[];
                    typeGLSL: string;
                    length: number;
                };
                uLowerUpperThreshold: {
                    type: string;
                    value: number[];
                    typeGLSL: string;
                    length: number;
                };
                uRescaleSlopeIntercept: {
                    type: string;
                    value: number[];
                    typeGLSL: string;
                    length: number;
                };
                uNumberOfChannels: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uBitsAllocated: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uInvert: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uLut: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uTextureLUT: {
                    type: string;
                    value: any[];
                    typeGLSL: string;
                };
                uLutSegmentation: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uTextureLUTSegmentation: {
                    type: string;
                    value: any[];
                    typeGLSL: string;
                };
                uPixelType: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                /**
                 * Get stack.
                 *
                 * @type {ModelsStack}
                 */
                uPackedPerPixel: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uInterpolation: {
                    /**
                     * Set stack.
                     *
                     * @type {ModelsStack}
                     */
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uCanvasWidth: {
                    type: string;
                    value: number; /**
                     * Get bounding box helper.
                     *
                     * @type {HelpersBoundingBox}
                     */
                    typeGLSL: string;
                };
                uCanvasHeight: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                /**
                 * Get slice helper.
                 *
                 * @type {HelpersSlice}
                 */
                uBorderColor: {
                    type: string;
                    value: number[];
                    typeGLSL: string;
                };
                uBorderWidth: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uBorderMargin: {
                    type: string;
                    value: number; /**
                     * Set/get current slice index.<br>
                     * Sets outOfBounds flag to know if target index is in/out stack bounding box.<br>
                     * <br>
                     * Internally updates the sliceHelper index and position. Also updates the
                     * borderHelper with the updated sliceHelper.
                     *
                     * @type {number}
                     */
                    typeGLSL: string;
                };
                uBorderDashLength: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uOpacity: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uSpacing: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uThickness: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uThicknessMethod: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
            };
            _geometry: any;
            _mesh: any;
            _visible: boolean;
            stack: any;
            spacing: number;
            thickness: number;
            thicknessMethod: number;
            windowWidth: any;
            windowCenter: any;
            opacity: number;
            upperThreshold: any;
            lowerThreshold: any; /**
             * Set/get the outOfBound flag.
             *
             * @type {boolean}
             */
            rescaleSlope: any;
            rescaleIntercept: any;
            invert: any;
            lut: string;
            lutTexture: any;
            intensityAuto: boolean;
            interpolation: number;
            index: number;
            planePosition: any;
            planeDirection: any;
            halfDimensions: any;
            _halfDimensions: any;
            center: any;
            _center: any;
            aabbSpace: string;
            mesh: any;
            geometry: any;
            canvasWidth: number;
            canvasHeight: number;
            borderColor: any;
            /**
             * Prepare a stack for visualization. (image to world transform, frames order,
             * pack data into 8 bits textures, etc.)
             *
             * @private
             */
            _init(): void;
            _toAABB: any;
            _create(): void;
            updateIntensitySettings(): void;
            updateIntensitySettingsUniforms(): void;
            updateIntensitySetting(setting: any): void;
            _update(): void;
            dispose(): void;
            cartesianEquation(): any;
            _createMaterial(extraOptions: any): void;
            _updateMaterial(): void;
            _prepareTexture(): void;
        };
        _border: {
            _helpersSlice: any;
            _visible: boolean;
            _color: number;
            _material: any;
            _geometry: any;
            _mesh: any;
            helpersSlice: any;
            visible: boolean;
            color: number;
            _create(): void;
            _update(): void;
            dispose(): void;
        };
        _dummy: any;
        _orientation: number;
        _index: number;
        _uniforms: any;
        _autoWindowLevel: boolean;
        _outOfBounds: boolean;
        _orientationMaxIndex: number;
        _orientationSpacing: number;
        _canvasWidth: number;
        _canvasHeight: number;
        _borderColor: any;
        /**
         * Get stack.
         *
         * @type {ModelsStack}
         */
        stack: ModelsStack;
        /**
         * Get bounding box helper.
         *
         * @type {HelpersBoundingBox}
         */
        readonly bbox: HelpersBoundingBox;
        /**
         * Get slice helper.
         *
         * @type {HelpersSlice}
         */
        readonly slice: HelpersSlice;
        /**
         * Get border helper.
         *
         * @type {HelpersSlice}
         */
        readonly border: HelpersSlice;
        /**
         * Set/get current slice index.<br>
         * Sets outOfBounds flag to know if target index is in/out stack bounding box.<br>
         * <br>
         * Internally updates the sliceHelper index and position. Also updates the
         * borderHelper with the updated sliceHelper.
         *
         * @type {number}
         */
        index: number;
        /**
         * Set/get current slice orientation.<br>
         * Values: <br>
         *   - 0: acquisition direction (slice normal is z_cosine)<br>
         *   - 1: next direction (slice normal is x_cosine)<br>
         *   - 2: next direction (slice normal is y_cosine)<br>
         *   - n: set orientation to 0<br>
         * <br>
         * Internally updates the sliceHelper direction. Also updates the
         * borderHelper with the updated sliceHelper.
         *
         * @type {number}
         */
        orientation: number;
        /**
         * Set/get the outOfBound flag.
         *
         * @type {boolean}
         */
        outOfBounds: boolean;
        /**
         * Set/get the orientationMaxIndex.
         *
         * @type {number}
         */
        orientationMaxIndex: number;
        /**
         * Set/get the orientationSpacing.
         *
         * @type {number}
         */
        orientationSpacing: number;
        canvasWidth: number;
        canvasHeight: number;
        borderColor: any;
        /**
         * Initial setup, including stack prepare, bbox prepare, slice prepare and
         * border prepare.
         *
         * @private
         */
        _create(): void;
        _computeOrientationSpacing(): void;
        _computeOrientationMaxIndex(): void;
        /**
         * Given orientation, check if index is in/out of bounds.
         *
         * @private
         */
        _isIndexOutOfBounds(): void;
        /**
         * Prepare a stack for visualization. (image to world transform, frames order,
         * pack data into 8 bits textures, etc.)
         *
         * @private
         */
        _prepareStack(): void;
        /**
         * Setup bounding box helper given prepared stack and add bounding box helper
         * to stack helper.
         *
         * @private
         */
        _prepareBBox(): void;
        /**
         * Setup border helper given slice helper and add border helper
         * to stack helper.
         *
         * @private
         */
        _prepareBorder(): void;
        /**
         * Setup slice helper given prepared stack helper and add slice helper
         * to stack helper.
         *
         * @private
         */
        _prepareSlice(): void;
        /**
         * Compute slice index depending on orientation.
         *
         * @param {Vector3} indices - Indices in each direction.
         *
         * @returns {number} Slice index according to current orientation.
         *
         * @private
         */
        _prepareSliceIndex(indices: Vector3): number;
        /**
         * Compute slice position depending on orientation.
         * Sets index in proper location of reference position.
         *
         * @param {Vector3} rPosition - Reference position.
         * @param {number} index - Current index.
         *
         * @returns {number} Slice index according to current orientation.
         *
         * @private
         */
        _prepareSlicePosition(rPosition: Vector3, index: number): number;
        /**
         * Compute slice direction depending on orientation.
         *
         * @param {number} orientation - Slice orientation.
         *
         * @returns {Vector3} Slice direction
         *
         * @private
         */
        _prepareDirection(orientation: number): Vector3;
        /**
         * Release the stack helper memory including the slice memory.
         *
         * @public
         */
        dispose(): void;
    };
};
export default _default;
/**
 * Helper to easily display and interact with a stack.<br>
 *<br>
 * Defaults:<br>
 *   - orientation: 0 (acquisition direction)<br>
 *   - index: middle slice in acquisition direction<br>
 *<br>
 * Features:<br>
 *   - slice from the stack (in any direction)<br>
 *   - slice border<br>
 *   - stack bounding box<br>
 *<br>
 * Live demo at: {@link http://jsfiddle.net/gh/get/library/pure/fnndsc/ami/tree/master/lessons/01#run|Lesson 01}
 *
 * @example
 * let stack = new VJS.Models.Stack();
 * ... // prepare the stack
 *
 * let helpersStack = new VJS.Helpers.Stack(stack);
 * stackHelper.bbox.color = 0xF9F9F9;
 * stackHelper.border.color = 0xF9F9F9;
 *
 * let scene = new THREE.Scene();
 * scene.add(stackHelper);
 *
 * @see module:helpers/border
 * @see module:helpers/boundingbox
 * @see module:helpers/slice
 *
 * @module helpers/stack
 */
export function helpersStack(three?: any): {
    new (stack: any): {
        _stack: any;
        _bBox: {
            _stack: any;
            _visible: boolean;
            _color: number;
            _material: any;
            _geometry: any;
            _mesh: any;
            _meshStack: any;
            visible: boolean;
            color: number;
            _create(): void;
            _update(): void;
            dispose(): void;
        };
        _slice: {
            _stack: any;
            _invert: any;
            _lut: string;
            _lutTexture: any;
            _intensityAuto: boolean;
            _interpolation: number;
            _index: number;
            _windowWidth: any;
            _windowCenter: any;
            _opacity: number;
            _rescaleSlope: any;
            _rescaleIntercept: any;
            _spacing: number;
            _thickness: number;
            _thicknessMethod: number;
            _lowerThreshold: any;
            _upperThreshold: any;
            _canvasWidth: number;
            _canvasHeight: number;
            _borderColor: any;
            _planePosition: any;
            _planeDirection: any;
            _aaBBspace: string;
            _material: any;
            _textures: any[];
            _shadersFragment: typeof import("../ami").DataFragmentShader;
            _shadersVertex: typeof import("../ami").DataVertexShader;
            _uniforms: {
                uTextureSize: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uTextureContainer: {
                    type: string;
                    value: any[];
                    typeGLSL: string;
                    length: number;
                };
                uDataDimensions: {
                    type: string;
                    value: number[];
                    typeGLSL: string;
                };
                uWorldToData: {
                    type: string;
                    value: import("three").Matrix4;
                    typeGLSL: string;
                };
                uWindowCenterWidth: {
                    type: string;
                    value: number[];
                    typeGLSL: string;
                    length: number;
                };
                uLowerUpperThreshold: {
                    type: string;
                    value: number[];
                    typeGLSL: string;
                    length: number;
                };
                uRescaleSlopeIntercept: {
                    type: string;
                    value: number[];
                    typeGLSL: string;
                    length: number;
                };
                uNumberOfChannels: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uBitsAllocated: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uInvert: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uLut: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uTextureLUT: {
                    type: string;
                    value: any[];
                    typeGLSL: string;
                };
                uLutSegmentation: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uTextureLUTSegmentation: {
                    type: string;
                    value: any[];
                    typeGLSL: string;
                };
                uPixelType: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                /**
                 * Get stack.
                 *
                 * @type {ModelsStack}
                 */
                uPackedPerPixel: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uInterpolation: {
                    /**
                     * Set stack.
                     *
                     * @type {ModelsStack}
                     */
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uCanvasWidth: {
                    type: string;
                    value: number; /**
                     * Get bounding box helper.
                     *
                     * @type {HelpersBoundingBox}
                     */
                    typeGLSL: string;
                };
                uCanvasHeight: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                /**
                 * Get slice helper.
                 *
                 * @type {HelpersSlice}
                 */
                uBorderColor: {
                    type: string;
                    value: number[];
                    typeGLSL: string;
                };
                uBorderWidth: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uBorderMargin: {
                    type: string;
                    value: number; /**
                     * Set/get current slice index.<br>
                     * Sets outOfBounds flag to know if target index is in/out stack bounding box.<br>
                     * <br>
                     * Internally updates the sliceHelper index and position. Also updates the
                     * borderHelper with the updated sliceHelper.
                     *
                     * @type {number}
                     */
                    typeGLSL: string;
                };
                uBorderDashLength: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uOpacity: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uSpacing: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uThickness: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uThicknessMethod: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
            };
            _geometry: any;
            _mesh: any;
            _visible: boolean;
            stack: any;
            spacing: number;
            thickness: number;
            thicknessMethod: number;
            windowWidth: any;
            windowCenter: any;
            opacity: number;
            upperThreshold: any;
            lowerThreshold: any; /**
             * Set/get the outOfBound flag.
             *
             * @type {boolean}
             */
            rescaleSlope: any;
            rescaleIntercept: any;
            invert: any;
            lut: string;
            lutTexture: any;
            intensityAuto: boolean;
            interpolation: number;
            index: number;
            planePosition: any;
            planeDirection: any;
            halfDimensions: any;
            _halfDimensions: any;
            center: any;
            _center: any;
            aabbSpace: string;
            mesh: any;
            geometry: any;
            canvasWidth: number;
            canvasHeight: number;
            borderColor: any;
            /**
             * Prepare a stack for visualization. (image to world transform, frames order,
             * pack data into 8 bits textures, etc.)
             *
             * @private
             */
            _init(): void;
            _toAABB: any;
            _create(): void;
            updateIntensitySettings(): void;
            updateIntensitySettingsUniforms(): void;
            updateIntensitySetting(setting: any): void;
            _update(): void;
            dispose(): void;
            cartesianEquation(): any;
            _createMaterial(extraOptions: any): void;
            _updateMaterial(): void;
            _prepareTexture(): void;
        };
        _border: {
            _helpersSlice: any;
            _visible: boolean;
            _color: number;
            _material: any;
            _geometry: any;
            _mesh: any;
            helpersSlice: any;
            visible: boolean;
            color: number;
            _create(): void;
            _update(): void;
            dispose(): void;
        };
        _dummy: any;
        _orientation: number;
        _index: number;
        _uniforms: any;
        _autoWindowLevel: boolean;
        _outOfBounds: boolean;
        _orientationMaxIndex: number;
        _orientationSpacing: number;
        _canvasWidth: number;
        _canvasHeight: number;
        _borderColor: any;
        /**
         * Get stack.
         *
         * @type {ModelsStack}
         */
        stack: ModelsStack;
        /**
         * Get bounding box helper.
         *
         * @type {HelpersBoundingBox}
         */
        readonly bbox: HelpersBoundingBox;
        /**
         * Get slice helper.
         *
         * @type {HelpersSlice}
         */
        readonly slice: HelpersSlice;
        /**
         * Get border helper.
         *
         * @type {HelpersSlice}
         */
        readonly border: HelpersSlice;
        /**
         * Set/get current slice index.<br>
         * Sets outOfBounds flag to know if target index is in/out stack bounding box.<br>
         * <br>
         * Internally updates the sliceHelper index and position. Also updates the
         * borderHelper with the updated sliceHelper.
         *
         * @type {number}
         */
        index: number;
        /**
         * Set/get current slice orientation.<br>
         * Values: <br>
         *   - 0: acquisition direction (slice normal is z_cosine)<br>
         *   - 1: next direction (slice normal is x_cosine)<br>
         *   - 2: next direction (slice normal is y_cosine)<br>
         *   - n: set orientation to 0<br>
         * <br>
         * Internally updates the sliceHelper direction. Also updates the
         * borderHelper with the updated sliceHelper.
         *
         * @type {number}
         */
        orientation: number;
        /**
         * Set/get the outOfBound flag.
         *
         * @type {boolean}
         */
        outOfBounds: boolean;
        /**
         * Set/get the orientationMaxIndex.
         *
         * @type {number}
         */
        orientationMaxIndex: number;
        /**
         * Set/get the orientationSpacing.
         *
         * @type {number}
         */
        orientationSpacing: number;
        canvasWidth: number;
        canvasHeight: number;
        borderColor: any;
        /**
         * Initial setup, including stack prepare, bbox prepare, slice prepare and
         * border prepare.
         *
         * @private
         */
        _create(): void;
        _computeOrientationSpacing(): void;
        _computeOrientationMaxIndex(): void;
        /**
         * Given orientation, check if index is in/out of bounds.
         *
         * @private
         */
        _isIndexOutOfBounds(): void;
        /**
         * Prepare a stack for visualization. (image to world transform, frames order,
         * pack data into 8 bits textures, etc.)
         *
         * @private
         */
        _prepareStack(): void;
        /**
         * Setup bounding box helper given prepared stack and add bounding box helper
         * to stack helper.
         *
         * @private
         */
        _prepareBBox(): void;
        /**
         * Setup border helper given slice helper and add border helper
         * to stack helper.
         *
         * @private
         */
        _prepareBorder(): void;
        /**
         * Setup slice helper given prepared stack helper and add slice helper
         * to stack helper.
         *
         * @private
         */
        _prepareSlice(): void;
        /**
         * Compute slice index depending on orientation.
         *
         * @param {Vector3} indices - Indices in each direction.
         *
         * @returns {number} Slice index according to current orientation.
         *
         * @private
         */
        _prepareSliceIndex(indices: Vector3): number;
        /**
         * Compute slice position depending on orientation.
         * Sets index in proper location of reference position.
         *
         * @param {Vector3} rPosition - Reference position.
         * @param {number} index - Current index.
         *
         * @returns {number} Slice index according to current orientation.
         *
         * @private
         */
        _prepareSlicePosition(rPosition: Vector3, index: number): number;
        /**
         * Compute slice direction depending on orientation.
         *
         * @param {number} orientation - Slice orientation.
         *
         * @returns {Vector3} Slice direction
         *
         * @private
         */
        _prepareDirection(orientation: number): Vector3;
        /**
         * Release the stack helper memory including the slice memory.
         *
         * @public
         */
        dispose(): void;
    };
};
