import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import {HelloComponent} from "~/app/hello/hello.component";
import {CartViewComponent} from "~/app/cart-view/cart-view.component";



const routes: Routes = [
   { path: "", component: HelloComponent },
   { path: "cart", component: CartViewComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
