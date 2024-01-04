import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-hueca',
  templateUrl: './editar-hueca.page.html',
  styleUrls: ['./editar-hueca.page.scss'],
})
export class EditarHuecaPage {
  huecaId: string;
  hueca: any;
  nombre: string;
  descripcion: string;
  latitude: number;
  longitude: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private geolocation: Geolocation,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.huecaId = id ? id : '';
    this.firebaseService.getHuecaById(this.huecaId).subscribe((hueca: any) => {
      this.hueca = hueca;
      this.nombre = this.hueca.nombre;
      this.descripcion = this.hueca.descripcion;
      this.latitude = this.hueca.latitude;
      this.longitude = this.hueca.longitude;
    });
  }

  getCurrentCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error al obtener las coordenadas', error);
    });
  }

  updateHueca() {
    this.firebaseService.updateHueca(
      this.huecaId,
      this.nombre,
      this.descripcion,
      this.latitude,
      this.longitude
    ).then(() => {
      this.router.navigateByUrl(`/detalle-hueca/${this.huecaId}`);
    }).catch((error) => {
      console.error('Error al actualizar la hueca:', error);
    });
  }

  redirectToHome() {
    this.router.navigate(['/home']);
  }
}
