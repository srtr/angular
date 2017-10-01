import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchService} from './search.service';
import { SearchComponent } from './search.component';
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  exports:[SearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers:[SearchService],
  declarations: [SearchComponent]
})
export class SearchModule { }
