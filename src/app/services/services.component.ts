import { Component, NgModule } from '@angular/core';
import { CommonModule,NgFor } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule,NgFor,FormsModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services=[{name:'Web Development',description:'Building responsive and modern wed applicatons.'},{name:'Graphic Designs',description:'Create stunning Graphics and visulas.'},{name:'SEO Services',description:'Optimizing websites to rank higher in search engine.'}];
 isVisible:boolean=true

 changeState(){

  this.isVisible=!this.isVisible
 }
}
