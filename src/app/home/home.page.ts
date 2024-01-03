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
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.firebaseService.deleteHueca(hueca.id);
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            // Acción en caso de cancelar
          }
        }
      ]
    });
    await actionSheet.present();
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
