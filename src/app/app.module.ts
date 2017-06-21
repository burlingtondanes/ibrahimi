import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InputComponent } from './toDos/toDosEdit/input/input.component';
import { OuputComponent } from './toDos/ouput/ouput.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OuputComponent
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
