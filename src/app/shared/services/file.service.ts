import { Injectable } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() { }

  writeJsonData(data, nameFile) {
    data = JSON.stringify(data);
    console.log('[writeJsonData] stringify', data);
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

  readJson(nameFile) {
    async () => {
      console.log('[readSecretJson] Directory', Directory.Data);
      const contents = await Filesystem.readFile({
        path: `${nameFile}.json`,
        directory: Directory.Data,
        encoding: Encoding.UTF8,
      });
    
      console.log('secrets:', contents);
      console.log('parse:', JSON.parse(contents.data));
    }
  }

}
