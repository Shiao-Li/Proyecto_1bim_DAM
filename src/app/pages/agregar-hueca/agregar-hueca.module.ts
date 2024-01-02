import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgregarHuecaPageRoutingModule } from './agregar-hueca-routing.module';
import { AgregarHuecaPage } from './agregar-hueca.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarHuecaPageRoutingModule,
    RouterModule.forChild([{ path: '', component: AgregarHuecaPage }])
  ],
  declarations: [AgregarHuecaPage]
})
export class AgregarHuecaPageModule {}
