import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormatter]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format;

  constructor(private el: ElementRef) { }

    @HostListener('focus') onFocus() {
      console.log('on focus');
    }

    @HostListener('blur') onBlur() {
      console.log('on blur');
      const value = this.el.nativeElement.value;
      if (this.format == 'lowercase') {
        this.el.nativeElement.value = value.toLowerCase();
      } else {
        this.el.nativeElement.value = value.toUpperCase();
      }
    }

}
