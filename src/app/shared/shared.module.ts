import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ListImagesComponent } from './components/list-images/list-images.component';

@NgModule({
  entryComponents: [],
  declarations: [
    ListImagesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    ListImagesComponent
  ],
  providers: []
})
export class SharedModule { }
