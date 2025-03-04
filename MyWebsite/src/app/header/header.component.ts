import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private datasource: DataServiceService){}
  about() {
    console.log("About");
    console.warn("About warning");
    this.datasource.setShow(true);
    // this.router.navigate(['/about']);
  }
}
