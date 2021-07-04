//object es un tipo de dato que representa un valor no primitivo
let user: object;
user = {}

user = {
    id:1,
    username:"exi",
    firstName:"eso e muy personal",
    isADmin:true,
}

console.log('user',user)
console.log('user.username',user.username)//aca se genera un error ya que no es accesible la propiedad 


//object vs Object 