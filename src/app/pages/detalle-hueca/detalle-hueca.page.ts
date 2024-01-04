import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-hueca',
  templateUrl: './detalle-hueca.page.html',
  styleUrls: ['./detalle-hueca.page.scss'],
})
export class DetalleHuecaPage implements OnInit {
  huecaId: string;
  hueca: any;
  latitude: number;
  longitude: number;

  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.huecaId = id ? id : ''; // Si id es null o undefined, asigna una cadena vacía
    this.firebaseService.getHuecaById(this.huecaId).subscribe((hueca: any) => {
      this.hueca = hueca;
      this.latitude = this.hueca.latitude; // Obtener la latitud de la hueca
      this.longitude = this.hueca.longitude; // Obtener la longitud de la hueca
    });
  }

  getGoogleMapsUrl(): string {
    return `https://www.google.com/maps?q=${this.latitude},${this.longitude}`;
  }

  openGoogleMaps() {
    const url = this.getGoogleMapsUrl();
    window.open(url, '_blank');
  }

  redirectToHome() {
    // Redirige al usuario al componente 'home'
    this.router.navigate(['/home']);
  }
}
