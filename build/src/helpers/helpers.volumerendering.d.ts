declare const _default: {
    new (stack: any): {
        _stack: any;
        _textures: any[];
        _shadersFragment: typeof ShadersFragment;
        _shadersVertex: typeof ShadersVertex;
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
            uWorldBBox: {
                type: string;
                value: number[];
                typeGLSL: string;
                length: number;
            };
            uSteps: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uAlphaCorrection: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uFrequence: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uAmplitude: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uShading: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uAmbient: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uAmbientColor: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uSampleColorToAmbient: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uSpecular: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uSpecularColor: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uDiffuse: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uDiffuseColor: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uSampleColorToDiffuse: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uShininess: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uLightPosition: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uLightPositionInCamera: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uIntensity: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uAlgorithm: {
                type: string;
                value: number;
                typeGLSL: string;
            };
        };
        _material: any;
        _geometry: any;
        _mesh: any;
        _algorithm: number;
        _alphaCorrection: number;
        _interpolation: number;
        _shading: number;
        _shininess: number;
        _steps: number;
        _offset: number;
        _windowCenter: number;
        _windowWidth: number;
        _create(): void;
        _prepareStack(): void;
        _prepareMaterial(): void;
        _prepareGeometry(): void;
        uniforms: {
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
            uWorldBBox: {
                type: string;
                value: number[];
                typeGLSL: string;
                length: number;
            };
            uSteps: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uAlphaCorrection: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uFrequence: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uAmplitude: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uShading: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uAmbient: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uAmbientColor: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uSampleColorToAmbient: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uSpecular: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uSpecularColor: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uDiffuse: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uDiffuseColor: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uSampleColorToDiffuse: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uShininess: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uLightPosition: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uLightPositionInCamera: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uIntensity: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uAlgorithm: {
                type: string;
                value: number;
                typeGLSL: string;
            };
        };
        mesh: any;
        stack: any;
        windowCenter: number;
        windowWidth: number;
        steps: number;
        alphaCorrection: number;
        interpolation: number;
        shading: number;
        shininess: number;
        algorithm: number;
        dispose(): void;
        _createMaterial(extraOptions: any): void;
        _updateMaterial(): void;
        _prepareTexture(): void;
    };
};
export default _default;
/**
 * @module helpers/volumerendering
 */
export function helpersVolumeRendering(three?: any): {
    new (stack: any): {
        _stack: any;
        _textures: any[];
        _shadersFragment: typeof ShadersFragment;
        _shadersVertex: typeof ShadersVertex;
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
            uWorldBBox: {
                type: string;
                value: number[];
                typeGLSL: string;
                length: number;
            };
            uSteps: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uAlphaCorrection: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uFrequence: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uAmplitude: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uShading: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uAmbient: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uAmbientColor: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uSampleColorToAmbient: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uSpecular: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uSpecularColor: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uDiffuse: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uDiffuseColor: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uSampleColorToDiffuse: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uShininess: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uLightPosition: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uLightPositionInCamera: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uIntensity: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uAlgorithm: {
                type: string;
                value: number;
                typeGLSL: string;
            };
        };
        _material: any;
        _geometry: any;
        _mesh: any;
        _algorithm: number;
        _alphaCorrection: number;
        _interpolation: number;
        _shading: number;
        _shininess: number;
        _steps: number;
        _offset: number;
        _windowCenter: number;
        _windowWidth: number;
        _create(): void;
        _prepareStack(): void;
        _prepareMaterial(): void;
        _prepareGeometry(): void;
        uniforms: {
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
            uWorldBBox: {
                type: string;
                value: number[];
                typeGLSL: string;
                length: number;
            };
            uSteps: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uAlphaCorrection: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uFrequence: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uAmplitude: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uShading: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uAmbient: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uAmbientColor: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uSampleColorToAmbient: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uSpecular: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uSpecularColor: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uDiffuse: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uDiffuseColor: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uSampleColorToDiffuse: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uShininess: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uLightPosition: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uLightPositionInCamera: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uIntensity: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uAlgorithm: {
                type: string;
                value: number;
                typeGLSL: string;
            };
        };
        mesh: any;
        stack: any;
        windowCenter: number;
        windowWidth: number;
        steps: number;
        alphaCorrection: number;
        interpolation: number;
        shading: number;
        shininess: number;
        algorithm: number;
        dispose(): void;
        _createMaterial(extraOptions: any): void;
        _updateMaterial(): void;
        _prepareTexture(): void;
    };
};
import ShadersFragment from "../shaders/shaders.vr.fragment";
import ShadersVertex from "../shaders/shaders.vr.vertex";
