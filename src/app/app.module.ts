import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";

import { AppComponent } from './app.component';
import { MapComponent } from './pages/content/map/map.component';
import { StreetComponent } from './pages/content/street/street.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    StreetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
