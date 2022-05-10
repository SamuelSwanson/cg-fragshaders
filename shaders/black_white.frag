#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    float Luminance = 0.299 * texture(image, texcoord).r + 0.587 * texture(image, texcoord).g + 0.114 * texture(image, texcoord).b;
    FragColor = vec4(Luminance,Luminance,Luminance,1.0);
}
