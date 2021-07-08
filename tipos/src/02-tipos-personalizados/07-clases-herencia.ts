export {}

enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}


//superclase 
abstract class Item { //abstract prohibe que se pueda instanciar esta clase de manera manual 
    protected readonly _id: number ; //protected da acceso a subclases 
    protected _title: string;

    constructor(id:number, title:string){
        this._id =id,
        this._title =title
    }
    get id(){
        return this._id
    }
    
   /*  set id(id:number){
        this._id = id
    } */
    get title(){
        return this._title
    }
    set title(title:string){
        this._title = title
    }
}


class Picture extends Item{
    public static photoOrientation =PhotoOrientation

   private _orientation:PhotoOrientation;
    
   public constructor(id:number,title:string,orientation: PhotoOrientation){
        super(id,title)
        this._orientation = orientation
    }

    get orientation(){
        return this._orientation
    }
    set orientation(o:PhotoOrientation){
        this._orientation = o
    }

   public toString(){
        return `[id: ${this._id}, 
                title: ${this._title}
                orientation: ${this._orientation}]`
    }
}


class Album extends Item{
    private pictures:Picture[] 

    public constructor(id:number,title:string){
        super(id,title)
        this.pictures = []
    }

    public addPicture(picture:Picture){
        this.pictures.push(picture)
    }
}

const album: Album = new Album(1,'personal pictures');
const picture: Picture = new Picture(1,'titulosss',PhotoOrientation.Panorama)
album.addPicture(picture)


console.log('album', album)



//picture.id = 100;  //set id(100)
picture.title = 'another title' 
album.title = 'personal Activities ' 
console.log(album)

