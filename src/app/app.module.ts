import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgAnimatedBorderModule } from 'ng-animated-border'

@NgModule({
  imports:      [ BrowserModule, NgAnimatedBorderModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
