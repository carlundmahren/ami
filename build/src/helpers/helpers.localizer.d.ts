declare const _default: {
    new (stack: any, geometry: any, referencePlane: any): {
        _stack: any;
        _referencePlane: any;
        _plane1: any;
        _color1: any;
        _plane2: any;
        _color2: any;
        _plane3: any;
        _color3: any;
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
            uSlice: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uPlane1: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uPlaneColor1: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uPlane2: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uPlaneColor2: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uPlane3: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uPlaneColor3: {
                type: string;
                value: number[];
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
        referencePlane: any;
        plane1: any;
        color1: any;
        plane2: any;
        color2: any;
        plane3: any;
        color3: any;
        canvasWidth: number;
        canvasHeight: number;
    };
};
export default _default;
/**
 * @module helpers/localizer
 */
export function helpersLocalizer(three?: any): {
    new (stack: any, geometry: any, referencePlane: any): {
        _stack: any;
        _referencePlane: any;
        _plane1: any;
        _color1: any;
        _plane2: any;
        _color2: any;
        _plane3: any;
        _color3: any;
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
            uSlice: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uPlane1: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uPlaneColor1: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uPlane2: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uPlaneColor2: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uPlane3: {
                type: string;
                value: number[];
                typeGLSL: string;
            };
            uPlaneColor3: {
                type: string;
                value: number[];
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
        referencePlane: any;
        plane1: any;
        color1: any;
        plane2: any;
        color2: any;
        plane3: any;
        color3: any;
        canvasWidth: number;
        canvasHeight: number;
    };
};
import ShadersFragment from "../shaders/shaders.localizer.fragment";
import ShadersVertex from "../shaders/shaders.localizer.vertex";
