export {}

enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture{
    //por default las propiedades y las funciones estan publicas 
   public id: number;
    title:string;
    orientation:PhotoOrientation;
    
   public constructor(id:number,title:string,orientation: PhotoOrientation){
        this.id = id
        this.title = title
        this.orientation = orientation
    }

   public toString(){
        return `[id: ${this.id}, 
                title: ${this.title}
                orientation: ${this.orientation}]`
    }
}


class Album{
    id:number;
    title:string;
    pictures:Picture[] 

    constructor(id:number,title:string){
        this.id = id;
        this.title = title
        this.pictures = []
    }

    addPicture(picture:Picture){
        this.pictures.push(picture)
    }
}

const album: Album = new Album(1,'personal pictures');
const picture: Picture = new Picture(1,'titulosss',PhotoOrientation.Panorama)
album.addPicture(picture)


console.log('album', album)


//accediendo a los miembros publicos 
picture.id = 100; // public
picture.title = 'another title'
album.title = 'personal Activities '
console.log(album)

