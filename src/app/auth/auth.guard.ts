import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> {
        return this.authService.currentUser$.pipe(
            map((user) => {
                if (user) {
                    // Usuario logueado, puede acceder
                    return true;
                }
                // No logueado, redirige a login
                return this.router.createUrlTree(['/login']);
            })
        );
    }
}
