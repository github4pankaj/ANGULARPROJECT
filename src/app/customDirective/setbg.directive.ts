import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSetbg]'
})
export class SetbgDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.color='green';
  }

}
