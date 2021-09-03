import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[animatePulseMe]'
})
export class AnimatePulseMeDirective implements OnInit {

  constructor() { }
 

  @HostBinding('class')
  elementClass: string | null = 'animate-pulse'

  @Input() timeout: number = 7500;

  ngOnInit(): void {
    setTimeout(() => {
      this.elementClass = null
    }, this.timeout);
  }

}


