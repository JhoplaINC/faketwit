import { Component } from '@angular/core';
import { LoginComponent } from '../../components/form/login/login.component';

@Component({
    selector: 'login-page',
    standalone: true,
    imports: [LoginComponent],
    templateUrl: './login.page.html',
    styleUrl: './login.page.scss',
})
export class LoginPage {}
