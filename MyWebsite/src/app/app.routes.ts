import { Routes } from '@angular/router';
import { AboutComponentComponent } from './about-component/about-component.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';

export const routes: Routes = [
    {path: 'about', component: AboutComponentComponent},
    {path: 'home', component: AppComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'resume', component:ResumeComponent}
];
