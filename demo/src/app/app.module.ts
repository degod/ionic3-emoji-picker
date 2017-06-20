import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { EmojiPickerModule } from '../../../src';
import { CaretEvent, EmojiEvent } from '../../../src/lib';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EmojiPickerModule.forRoot()
  ],
  providers: [
    CaretEvent,
    EmojiEvent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
