import { Component } from '@angular/core';
import { FileService } from './shared/services/file.service';
import { ImagesService } from './shared/services/images.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  private imagesArray = [];
  private allImages = [];
  private totalImages = 4000;

  constructor(
    private imagesService: ImagesService,
    private fileService: FileService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.getInitialData();
  }

  async getInitialData() {
    let limit = 100;
    for (let i = 0; this.imagesArray.length < this.totalImages; i++) {
      let numberPage = 0;
      await this.imagesService.getPhotos(numberPage, limit)
        .then(result => {
          if (result.length == 0) {
            numberPage = -1;
            result = this.allImages;
          } else {
            this.allImages = [...this.allImages, ...result];
          }
          this.mapData(result, i);
          numberPage++;
      });
    }
    this.saveInitialData();
  }

  mapData(data, id) {
    let image;
    data.forEach(element => {
      const text = this.randomText();
      image = {
        id: `${id}-${element.id}`,
        photo: element.url,
        text
      }
      this.imagesArray.push(image);
    });
  }
  
  saveInitialData() {
    console.log('[saveInitialData] imagesArray', this.imagesArray);
    this.fileService.writeJsonData(this.imagesArray, 'initialData');
  }

  randomText(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

}
