"use strict";
//enum
//ejemplo:
//orientacion fotografica
//notacion clasica:
/* const landscape = 0
const portrait = 1
const square = 2
const panorama = 3
*/
var photoOrientation;
(function (photoOrientation) {
    photoOrientation[photoOrientation["Landscape"] = 0] = "Landscape";
    photoOrientation[photoOrientation["Portrait"] = 1] = "Portrait";
    photoOrientation[photoOrientation["Square"] = 2] = "Square";
    photoOrientation[photoOrientation["Panorama"] = 3] = "Panorama";
})(photoOrientation || (photoOrientation = {}));
const landscape = photoOrientation.Landscape;
console.log(landscape);
var pictureOrientation;
(function (pictureOrientation) {
    pictureOrientation[pictureOrientation["Landscape"] = 10] = "Landscape";
    pictureOrientation[pictureOrientation["Portrait"] = 11] = "Portrait";
    pictureOrientation[pictureOrientation["Square"] = 12] = "Square";
    pictureOrientation[pictureOrientation["Panorama"] = 13] = "Panorama";
})(pictureOrientation || (pictureOrientation = {}));
var Country;
(function (Country) {
    Country["Bolivia"] = "bol";
    Country["Colombia"] = "col";
    Country["Argentina"] = "arg";
})(Country || (Country = {}));
const country = Country.Argentina;
console.log(country);
