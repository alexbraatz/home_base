import media1 from "./cool.jpg"
import media2 from "./globe.jpg"
import media3 from "./mower.jpg"
import media4 from "./mushroom.jpg"
import media5 from "./puppyNose.jpg"

export const media = [ media1, media2, media3, media4, media5 ];
export const mediaByIndex = index => media[index % media.length];
