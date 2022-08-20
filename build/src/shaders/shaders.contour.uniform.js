"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module shaders/data
 */
class ShadersUniform {
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
            uWidth: {
                type: 'f',
                value: 1,
                typeGLSL: 'float',
            },
            uOpacity: {
                type: 'f',
                value: 1,
                typeGLSL: 'float',
            },
            uTextureFilled: {
                type: 't',
                value: [],
                typeGLSL: 'sampler2D',
            },
        };
    }
}
exports.default = ShadersUniform;
//# sourceMappingURL=shaders.contour.uniform.js.map