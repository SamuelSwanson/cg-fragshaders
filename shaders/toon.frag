#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    float r = round(4.0 * texture(image, texcoord).r)/4.0;
    float g = round(4.0 * texture(image, texcoord).g)/4.0;
    float b = round(4.0 * texture(image, texcoord).b)/4.0;
    FragColor = vec4(r,g,b,1.0);
}
