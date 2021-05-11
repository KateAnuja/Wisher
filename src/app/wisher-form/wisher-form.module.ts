import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { WisherFormPageRoutingModule } from './wisher-form-routing.module';
import { WisherFormPage } from './wisher-form.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    WisherFormPageRoutingModule
  ],
  declarations: [WisherFormPage]
})
export class WisherFormPageModule {}
