import { Routes } from '@angular/router';
import { AboutComponentComponent } from './about-component/about-component.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: 'about', component: AboutComponentComponent},
    {path: 'home', component: AppComponent}
];
