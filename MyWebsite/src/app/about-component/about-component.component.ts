import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-about-component',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './about-component.component.html',
  styleUrl: './about-component.component.css'
})
export class AboutComponentComponent {
  
}
