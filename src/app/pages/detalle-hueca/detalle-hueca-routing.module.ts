import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleHuecaPage } from './detalle-hueca.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleHuecaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleHuecaPageRoutingModule {}
