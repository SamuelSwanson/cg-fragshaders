#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    float NPCRI = (texture(image, texcoord).r-texture(image, texcoord).b)/(texture(image, texcoord).r+texture(image, texcoord).b);
    FragColor = vec4(NPCRI,NPCRI,NPCRI,1.0);
}
