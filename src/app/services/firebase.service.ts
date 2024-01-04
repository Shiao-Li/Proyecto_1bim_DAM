import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(
    private firestore: AngularFirestore,
    private afStorage: AngularFireStorage
  ) { }

  // Método para obtener todas las huecas
  getHuecas() {
    return this.firestore.collection('Huecas').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  // Método para obtener una hueca por su ID
  getHuecaById(huecaId: string) {
    return this.firestore.collection('Huecas').doc(huecaId).valueChanges();
  }

  // Método para actulizar datos de la hueca
  updateHueca(huecaId: string, nombre: string, descripcion: string, latitude: number, longitude: number) {
    return this.firestore.collection('Huecas').doc(huecaId).update({
      nombre,
      descripcion
    });
  }
  
  updateCoordinates(huecaId: string, latitude: number, longitude: number) {
    return this.firestore.collection('Huecas').doc(huecaId).update({
      latitude,
      longitude
    });
  }

  // Método para eliminar una hueca por su ID
  deleteHueca(huecaId: string) {
    return this.firestore.collection('Huecas').doc(huecaId).delete();
  }

  // Método para guardar datos de hueca con múltiples fotos
  async guardarDatosHuecaConFotos(
    nombre: string,
    descripcion: string,
    latitude: number,
    longitude: number,
    fotos: File[]
  ) {
    // Subir múltiples fotos al almacenamiento de Firebase y obtener las URLs de descarga
    const promises = fotos.map(async foto => {
      const fileStoragePath = `filesStorage/${new Date().getTime()}_${foto.name}`;
      const imageRef = this.afStorage.ref(fileStoragePath);
      await this.afStorage.upload(fileStoragePath, foto);
      const downloadURL = await imageRef.getDownloadURL().toPromise();
      return downloadURL;
    });

    // Esperar a que se completen todas las subidas y obtener las URLs de descarga
    const fotosUrls = await Promise.all(promises);

    // Guardar los datos de la hueca junto con las URLs de las fotos en Firestore
    return this.firestore.collection('Huecas').add({
      nombre,
      descripcion,
      latitude,
      longitude,
      fotos: fotosUrls // Agregar las URLs de las fotos al documento de la hueca
    });
  }
}
