import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { AnimatePulseMeDirective } from './directives/animate-pulse-me.directive';
import { AnimateBounceMeDirective } from './directives/animate-bounce-me.directive';



@NgModule({
  declarations: [
    LoaderComponent,
    TruncatePipe,
    AnimatePulseMeDirective,
    AnimateBounceMeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [LoaderComponent, TruncatePipe, AnimatePulseMeDirective, AnimateBounceMeDirective]
})
export class SharedModule { }
