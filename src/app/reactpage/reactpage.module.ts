import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReactpagePageRoutingModule } from './reactpage-routing.module';

import { ReactpagePage } from './reactpage.page';
import { ReactiveFormsModule } from '@angular/forms';
import { MyformComponent } from '../myform/myform.component';
import { ViewformComponent } from '../viewform/viewform.component';
import { UpdateformComponent } from '../updateform/updateform.component';
import { MyHeaderModule } from '../my-header/my-header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactpagePageRoutingModule,
    ReactiveFormsModule,
    MyHeaderModule
  ],
  declarations: [ReactpagePage, MyformComponent, ViewformComponent, UpdateformComponent]
})
export class ReactpagePageModule {}
