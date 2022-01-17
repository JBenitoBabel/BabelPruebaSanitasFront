import { Injectable } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private filename: string;

  constructor() { }

  writeJsonData(data, nameFile) {
    data = JSON.stringify(data);
    Filesystem.writeFile({
      path: `${nameFile}.json`,
      data: data,
      directory: Directory.Data,
      encoding: Encoding.UTF8,
      recursive: true
    });
  }

  writeJsonURL(url, nameFile) {
    async () => {
     fetch(url).then(res => res.json())
     .then(json => {
        const data = JSON.stringify(json);
        Filesystem.writeFile({
          path: `${nameFile}.json`,
          data: data,
          directory: Directory.Data,
          encoding: Encoding.UTF8,
          recursive: true
        });
     });
   }
  }

  getJson(filename): any {
    this.filename = filename;
    let json = this.readJson();
    return json;
  }

  readJson = async () => {
      const contents = await Filesystem.readFile({
        path: `${this.filename}.json`,
        directory: Directory.Data,
        encoding: Encoding.UTF8,
      });
    
      return JSON.parse(contents.data)
    }
  
}
