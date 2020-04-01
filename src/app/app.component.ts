import { Component } from "@angular/core";
import {CALIFORNIA_PLATE, LICENSE_PLATES} from "~/app/mock-data";
import {LicensePlate} from "~/app/license-plate";

@Component({
    selector: "ns-app",
    template: `
        <StackLayout>
            <ns-hello></ns-hello>
            <BottomNavigation>
                <TabStrip>
                    <TabStripItem class="navigation__item">
                        <!--
                            Note TabStripItem will only accept single Label and/or single Image elements that it
                            will "adopt"; any other layout elements you try to specify will be ignored
                        -->
                        <Label text="Home"></Label>
                        <Image src="font://&#xf015;" class="fas t-36"></Image>
                    </TabStripItem>
                    <TabStripItem class="navigation__item">
                        <Label text="Cart"></Label>
                        <Image src="font://&#xf07a;" class="fas t-36"></Image>
                    </TabStripItem>
                    <TabStripItem class="navigation__item">
                        <Label text="Checkout"></Label>
                        <Image src="font://&#xf155;" class="fas t-36"></Image>
                    </TabStripItem>
                </TabStrip>

                <TabContentItem>
                    <page-router-outlet name="homeTab"></page-router-outlet>
                </TabContentItem>

                <TabContentItem>
                    <page-router-outlet name="browseTab"></page-router-outlet>
                </TabContentItem>

                <TabContentItem>
                    <page-router-outlet name="searchTab"></page-router-outlet>
                </TabContentItem>
            </BottomNavigation>
        </StackLayout>
    `
})
export class AppComponent {
    licensePlates: LicensePlate[] = LICENSE_PLATES;
    licensePlate: LicensePlate = CALIFORNIA_PLATE;
}
