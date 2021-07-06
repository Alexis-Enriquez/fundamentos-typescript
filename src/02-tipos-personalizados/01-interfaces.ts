enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}


interface Picture {
    title:string;
    date:string;
    orientation: PhotoOrientation;

}
/* function showPicture(picture:{title:string,date:string,orientation:PhotoOrientation}) {
    console.log(`[title: ${picture.title},date: ${picture.date}, orientation: ${picture.orientation}]`)
} */
function showPicture(picture:Picture) {
    console.log(`[title: ${picture.title},date: ${picture.date}, orientation: ${picture.orientation}]`)
}

let myPic = {
    title:'Test Title',
    date: '2020-02',
    orientation:PhotoOrientation.Landscape
}

showPicture(myPic)
showPicture({
    title:'Test Title2',
    date: '2020-03',
    orientation:PhotoOrientation.Panorama
})

// propiedades opcionales 
//con el ? indicamos que el simbolo es opcional 

interface PictureConfig {
    title?: string;
    date?:string;
    orientation?: PhotoOrientation;

}

function generatePicture(config: PictureConfig){
    const pic = {title:'default',date:'default'}
    if(config.title){
        pic.title = config.title
    }
    if(config.date){
        pic.date = config.date
    }

    return pic    
}

let picture = generatePicture({})
console.log('picture', picture)
picture = generatePicture({title:'tengotitulo'})
console.log('picture', picture)
picture = generatePicture({title:'cambiemititulo',date:'ytengofecha'})
console.log('picture', picture)


//interfaz para usuario utilizando readonly

interface User{
    readonly id:number; //solo lectura, recibe solo el valor inicial 
    userName:string;
    isPro:boolean;

}

let user1: User
user1 = {
    id:10,
    userName:'exi',
    isPro:true
}
console.log('user',user1)
user1.userName = 'je';
console.log(user1)