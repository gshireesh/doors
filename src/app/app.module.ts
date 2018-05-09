import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NewAgeComponent } from './new-age/new-age.component';
import {DoorsComponent} from './doors/doors.component';


@NgModule({
  declarations: [
    AppComponent,
    DoorsComponent,
    NewAgeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
