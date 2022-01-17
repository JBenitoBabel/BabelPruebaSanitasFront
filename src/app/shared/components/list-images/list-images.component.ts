import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.scss'],
})
export class ListImagesComponent implements OnInit {

  @Input() imagesList = [];

  public selectedImages = [];
  public imagesShown = [];
  private page = 0;

  public hasData = true;

  private delayTimer;
  public filter = '';

  constructor() { }

  ngOnInit() {
    this.selectedImages = this.imagesList;
    this.showData();
  }

  showData() {
    let position = 10*this.page;
    let moreData = this.selectedImages.slice(position, position+10);
    if (moreData.length != 0) {
      this.imagesShown = [...this.imagesShown, ...moreData];
    } else if (this.imagesShown.length == 0) {
      this.hasData = false;
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
    this.selectedImages = this.imagesList;
    this.page = 0;
    this.imagesShown = [];
    this.filter = null;
    this.hasData = true;
  }

  refresh() {
    this.resetData();
    this.showData();
  }

  search(e) {
    const searchTerm = e.detail.value;
    clearTimeout(this.delayTimer);
    const self = this;
    this.delayTimer = setTimeout(function() {
      if (searchTerm.length >= 1) {
        self.resetData();
        self.searchFilter(searchTerm);
      } else {
        self.refresh();
      }
    }, 500);
  }

  searchFilter(searchTerm) {
    this.filter = searchTerm;
    this.selectedImages = [];
    this.imagesList.forEach(element => {
      if (element.id.includes(searchTerm) 
      || element.text.toLowerCase().includes(searchTerm.toLowerCase())) {
        this.selectedImages.push(element);
      }
    });
    this.showData();
  }

}
