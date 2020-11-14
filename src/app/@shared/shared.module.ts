import {NgModule} from '@angular/core';
import {ImageSliderComponent} from './components/image-slider/image-slider.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [ImageSliderComponent],
  imports: [
    CommonModule
  ],
  exports: [ImageSliderComponent]
})
export class SharedModule {
}
