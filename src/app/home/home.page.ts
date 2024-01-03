import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { AuthServiceService } from '../services/auth-service.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  email: any;
  huecas: any[] = [];

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    public actionSheetController: ActionSheetController,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {
    this.authService.getProfile().then((user) => {
      this.email = user?.email;

      this.firebaseService.getHuecas().subscribe((data: any[]) => {
        this.huecas = data;
      });
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
          text: 'Editar Hueca',
          icon: 'create',
          handler: () => {
            this.editarHueca(hueca.id); // Llama a la función para editar la hueca
          }
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.firebaseService.deleteHueca(hueca.id);
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

  editarHueca(id: string) {
    this.router.navigateByUrl(`/editar-hueca/${id}`); // Reemplaza 'editar-hueca' con la ruta adecuada para editar
  }

  signOut() {
    this.authService.signOut().then(() => {
      this.router.navigate(['/landing']);
    });
  }

  AgregarHueca() {
    this.router.navigateByUrl('/agregar-hueca');
  }
}
