import { Directive, HostBinding, Input, OnInit } from '@angular/core';


@Directive({
  selector: '[animateBounceMe]'
})
export class AnimateBounceMeDirective implements OnInit {

  constructor() { }


  @HostBinding('class')
  elementClass: string | null = 'animate-bounce';

  @Input() timeout: number = 7500;

  ngOnInit(): void {
    setTimeout(() => {
      this.elementClass = null;
    }, this.timeout);
  }

}
