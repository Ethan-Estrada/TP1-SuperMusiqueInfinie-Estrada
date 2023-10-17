import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-chanson',
  templateUrl: './chanson.component.html',
  styleUrls: ['./chanson.component.css']
})
export class ChansonComponent {

  infoChanson : string[] = [];

  constructor(public http : HttpClient){}

  async request(artistName:string,albumName:string) : Promise<void>{

    // get chanson dans album
    let pizza = await lastValueFrom(this.http.get<any>("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=9a8a3facebbccaf363bb9fd68fa37abf&artist="+artistName+"&album="+albumName+"&format=json"));
    for(let chanson of pizza.album.tracks.track){
      this.infoChanson.push(chanson.name);
    }
    console.log(this.infoChanson);
  }

}
