import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FilesizePipe implements PipeTransform {

  transform(value: number, extension: string = 'KB'): string {
    switch (extension) {
      case 'KB':
        return Math.fround(value / 1000).toFixed(4) + 'KB';
        break;

      case 'MB':
        return Math.fround(value / (1024 * 1024)).toFixed(4) + 'MB';
        break;
      
      case 'GB':
        return Math.fround(value / (1024 * 1024 * 1024)).toFixed(4) + 'GB';
        break;

      default:
        return value + 'Bytes';
        break;
    }
  }

}
