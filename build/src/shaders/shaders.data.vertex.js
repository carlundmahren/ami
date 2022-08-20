"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShadersVertex {
    compute() {
        return `
varying vec3 vPos;
varying vec3 vNormal;

void main() {
  vNormal = normal;
  vPos = (modelMatrix * vec4(position, 1.0 )).xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0 );

}
        `;
    }
}
exports.default = ShadersVertex;
//# sourceMappingURL=shaders.data.vertex.js.map