import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ListImagesComponent } from './components/list-images/list-images.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  entryComponents: [],
  declarations: [
    ListImagesComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    ListImagesComponent,
    FooterComponent,
    HeaderComponent
  ],
  providers: []
})
export class SharedModule { }
