import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';

import { Album } from './album.model';
import { masterFirebaseConfig } from '../api-keys';
import { UserProfile } from './user.model';

@Injectable()
export class UserProfileListService {

  profiles: FirebaseListObservable<any[]>;
  private profileKey: string;

  constructor(private database: AngularFireDatabase) {
    this.profiles = database.list('userProfiles');
  }

  getProfiles(){
    return this.profiles
  }

  getProfilesById(userKey: string) {
    return this.database.object(`userProfiles/${userKey}`);
  }

  getCollectionByUserKey(userKey: string) {
    return this.database.list(`userProfiles/${userKey}/collection`);
  }

  getWishlistByUserKey(userKey: string) {
    return this.database.list(`userProfiles/${userKey}/wishlist`);
  }

  addAlbumToCollection(userKey: string, albumToAdd: Album) {
    let collection = this.getCollectionByUserKey(userKey);
    let collectedAlbums;

    collection.subscribe(albumsInCollection => {
      collectedAlbums = albumsInCollection
    });

    if(!collectedAlbums.length) {
      collection.push(albumToAdd);
    } else {
      const albumIsCollected = collectedAlbums.find((thisAlbum) => thisAlbum.id === albumToAdd.id)
      if(albumIsCollected) {
        console.log("This album is already in your collection!");
      } else {
        collection.push(albumToAdd);
      }
    }
  }

  addAlbumToWishlist(userKey: string, albumToAdd: Album) {
    let wishlist = this.getWishlistByUserKey(userKey);
    let wishlistedAlbums;

    wishlist.subscribe(albumsInWishlist => {
      wishlistedAlbums = albumsInWishlist
    });

    if(!wishlistedAlbums.length) {
      wishlist.push(albumToAdd);
    } else {
      const albumIsCollected = wishlistedAlbums.find((thisAlbum) => thisAlbum.id === albumToAdd.id)
      if(albumIsCollected) {
        console.log("This album is already in your wishlist!");
      } else {
        wishlist.push(albumToAdd);
      }
    }
  }

  addNewProfile(newUser: UserProfile) {
    this.profiles.push(newUser);
  }

  updateProfile(profile){
    var profileEntry = this.getProfilesById(profile.$key);
    profileEntry.update({name: profile.name});
  }

  addToCollection(userKey: string, album: Album) {
    this.database.list(`userProfiles/${userKey}/collection`).push(album);
  }

  addToWishlist(userKey: string, album: Album) {
    this.database.list(`userProfiles/${userKey}/wishlist`).push(album);
  }

}
