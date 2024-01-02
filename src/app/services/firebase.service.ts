import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}

  guardarDatosLocacion(nombre: string, descripcion: string, latitude: number, longitude: number, foto: string) {
    return this.firestore.collection('Huecas').add({
      nombre,
      descripcion,
      latitude,
      longitude,
      foto
    });
  }
}
