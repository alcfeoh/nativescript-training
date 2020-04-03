import { Component } from "@angular/core";
import {CALIFORNIA_PLATE, LICENSE_PLATES} from "~/app/mock-data";
import {LicensePlate} from "~/app/license-plate";
import {LicensePlateService} from "~/app/license-plate.service";

@Component({
    selector: "ns-app",
    templateUrl: 'app.component.html'
})
export class AppComponent {
    licensePlates: LicensePlate[];
    licensePlate: LicensePlate = CALIFORNIA_PLATE;

    constructor(service: LicensePlateService) {
        service.getList().subscribe(data=> this.licensePlates = data);
    }
}
