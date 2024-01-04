import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-hueca',
  templateUrl: './agregar-hueca.page.html',
  styleUrls: ['./agregar-hueca.page.scss'],
})
export class AgregarHuecaPage {
  latitude: any = 0;
  longitude: any = 0;
  nombreLocacion: string = '';
  descripcionLocacion: string = '';
  fotosLocacion: File[] = [];
  fotosPreview: { file: File, url: string }[] = [];

  constructor(
    private geolocation: Geolocation,
    private firebaseService: FirebaseService,
    private router: Router
  ) {}

  async getCurrentCoordinates() {
    try {
      const resp = await this.geolocation.getCurrentPosition();
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
    } catch (error) {
      console.log('Error, no se puede obtener tu ubicación', error);
    }
  }

  onFilesSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fotosLocacion = [];
      this.fotosPreview = [];

      for (let i = 0; i < Math.min(input.files.length, 3); i++) {
        const file = input.files[i];
        this.fotosLocacion.push(file);

        const reader = new FileReader();
        reader.onload = () => {
          this.fotosPreview.push({ file, url: reader.result as string });
        };
        reader.readAsDataURL(file);
      }
    }
  }

  guardarHueca() {
    if (
      this.nombreLocacion &&
      this.descripcionLocacion &&
      this.latitude &&
      this.longitude &&
      this.fotosLocacion.length > 0
    ) {
      this.firebaseService
        .guardarDatosHuecaConFotos(
          this.nombreLocacion,
          this.descripcionLocacion,
          this.latitude,
          this.longitude,
          this.fotosLocacion
        )
        .then(() => {
          console.log('Hueca y fotos guardadas en Firebase');
          this.router.navigate(['/home']);
        })
        .catch((error) => {
          console.error('Error al guardar la hueca y fotos en Firebase:', error);
        });
    } else {
      console.error('Todos los campos y al menos una foto son requeridos');
    }
  }

  redirectToHome() {
    // Redirige al usuario al componente 'home'
    this.router.navigate(['/home']);
  }
}
