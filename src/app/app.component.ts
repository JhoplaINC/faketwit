import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/form/login/login.component';
import { NavbarComponent } from './components/UI/navbar/navbar.component';
import { AuthService } from './auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, NavbarComponent, LoginComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    title = 'faketwit';

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.authService.checkSession();
    }
}
