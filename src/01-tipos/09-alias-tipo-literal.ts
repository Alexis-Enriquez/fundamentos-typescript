//Alias de tipos

type idUser = number | string
let idUser: number | string ;

idUser = 23
idUser = '22'


//caso funcion

function getUserById (id:number | string){
    //code
}
getUserById(22)
getUserById('22')


//tipos literales 
//100x100 500x500 1000x1000

type SquareSize = '100x100' | '500x500' | '1000x1000'

let smallPicture:SquareSize = '500x500'
