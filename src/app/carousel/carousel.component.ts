import { Component ,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {
  slides = [
    { image: "/apple-8591539_1280.jpg", alt: 'Slide 1' },
    { image: '/spring-roll-6760871_1920.jpg', alt: 'Slide 2' },
    { image: '/blueberries-2278921_1920.jpg', alt: 'Slide 3' },
  ];

  currentSlide = 0;
  slideInterval: any;

  ngOnInit() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // 5 seconds interval
  }

  ngOnDestroy() {
    clearInterval(this.slideInterval);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

}
