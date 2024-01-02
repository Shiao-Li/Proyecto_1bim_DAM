import { Component, OnInit } from '@angular/core';
import { ActionSheetController, Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UserPhoto, PhotoService } from 'src/app/services/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-hueca',
  templateUrl: './agregar-hueca.page.html',
  styleUrls: ['./agregar-hueca.page.scss'],
})
export class AgregarHuecaPage implements OnInit {
  latitude: any = 0;
  longitude: any = 0;
  nombreLocacion: string = '';
  descripcionLocacion: string = '';
  fotoLocacion: string = '';

  constructor(
    private platform: Platform,
    private geolocation: Geolocation,
    private firebaseService: FirebaseService,
    private router: Router,
    public photoService: PhotoService, public actionSheetController: ActionSheetController
  ) { }

  async ngOnInit() {
    this.getCurrentCoordinates();
    await this.photoService.loadSaved();
  }
  public async showActionSheet(photo: UserPhoto, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
         }
      }]
    });
    await actionSheet.present();
  }

  getCurrentCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error, no se puede obtener tu ubicación', error);
    });
  }

  guardarLocacion() {
    this.firebaseService.guardarDatosLocacion(this.nombreLocacion, this.descripcionLocacion, this.latitude, this.longitude, this.fotoLocacion)
      .then(() => {
        console.log('Locación guardada en Firebase');
        this.router.navigate(['/home']); // Redirigir a la vista de inicio después de guardar
      })
      .catch(error => {
        console.error('Error al guardar la locación en Firebase:', error);
      });
  }

}
