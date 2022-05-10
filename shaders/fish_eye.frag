#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 texture_coordinate = 2.0 * texcoord - 1.0;
    float theta = atan(texture_coordinate.y, texture_coordinate.x);
    float mag = sqrt(pow(texture_coordinate.x,2.0)+pow(texture_coordinate.y,2.0));
    float radius = pow(mag,1.5);
    vec2 fish = vec2(radius*cos(theta), radius*sin(theta));
    vec2 final = 0.5*(fish+1.0);
    FragColor = texture(image, final);
}
