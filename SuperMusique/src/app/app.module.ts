import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { ChansonComponent } from './chanson/chanson.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    ChansonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
