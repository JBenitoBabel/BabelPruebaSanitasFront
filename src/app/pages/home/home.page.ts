import { Component, OnInit } from '@angular/core';
import { FileService } from '../../shared/services/file.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private delayTimer;
  public imagesArray;

  constructor(
    private fileService: FileService
  ) {}

  ngOnInit() {
    console.log('[HomePage][ngOnInit]');
    clearTimeout(this.delayTimer);
    const self = this;
    this.delayTimer = setTimeout(function() {
      const data = self.getInitialJson();
      console.log('[HomePage][setTimeout]', data);
    }, 1000);
  }
  
  getInitialJson() {
    console.log('[HomePage][readInitialJson]');
    this.getDataFile('initialData');
  }

  getDataFile(fileName){
    this.fileService.getJson(fileName).then(result => {
      console.log('[getDataFile]', result);
      this.imagesArray = result;
    });
  }

}
