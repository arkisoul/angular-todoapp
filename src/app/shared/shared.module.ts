import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { BgColorDirective } from './directives/bg-color/bg-color.directive';
import { UnlessDirective } from './directives/unless/unless.directive';
import { FilesizePipe } from './pipes/filesize/filesize.pipe';



@NgModule({
  declarations: [
    CardComponent,
    BgColorDirective,
    UnlessDirective,
    FilesizePipe,
  ],
  imports: [CommonModule],
  exports: [CardComponent, BgColorDirective, UnlessDirective, FilesizePipe],
})
export class SharedModule {}
