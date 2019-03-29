import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../services';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router) { }

    canActivate(): boolean {
        // if (this.auth.authenticated) { 
        //     return true; 
        // } else {
        //     this.router.navigate(['/login']);
        // }
        return true;
    }

}