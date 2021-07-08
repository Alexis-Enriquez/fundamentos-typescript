 //enum
 //ejemplo:
 //orientacion fotografica
//notacion clasica:
 /* const landscape = 0
 const portrait = 1 
 const square = 2
 const panorama = 3
 */
enum photoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}

const landscape: photoOrientation = photoOrientation.Landscape
console.log(landscape)


enum pictureOrientation{
    Landscape = 10,
    Portrait,
    Square,
    Panorama
}

enum Country {
    Bolivia = 'bol',
    Colombia = 'col',
    Argentina = 'arg'
}

const country:Country = Country.Argentina
console.log(country)