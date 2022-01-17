import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private endpointPicsum = 'https://picsum.photos/v2/list';
  private endpointMockPhotos = '/assets/mocks/photos.json';

  constructor(
    private http: HttpClient
  ) {}

  getPhotos(numberPage, limit): any {
    let url = `${this.endpointPicsum}?page=${numberPage}&limit=${limit}`;
    return new Promise((resolve) => {
      this.http.get(url).subscribe(
        (data: any) => {
          resolve(data);
        },
        (error) => {
          console.error('error getPhotos', error);
        }
      );
    });
  }

}
