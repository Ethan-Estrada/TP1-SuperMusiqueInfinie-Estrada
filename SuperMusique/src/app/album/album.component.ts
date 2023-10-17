import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {

  Albums : string[] = [];
  nomAlbums : string[] = [];

  constructor(public http : HttpClient){}

  async request(artist:string) : Promise<void>{

    // get le nom de l'album
    let papayas = await lastValueFrom(this.http.get<any>("http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&limit=10&artist="+artist+"&api_key=9a8a3facebbccaf363bb9fd68fa37abf&format=json"));
    for(let album of papayas.topalbums.album){
      this.Albums.push(album.image[2]['#text']);
    }

    for(let album of papayas.topalbums.album){
      this.nomAlbums.push(album.name);
    }
  }

}
