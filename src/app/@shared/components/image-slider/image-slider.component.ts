import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

  @Input() imgList: string[] = [];
  @Input() msTimeSlide: number = 2000;

  public startIndex: number = 0;

  ngOnInit(): void {
    this.repeat();
  }

  private repeat(): void {
    setTimeout(() => {
      this._functionSlide();
      this.repeat();
    }, this.msTimeSlide);
  }

  private _functionSlide(): void {
    const slides = Array.from(document.getElementsByClassName('mall-show-slide'));
    if (slides === []) {
      this.repeat();
    }
    for (const x of slides) {
      const y = x as HTMLElement;
      y.style.display = 'none';
    }
    if (this.startIndex > slides.length - 1) {
      this.startIndex = 0;
      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    } else {

      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    }
  }

}
