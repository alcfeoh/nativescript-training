import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {LicensePlate} from './license-plate';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor(private http: HttpClient) { }

    getCartContents(): Observable<LicensePlate[]> {
        return this.http.get<LicensePlate[]>('https://lp-store.herokuapp.com/cart');
    }

    addToCart(plate: LicensePlate) {
        // TODO 
    }

    removeFromCart(plate: LicensePlate) {
        return this.http.delete('https://lp-store.herokuapp.com/cart/' + plate._id);
    }

}
