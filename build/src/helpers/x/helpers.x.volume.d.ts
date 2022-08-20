declare const _default_base: typeof import("three").Object3D;
export default class _default extends _default_base {
    constructor();
    _file: any;
    _progressbarContainer: any;
    _stack: any;
    _centerLPS: any;
    _xSlice: {
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
            _shadersFragment: typeof import("../../ami").DataFragmentShader;
            _shadersVertex: typeof import("../../ami").DataVertexShader;
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
                uPackedPerPixel: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uInterpolation: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uCanvasWidth: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uCanvasHeight: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
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
                    value: number;
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
            lowerThreshold: any;
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
        stack: ModelsStack;
        readonly bbox: HelpersBoundingBox;
        readonly slice: HelpersSlice;
        readonly border: HelpersSlice;
        index: number;
        orientation: number;
        outOfBounds: boolean;
        orientationMaxIndex: number;
        orientationSpacing: number;
        canvasWidth: number;
        canvasHeight: number;
        borderColor: any;
        _create(): void;
        _computeOrientationSpacing(): void;
        _computeOrientationMaxIndex(): void;
        _isIndexOutOfBounds(): void;
        _prepareStack(): void;
        _prepareBBox(): void;
        _prepareBorder(): void;
        _prepareSlice(): void;
        _prepareSliceIndex(indices: Vector3): number;
        _prepareSlicePosition(rPosition: Vector3, index: number): number;
        _prepareDirection(orientation: number): Vector3;
        dispose(): void;
    };
    _ySlice: {
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
            _shadersFragment: typeof import("../../ami").DataFragmentShader;
            _shadersVertex: typeof import("../../ami").DataVertexShader;
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
                uPackedPerPixel: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uInterpolation: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uCanvasWidth: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uCanvasHeight: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
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
                    value: number;
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
            lowerThreshold: any;
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
        stack: ModelsStack;
        readonly bbox: HelpersBoundingBox;
        readonly slice: HelpersSlice;
        readonly border: HelpersSlice;
        index: number;
        orientation: number;
        outOfBounds: boolean;
        orientationMaxIndex: number;
        orientationSpacing: number;
        canvasWidth: number;
        canvasHeight: number;
        borderColor: any;
        _create(): void;
        _computeOrientationSpacing(): void;
        _computeOrientationMaxIndex(): void;
        _isIndexOutOfBounds(): void;
        _prepareStack(): void;
        _prepareBBox(): void;
        _prepareBorder(): void;
        _prepareSlice(): void;
        _prepareSliceIndex(indices: Vector3): number;
        _prepareSlicePosition(rPosition: Vector3, index: number): number;
        _prepareDirection(orientation: number): Vector3;
        dispose(): void;
    };
    _zSlice: {
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
            _shadersFragment: typeof import("../../ami").DataFragmentShader;
            _shadersVertex: typeof import("../../ami").DataVertexShader;
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
                uPackedPerPixel: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uInterpolation: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uCanvasWidth: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
                uCanvasHeight: {
                    type: string;
                    value: number;
                    typeGLSL: string;
                };
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
                    value: number;
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
            lowerThreshold: any;
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
        stack: ModelsStack;
        readonly bbox: HelpersBoundingBox;
        readonly slice: HelpersSlice;
        readonly border: HelpersSlice;
        index: number;
        orientation: number;
        outOfBounds: boolean;
        orientationMaxIndex: number;
        orientationSpacing: number;
        canvasWidth: number;
        canvasHeight: number;
        borderColor: any;
        _create(): void;
        _computeOrientationSpacing(): void;
        _computeOrientationMaxIndex(): void;
        _isIndexOutOfBounds(): void;
        _prepareStack(): void;
        _prepareBBox(): void;
        _prepareBorder(): void;
        _prepareSlice(): void;
        _prepareSliceIndex(indices: Vector3): number;
        _prepareSlicePosition(rPosition: Vector3, index: number): number;
        _prepareDirection(orientation: number): Vector3;
        dispose(): void;
    };
    set file(arg: any);
    get file(): any;
    set progressbarContainer(arg: any);
    get centerLPS(): any;
    get stack(): any;
    _createSlice(orientation: any): void;
    load(): Promise<any>;
}
export {};
