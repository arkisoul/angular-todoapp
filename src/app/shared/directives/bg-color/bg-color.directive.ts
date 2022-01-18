import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[todoappBgColor]',
})
export class BgColorDirective implements AfterViewInit {
  @Input() bgColor!: string;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    console.log(this.bgColor);
    this.el.nativeElement.style.backgroundColor = this.bgColor;
    this.el.nativeElement.style.padding = '12px 15px';
    this.el.nativeElement.style.boxSizing = 'border-box';
    this.el.nativeElement.style.color = '#fff';
  }
}
