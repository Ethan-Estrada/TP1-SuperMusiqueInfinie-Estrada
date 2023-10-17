import { ChansonComponent } from './chanson/chanson.component';
import { lastValueFrom } from 'rxjs';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlbumComponent } from './album/album.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Deux variables devront être ajoutées ici pour le tp
  result : boolean = false;
  artist : string = "";
  similarArtists : string[] = [];

  topAlbums : string[] = [];
  topNomsAlbums: string[] = [];
  ChansonsAlbum: string[] = [];
  selectedAlbum ?:  string;

  // Le constructeur devra être ajouté ici
  constructor(public http : HttpClient){}

  selectAlbum(i: number){
    this.selectedAlbum = this.topNomsAlbums[i];
              // requete pour les chansons
              let c = new ChansonComponent(this.http);
              c.request(this.artist,this.selectedAlbum);
              this.ChansonsAlbum = c.infoChanson;
  }

  searchArtist():void{
    this.result = true;
	// La requête HTTP devra être ajoutée ici
    this.request();

  }

  async request() : Promise<void>{
          // requete pour top albums get image et le nom
          let a = new AlbumComponent(this.http);
          a.request(this.artist);
          this.topAlbums = a.Albums;
          this.topNomsAlbums = a.nomAlbums;
  }
  newSearch():void{
    this.result = false;
  }
}


