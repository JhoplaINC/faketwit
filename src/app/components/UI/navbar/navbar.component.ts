import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import iLogin from '../../../interfaces/login.interface';
import { AuthService } from '../../../auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
    user$: Observable<iLogin | null>;

    constructor(private authService: AuthService) {
        this.user$ = this.authService.currentUser$;
    }

    logout() {
        this.authService.logout();
    }

    ngOnInit(): void {}
}
