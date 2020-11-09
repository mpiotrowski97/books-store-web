import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule} from '@angular/router';
import { RequiredMarkComponent } from './components/forms/required-mark/required-mark.component';



@NgModule({
  declarations: [HeaderComponent, RequiredMarkComponent],
  exports: [
    HeaderComponent,
    RequiredMarkComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
