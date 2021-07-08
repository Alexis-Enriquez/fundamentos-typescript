"use strict";
//<> //angle brackets sintax 
let userName;
userName = 'exi ';
//Tenemos una cadena
let message = userName.length > 5 ? `welcome ${userName}` : `username is too short `;
//como obtener solo el user name 
let usernameWithId = "exi 1 ";
userName = usernameWithId.substring(0, 3);
//sintaxis "as"
message = userName.length > 5 ? `welcome ${userName}` : `username is too short `;
