export {}

enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture{
    //utilizando una sintaxis incorporada en la ec6, colocando un # previo al la propiedad 
   #id: number;
   #title:string;
   #orientation:PhotoOrientation;
    
   public constructor(id:number,title:string,orientation: PhotoOrientation){
        this.#id = id
        this.#title = title
        this.#orientation = orientation
    }

   public toString(){
        return `[id: ${this.#id}, 
                title: ${this.#title}
                orientation: ${this.#orientation}]`
    }
}


class Album{
    #id:number;
    #title:string;
    #pictures:Picture[] 

    public constructor(id:number,title:string){
        this.#id = id;
        this.#title = title
        this.#pictures = []
    }

    public addPicture(picture:Picture){
        this.#pictures.push(picture)
    }
}

const album: Album = new Album(1,'personal pictures');
const picture: Picture = new Picture(1,'titulosss',PhotoOrientation.Panorama)
album.addPicture(picture)


console.log('album', album)



//picture.id = 100; // error porque es privado
//picture.title = 'another title' // error porque es privado
//album.title = 'personal Activities ' // error porque es privado
console.log(album)

