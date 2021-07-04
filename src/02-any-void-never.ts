//Any
// es utilizado para capturar valores dinamicos en tsc
//ya que los valores pueden cambiar en el tiempo

let userInput:any = 'loquevenga' 
userInput = 'puede ser un string'
userInput = 42 //un numero
userInput = true //lo que venga 

//any inferido 

let variable //solamente declaramos la variable sin valor 

//Void
//void representa la ausencia de valor 
// comunmente se usa de retorno de funciones

function showInfo(user:any) {
    console.log('user info: '+ user)
}//si la funcion no tiene un return ,se le asigna un retorno void

function showInfo2(user:any) {
    console.log('user info: '+ user)
    return 'hola'
}//si hay return se infiere el tipo de retorno, en ese caso un string


//de manera explicita tambien se especifica que tipo de dato retorna
function showInfo3(user:any) :any {
    console.log('user info: '+ user)
}


// void como tipo de dato en una variable

let useless: void 
useless = undefined
//useless = null // para utilizar esta habria que deshabilitar el modo stricto


//Never
//representa un tipo de valor que nunca ocurre com en funciones que lanzan exepciones o que nunca retornan valor

function handleError (code:number, message:string):never{


    throw new Error(`${message}. code:${code}`)
} //no retorna un valor, sino que lanza un error


function someNumbers (limit:number):never{
    let sum = 0
    while(true){
        sum++
    }
} //se produce un ciclo infinito por lo cual jamas hay retorno por lo cual se establece como never 


