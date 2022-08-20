"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 */
class default_1 {
    /**
     *
     */
    compute() {
        return `
varying vec4 vPos;
varying mat4 vProjectionViewMatrix;

//
// main
//
void main() {

  vPos = modelMatrix * vec4(position, 1.0 );
  vProjectionViewMatrix = projectionMatrix * viewMatrix;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0 );

}
        `;
    }
}
exports.default = default_1;
//# sourceMappingURL=shaders.localizer.vertex.js.map