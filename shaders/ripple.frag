#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 texture_coordinate = 2.0 * texcoord - 1.0;
    float mag = sqrt(pow(texture_coordinate.x,2.0)+pow(texture_coordinate.y,2.0));
    float radius = mag;
    vec2 offset = texture_coordinate * (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0;
    vec2 final = texcoord + offset;
    FragColor = texture(image, final);
}
