export class UserProfile {
  constructor (
    public name: string,
    public artistFollowList: string[],
    public ownedAlbums: string[],
    public albumWishlist: string[]
  ){}
}
