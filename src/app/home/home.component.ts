import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebook, faTwitter, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faChevronDown, faWifi, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule, MatToolbarModule, MatIconModule, MatFormFieldModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFacebook, faTwitter, faWhatsapp, faInstagram, faWifi, faEnvelope, faPhone, faChevronDown, faPlayCircle);
  }
}
