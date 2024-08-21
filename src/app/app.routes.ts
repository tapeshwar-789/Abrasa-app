import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path:'',component:HomepageComponent},
    {path:'services',component:ServicesComponent},
    {path:'contact',component:ContactComponent},
    {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
