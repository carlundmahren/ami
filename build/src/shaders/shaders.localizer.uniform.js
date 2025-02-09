"use strict";
/**
 * @module shaders/localizer/uniforms
 */
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    /**
     * Shaders data uniforms
     */
    static uniforms() {
        return {
            uCanvasWidth: {
                type: 'f',
                value: 0,
                typeGLSL: 'float',
            },
            uCanvasHeight: {
                type: 'f',
                value: 0,
                typeGLSL: 'float',
            },
            uSlice: {
                type: 'v4',
                value: [0.0, 0.0, 0.0, 0.0],
                typeGLSL: 'vec4',
            },
            uPlane1: {
                type: 'v4',
                value: [0.0, 0.0, 0.0, 0.0],
                typeGLSL: 'vec4',
            },
            uPlaneColor1: {
                type: 'v3',
                value: [1.0, 1.0, 0.0],
                typeGLSL: 'vec3',
            },
            uPlane2: {
                type: 'v4',
                value: [0.0, 0.0, 0.0, 0.0],
                typeGLSL: 'vec4',
            },
            uPlaneColor2: {
                type: 'v3',
                value: [1.0, 1.0, 0.0],
                typeGLSL: 'vec3',
            },
            uPlane3: {
                type: 'v4',
                value: [0.0, 0.0, 0.0, 0.0],
                typeGLSL: 'vec4',
            },
            uPlaneColor3: {
                type: 'v3',
                value: [1.0, 1.0, 0.0],
                typeGLSL: 'vec3',
            },
        };
    }
}
exports.default = default_1;
//# sourceMappingURL=shaders.localizer.uniform.js.map