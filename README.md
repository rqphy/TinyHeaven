# TinyHeaven

## The idea

Have you seen [Joshua’s World]([https://www.joshuas.world/](https://www.joshuas.world/))? It’s an amazing website and I want to recreate an experience with the same idea. I’ve seen beautiful low poly plane on Sketchfab that I want to use in a project. I need a place to fly this plane thought. I was thinking about mountains but it’s hard to make it look good and there are rare.

[Live](https://tiny-heaven.netlify.app/)

## The method

### Controls

The most important thing here is to have good controls. I had two options. My first plan was to go with the PresentationControls from drei. It’s the easiest way to implement the controls. When you drag, the camera doesn’t move but you basically control the island. It’s perfect because I don’t need to move the plane. Why would I go with the other option then? Well I don’t have as many options as I’d like. For example, I want to be able to control the dumping.

To do that, I came back to the basics. Orbitcontrols has way more options so let’s find a way to recreate the effect I want from scratch. First, let’s setup limits. I don’t want the user to be able to rotate vertically nor to be able to move away from the island. Everything is easy to setup due to the amount of options on the Orbitcontrols.

### Plane position

Because I chose the Orbitcontrols, I need to find a way to move the plane at the same time. Fortunately, I can get the azimuth angle, I just need to update the plane’s position and rotation every time the camera moves.

## Licences

[Floating Island](https://github.com/rqphy/TinyHeaven/blob/main/public/low_poly_flying_island/license.txt))

[Plante](https://github.com/rqphy/TinyHeaven/blob/main/public/low_poly_plane/license.txt))
