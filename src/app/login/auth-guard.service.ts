import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor() {
    }

    canActivate(): boolean {
        console.log('AuthGuard#canActivate called');
        return true;
    }

}
