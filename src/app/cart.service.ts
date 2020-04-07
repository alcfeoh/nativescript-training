import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {LicensePlate} from './license-plate';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor() {

    }

    getCartContents(): Observable<LicensePlate[]> {
        // TODO
        return of([]);
    }

    addToCart(plate: LicensePlate): Observable<boolean> {
        // TODO
        return of(true);
    }

    removeFromCart(plate: LicensePlate): Observable<boolean> {
        // TODO
        return of(true);
    }
}
