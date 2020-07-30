import { StarComponent } from './../../component/star/star.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewConcertPageRoutingModule } from './new-concert-routing.module';

import { NewConcertPage } from './new-concert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewConcertPageRoutingModule
  ],
  declarations: [NewConcertPage, StarComponent]
})
export class NewConcertPageModule { }
