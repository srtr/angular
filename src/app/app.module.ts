import { BrowserModule } from '@angular/platform-browser';
import { SearchModule } from './search/search.module';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SearchModule,
    ReactiveFormsModule
  ],
  schemas: [
	NO_ERRORS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
