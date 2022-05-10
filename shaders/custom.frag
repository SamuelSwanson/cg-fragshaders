#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 color = texture(image, texcoord);
    float NPCRI = (color.r-color.b)/(color.r+color.b);
    FragColor = vec4(NPCRI,NPCRI,NPCRI,1.0);
}
