import { Component } from '@angular/core';
import { faFacebook, faTwitter, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faChevronDown, faWifi, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [FontAwesomeModule, MatToolbarModule, MatIconModule,MatFormFieldModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {

}
