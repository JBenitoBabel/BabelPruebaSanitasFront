import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.scss'],
})
export class ListImagesComponent implements OnInit {

  @Input() imagesList = [];

  public allImages;
  public imagesShown = [];
  private page = 0;

  public moreData = true;

  constructor() { }

  ngOnInit() {
    this.allImages = Object.assign({}, this.imagesList);
    this.showData();
  }

  showData() {
    let position = 20*this.page;
    let moreData = this.imagesList.slice(position, position+20);
    if (moreData.length != 0) {
      this.imagesShown = [...this.imagesShown, ...moreData];
    } else {
      this.moreData = false;
    }
  }

  nextPage(event) {
    this.page++;
    this.showData();
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }

  resetData() {

  }

}
