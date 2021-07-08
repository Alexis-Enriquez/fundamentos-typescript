export {}

enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}



interface Entity{
    id: number;
    title:string;
}

//asi es como hacemos que herede de entity

interface Album extends Entity{
    description:string
}

interface Picture extends Entity{
    orientation:PhotoOrientation
}


const album: Album = {
    id:1,
    title:'mialbum',
    description:'un album normal'
};

const picture:Picture = {
    id:2,
    title:'eso',
    orientation:PhotoOrientation.Portrait
};

let newPicture = {} as Picture
newPicture.id = 2
newPicture.title = 'moon'

console.log('album',album)
console.log('picture',picture)
console.log('new picture',newPicture)
