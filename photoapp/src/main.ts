import {User} from './user'
import { Album } from './album'
import { Picture } from './picture'
import { PhotoOrientation } from './photo-orientation'

const user = new User(1,'exi','alexis',true)
const album = new Album(10,'mialbum')

const picture = new Picture (1,'mipic','29292',PhotoOrientation.Landscape)


//creamos realciones 
user.addAlbum(album)
album.addPicture(picture)

console.log('user',user)