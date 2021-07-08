//Las tuplas nos permiten expresar un arreglo con un numero fijo de elementos 
//los tipos de datos son conocidos, se expresa que dato va a ingresar en cada posicion 



let userr: [number, string];
userr = [1,'exi']


userr[1].toUpperCase() //se pueden utilizar metodos que sean exclusivamente del tipo asignado, en este caso por ejemplo string 

let userInfo :[number,string, boolean]
userInfo = [2,'se',true]


//Array de tuplas 
let array1: [number, string][]=[];
array1.push([1,"nombre1"])
array1.push([2,"nombre2"])
array1.push([3,"nombre3"])

array1[2][1] = array1[2][1].concat('001')