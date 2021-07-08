"use strict";
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
/* function showPicture(picture:{title:string,date:string,orientation:PhotoOrientation}) {
    console.log(`[title: ${picture.title},date: ${picture.date}, orientation: ${picture.orientation}]`)
} */
function showPicture(picture) {
    console.log(`[title: ${picture.title},date: ${picture.date}, orientation: ${picture.orientation}]`);
}
let myPic = {
    title: 'Test Title',
    date: '2020-02',
    orientation: PhotoOrientation.Landscape
};
showPicture(myPic);
showPicture({
    title: 'Test Title2',
    date: '2020-03',
    orientation: PhotoOrientation.Panorama
});
function generatePicture(config) {
    const pic = { title: 'default', date: 'default' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
let picture = generatePicture({});
console.log('picture', picture);
picture = generatePicture({ title: 'tengotitulo' });
console.log('picture', picture);
picture = generatePicture({ title: 'cambiemititulo', date: 'ytengofecha' });
console.log('picture', picture);
let user1;
user1 = {
    id: 10,
    userName: 'exi',
    isPro: true
};
console.log('user', user1);
user1.userName = 'je';
console.log(user1);
