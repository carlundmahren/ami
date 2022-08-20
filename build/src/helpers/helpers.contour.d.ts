declare const _default: {
    new (stack: any, geometry: any, texture: any): {
        _stack: any;
        _textureToFilter: any;
        _contourWidth: number;
        _contourOpacity: number;
        _canvasWidth: number;
        _canvasHeight: number;
        _shadersFragment: typeof ShadersFragment;
        _shadersVertex: typeof ShadersVertex;
        _uniforms: {
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
            uWidth: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uOpacity: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uTextureFilled: {
                type: string;
                value: any[];
                typeGLSL: string;
            };
        };
        _material: any;
        _geometry: any;
        _create(): void;
        _mesh: any;
        _prepareMaterial(): void;
        update(): void;
        dispose(): void;
        geometry: any;
        textureToFilter: any;
        contourOpacity: number;
        contourWidth: number;
        canvasWidth: number;
        canvasHeight: number;
    };
};
export default _default;
/**
 * @module helpers/contour
 */
export function helpersContour(three?: any): {
    new (stack: any, geometry: any, texture: any): {
        _stack: any;
        _textureToFilter: any;
        _contourWidth: number;
        _contourOpacity: number;
        _canvasWidth: number;
        _canvasHeight: number;
        _shadersFragment: typeof ShadersFragment;
        _shadersVertex: typeof ShadersVertex;
        _uniforms: {
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
            uWidth: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uOpacity: {
                type: string;
                value: number;
                typeGLSL: string;
            };
            uTextureFilled: {
                type: string;
                value: any[];
                typeGLSL: string;
            };
        };
        _material: any;
        _geometry: any;
        _create(): void;
        _mesh: any;
        _prepareMaterial(): void;
        update(): void;
        dispose(): void;
        geometry: any;
        textureToFilter: any;
        contourOpacity: number;
        contourWidth: number;
        canvasWidth: number;
        canvasHeight: number;
    };
};
import ShadersFragment from "../shaders/shaders.contour.fragment";
import ShadersVertex from "../shaders/shaders.contour.vertex";
