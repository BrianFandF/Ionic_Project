import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModulepagePageRoutingModule } from './modulepage-routing.module';

import { ModulepagePage } from './modulepage.page';
import { MyHeaderModule } from '../my-header/my-header.component.module';
import { InputformComponent } from '../inputform/inputform.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModulepagePageRoutingModule,
    MyHeaderModule,
    ReactiveFormsModule
  ],
  declarations: [ModulepagePage, InputformComponent]
})
export class ModulepagePageModule {}
