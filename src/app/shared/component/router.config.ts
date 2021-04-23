import { Routes } from "@angular/router";
import { AddProductComponent } from "src/app/add-product/add-product.component";
import { ProductsComponent } from "src/app/products/products.component";
import { UsersComponent } from "src/app/users/users.component";

export const routes: Routes = [
    { path: 'users', component: UsersComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'add', component: AddProductComponent }]