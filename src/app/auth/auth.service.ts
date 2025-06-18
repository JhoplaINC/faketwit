import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import iLogin from '../interfaces/login.interface';
import { DUMMY_USERS } from '../services/dummy/dummy-users';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private _currentUser = new BehaviorSubject<iLogin | null>(null);

    public currentUser$: Observable<iLogin | null> =
        this._currentUser.asObservable();

    login(email: string, password: string): iLogin | boolean {
        const user = DUMMY_USERS.find(
            (u) => u.email === email && u.password === password
        );

        if (user) {
            const loginData: iLogin = {
                name: user.name,
                lastname: user.lastname,
                username: user.username,
                email: user.email,
                password: user.password,
                token: 'fake-token-1234567890-generated',
                rol: user.rol,
            };

            localStorage.setItem('auth_token', loginData.token);
            localStorage.setItem('auth_user', JSON.stringify(loginData));
            this._currentUser.next(loginData);

            window.location.href = '/profile';

            return loginData;
        }

        return false;
    }

    logout(): void {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_user');
        this._currentUser.next(null);
        window.location.href = '/';
    }

    checkSession(): void {
        const stored = localStorage.getItem('auth_user');
        if (stored) {
            const parsed = JSON.parse(stored);
            this._currentUser.next(parsed);
        }
    }
}
