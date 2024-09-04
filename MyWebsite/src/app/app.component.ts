import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { AboutComponentComponent } from "./about-component/about-component.component";
import { HeaderComponent } from './header/header.component';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive, RouterModule,
     AboutComponentComponent,
     HeaderComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyWebsite';
  Tag : boolean;

  constructor(private router: Router, private dataservice: DataServiceService){
    this.Tag = dataservice.getShow();
  }

  
  
}
