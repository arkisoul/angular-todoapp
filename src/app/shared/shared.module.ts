import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { BgColorDirective } from './directives/bg-color/bg-color.directive';
import { UnlessDirective } from './directives/unless/unless.directive';



@NgModule({
  declarations: [CardComponent, BgColorDirective, UnlessDirective],
  imports: [CommonModule],
  exports: [CardComponent, BgColorDirective, UnlessDirective],
})
export class SharedModule {}
