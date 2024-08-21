import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [FormsModule,CarouselComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  inquiryData={
    name:'',
    email:'',
    message:''
  };

  onSubmit(){
    console.log('Inquiry Data here:',this.inquiryData)
  }


}
