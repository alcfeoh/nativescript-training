import {Component, Input} from "@angular/core";
import {LicensePlate} from "~/app/license-plate";
import { alert } from "tns-core-modules/ui/dialogs";

@Component({
    selector: "ns-license-plate",
    templateUrl: "./license-plate.component.html",
    styleUrls: ["./license-plate.component.css"]
})
export class LicensePlateComponent {

    @Input()
    plate: LicensePlate;

    @Input()
    buttonText: string;

    addToCart() {
        let options = {
            title: "Plate added to cart",
            message: "Thanks for shopping with us",
            okButtonText: "OK"
        };
        alert(options);
    }
}
