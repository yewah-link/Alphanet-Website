import { Component } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faTwitter, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faChevronDown, faWifi, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FontAwesomeModule, MatToolbarModule, MatIconModule,MatFormFieldModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFacebook, faTwitter, faWhatsapp, faInstagram, faWifi, faEnvelope, faPhone, faChevronDown, faPlayCircle);
  }


}
