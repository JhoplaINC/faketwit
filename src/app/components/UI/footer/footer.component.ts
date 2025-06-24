import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
    faAngular,
    faBootstrap,
    faGit,
    faGithub,
    faLinkedin,
    faReact,
    faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faAt, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule, FontAwesomeModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
})
export class FooterComponent {
    faReact = faReact;
    faAngular = faAngular;
    faBootstrap = faBootstrap;
    faWhatsapp = faWhatsapp;
    faLinkedin = faLinkedin;
    faGithub = faGithub;
    faGit = faGit;
    faAt = faAt;
    faHeart = faHeart;
}
