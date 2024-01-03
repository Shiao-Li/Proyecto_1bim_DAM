import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleHuecaPageRoutingModule } from './detalle-hueca-routing.module';

import { DetalleHuecaPage } from './detalle-hueca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleHuecaPageRoutingModule
  ],
  declarations: [DetalleHuecaPage]
})
export class DetalleHuecaPageModule {}
