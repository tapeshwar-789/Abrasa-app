import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactComponent } from '../contact/contact.component';
import { CarouselComponent } from '../carousel/carousel.component'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardsComponent } from "../cards/cards.component";
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [FormsModule, HeaderComponent, HeroComponent, FooterComponent, ContactComponent, CarouselComponent, CommonModule,CardsComponent, CardsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
 

}
