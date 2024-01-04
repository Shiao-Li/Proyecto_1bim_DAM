import { Injectable } from '@angular/core';
import { AngularFireAuth, } from '@angular/fire/compat/auth';
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  constructor(public ngFireAuth: AngularFireAuth) {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);
  }

  isLoggedIn(): boolean {
    const isLoggedIn = !!this.ngFireAuth.currentUser;
    console.log('Is user logged in?', isLoggedIn);
    return isLoggedIn;
  }
  
  async registerUser(email: string, password: string, name: string) {
    return await this.ngFireAuth.createUserWithEmailAndPassword(email, password)

  }

  async loginUser(email: string, password: string) {
    return await this.ngFireAuth.signInWithEmailAndPassword(email, password);

  }

  async resetPassword(email: string) {
    return await this.ngFireAuth.sendPasswordResetEmail(email);

  }
  async getProfile() {
    return await this.ngFireAuth.currentUser
  }

  async signOut(): Promise<boolean> {
    try {
      await this.ngFireAuth.signOut();
      return true; // Si se cierra la sesión exitosamente
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      return false; // En caso de error al cerrar sesión
    }
  }

}
