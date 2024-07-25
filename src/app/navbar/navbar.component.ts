import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faWifi, faEnvelope, faPhone, faBars } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FontAwesomeModule, CommonModule], // Add CommonModule here
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  mobileMenuVisible = false;
window: any;

  constructor(library: FaIconLibrary) {
    library.addIcons(faFacebook, faTwitter, faWhatsapp, faInstagram, faWifi, faEnvelope, faPhone, faBars);
  }

  toggleMobileMenu(): void {
    this.mobileMenuVisible = !this.mobileMenuVisible;
  }
}
