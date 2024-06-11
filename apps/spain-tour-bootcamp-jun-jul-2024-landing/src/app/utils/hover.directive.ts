import { AfterViewInit, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({ selector: '[bootcampShowOnHover]', standalone: true})
export class ShowOnHoverDirective implements AfterViewInit {
  firstChild: HTMLElement;
  secondChild: HTMLElement;
  initialFirstChildClass = '';
  initialSecondChildClass = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.firstChild = this.el.nativeElement.childNodes[0];
    this.secondChild = this.el.nativeElement.childNodes[1];
  }
  
  ngAfterViewInit(): void {
    console.log("entra");
    this.firstChild = this.el.nativeElement.childNodes[0];
    this.secondChild = this.el.nativeElement.childNodes[1];
    
    this.initialFirstChildClass = this.firstChild.className.toString();
    this.initialSecondChildClass = this.secondChild.className.toString();
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.firstChild.className = `${this.initialFirstChildClass} opacity-0`;
    this.secondChild.className = `${this.initialSecondChildClass} opacity-100`;    
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.firstChild.className = `${this.initialFirstChildClass} opacity-100`;
    this.secondChild.className = `${this.initialSecondChildClass} opacity-0`;
  }
}