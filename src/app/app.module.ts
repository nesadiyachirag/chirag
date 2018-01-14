import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChiragComponent } from './chirag/chirag.component';
import {colorDirective} from './directives/color.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChiragComponent,
    colorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
