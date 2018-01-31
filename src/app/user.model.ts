import { Album } from './album.model'

export class UserProfile {
  wishlistAlbums: Album[] = [];
  collectionAlbums: Album[] = [];

  constructor (
    public name: string,
    public id: string,
    public email: string
  ) { }
}
