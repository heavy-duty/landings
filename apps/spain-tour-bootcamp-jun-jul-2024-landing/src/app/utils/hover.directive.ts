import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({ selector: '[bootcampShowOnHover]', standalone: true})
export class ShowOnHoverDirective {
  @HostBinding('class')
  elementClass = 'opacity-0';

  @HostListener('mouseenter') onMouseEnter() {
    this.elementClass = 'opacity-100';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementClass = 'opacity-0';
  }
}