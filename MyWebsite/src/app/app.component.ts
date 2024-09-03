import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { AboutComponentComponent } from "./about-component/about-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive, RouterModule, AboutComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyWebsite';
  Tag = false;

  constructor(private router: Router){}
  about() {
    this.Tag = true;
    console.log("About");
    console.warn("About warning");
    // this.router.navigate(['/about']);
  }
}
