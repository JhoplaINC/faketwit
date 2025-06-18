import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAt, faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FontAwesomeModule, FormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent {
    // Iconos de FontAwesome
    faAt = faAt;
    faLock = faLock;

    // Propiedades del formulario
    email: string = '';
    password: string = '';

    constructor(private authService: AuthService) {}

    onSubmit() {
        const res = this.authService.login(this.email, this.password);

        if (res) {
            console.log(res);
        } else {
            alert('Correo o contraseña incorrectos 😕');
        }
    }
}
