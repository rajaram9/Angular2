import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {SampleComponent} from './sample/sample.componenet';
import {TwowaybindingComponent} from './twowaybinding/twowaybinding.component';
import {InputtocompComponent} from './inputocomp/inputtocomp.component';
import {OutputfromcompComponent} from './outputfromcomp/outputfromcomp.component';

@NgModule({
  declarations: [
    AppComponent,SampleComponent,TwowaybindingComponent,InputtocompComponent,OutputfromcompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
