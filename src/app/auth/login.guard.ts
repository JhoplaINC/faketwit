import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class LoginGuard {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> {
        return this.authService.currentUser$.pipe(
            map((user) => {
                if (!user) {
                    // No está logueado, puede ir a login
                    return true;
                }
                // Ya logueado, redirige a profile
                return this.router.createUrlTree(['/profile']);
            })
        );
    }
}
