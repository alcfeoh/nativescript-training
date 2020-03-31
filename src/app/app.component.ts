import { Component } from "@angular/core";
import {CALIFORNIA_PLATE, LICENSE_PLATES} from "~/app/mock-data";
import {LicensePlate} from "~/app/license-plate";

@Component({
    selector: "ns-app",
    template: `
        <StackLayout>
            <ns-hello></ns-hello>
        </StackLayout>
    `
})
export class AppComponent {
    licensePlates: LicensePlate[] = LICENSE_PLATES;
    licensePlate: LicensePlate = CALIFORNIA_PLATE;
}
