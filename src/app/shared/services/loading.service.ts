import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(
    public loadingController: LoadingController
  ) { }

  openLoader() {
    this.loadingController.create({
        message: ''
    }).then((response) => {
        response.present();
    });
  }

  dismissLoader() {
    this.loadingController.dismiss()
    .then((response) => {
        console.log('[dismissLoader] closed', response);
    }).catch((err) => {
        console.log('[dismissLoader] Error: ', err);
    });
  } 

}
