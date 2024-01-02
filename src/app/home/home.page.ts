import { Component, OnInit } from '@angular/core';
import { UserPhoto, PhotoService } from 'src/app/services/photo.service';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  email :any
  constructor(private authService:AuthServiceService,private router: Router,  public photoService: PhotoService, public actionSheetController: ActionSheetController) {}
  ngOnInit(): void {
   
    this.authService.getProfile().then((user) =>{
        this.email = user?.email
        console.log(user);
        
    })
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

 signOut(){

  this.authService.signOut().then(() =>{
    this.router.navigate(['/landing'])
  })
 }

 AgregarHueca() {
    this.router.navigateByUrl('/agregar-hueca'); // Reemplaza 'nueva-pagina' con la ruta de tu nueva página
  }
}
