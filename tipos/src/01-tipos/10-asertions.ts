//<> //angle brackets sintax 

let userName: any
userName = 'exi '

//Tenemos una cadena
let message:string = (<string>userName).length > 5 ? `welcome ${userName}` : `username is too short `


//como obtener solo el user name 
let usernameWithId:any = "exi 1 "

userName = (<string>usernameWithId).substring(0,3)


//sintaxis "as"
message = (userName as string).length > 5 ? `welcome ${userName}` : `username is too short `