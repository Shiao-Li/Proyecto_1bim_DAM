import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  huecas: any[] = [];

  constructor(private firebaseService: FirebaseService,
    public actionSheetController: ActionSheetController, private router: Router) { }

  ngOnInit() {
    this.firebaseService.getHuecas().subscribe((data: any[]) => {
      this.huecas = data;
    });
  }

  public async showActionSheet(hueca: any, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: hueca.nombre,
      buttons: [
        {
          text: 'Ver Detalle',
          icon: 'information',
          handler: () => {
            this.verDetalleHueca(hueca.id); // Llama a la función para ver el detalle
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }
  verDetalleHueca(id: string) {
    this.router.navigateByUrl(`/detalle-hueca/${id}`); // Reemplaza 'detalle-hueca' con la ruta adecuada para ver detalles
  }
}