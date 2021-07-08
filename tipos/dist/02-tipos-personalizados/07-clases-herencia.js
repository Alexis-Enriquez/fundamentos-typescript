"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
//superclase 
class Item {
    constructor(id, title) {
        this._id = id,
            this._title = title;
    }
    get id() {
        return this._id;
    }
    /*  set id(id:number){
         this._id = id
     } */
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
}
class Picture extends Item {
    constructor(id, title, orientation) {
        super(id, title);
        this._orientation = orientation;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(o) {
        this._orientation = o;
    }
    toString() {
        return `[id: ${this._id}, 
                title: ${this._title}
                orientation: ${this._orientation}]`;
    }
}
Picture.photoOrientation = PhotoOrientation;
class Album extends Item {
    constructor(id, title) {
        super(id, title);
        this.pictures = [];
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
const album = new Album(1, 'personal pictures');
const picture = new Picture(1, 'titulosss', PhotoOrientation.Panorama);
album.addPicture(picture);
console.log('album', album);
//picture.id = 100;  //set id(100)
picture.title = 'another title';
album.title = 'personal Activities ';
console.log(album);
