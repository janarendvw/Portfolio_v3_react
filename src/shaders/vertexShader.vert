uniform float uSize;
uniform float uTime;

attribute float aScale;

varying vec3 vColor;
varying float vTime;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    // Spin
    float angle = atan(modelPosition.x, modelPosition.z);

    float distanceToCenter = length(modelPosition.xz);

    float angleOffset = (1.0 / distanceToCenter) * (uTime * 0.001 + 1.0);

    angle += angleOffset;

    modelPosition.x = sin(angle) * distanceToCenter;
    modelPosition.z = tan(angle) * distanceToCenter;
    modelPosition.y += sin(angle * 10.0) * 0.1;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;

    gl_PointSize = uSize * aScale;
    gl_PointSize *= (1.0 / -viewPosition.z);

    vColor = color;
    vTime = uTime;
}
