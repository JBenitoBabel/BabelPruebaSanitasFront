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

  public controlFile = false;

  constructor(
    private fileService: FileService
  ) {}

  ngOnInit() {
    console.log('[HomePage][ngOnInit]');
    clearTimeout(this.delayTimer);
    const self = this;
    this.delayTimer = setTimeout(function() {
      self.getInitialJson();
    }, 5000);
  }

  getInitialJson() {
    this.getDataFile('initialData');
  }

  getDataFile(fileName) {
    this.fileService.getJson(fileName).then(result => {
      this.imagesArray = result;
      this.controlFile = false;
    }).catch((e) => {
      console.error('[HomePage][getDataFile] error', e);
      this.controlFile = true;
    });
  }

}
