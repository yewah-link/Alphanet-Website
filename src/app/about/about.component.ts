import { Component } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faTwitter, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faChevronDown, faWifi, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFacebook, faTwitter, faWhatsapp, faInstagram, faWifi, faEnvelope, faPhone, faChevronDown, faPlayCircle);
  }
}
