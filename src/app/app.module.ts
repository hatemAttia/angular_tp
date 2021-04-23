import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainFooterComponent } from './shared/component/main-footer/main-footer.component';
import { MainHeaderComponent } from './shared/component/main-header/main-header.component';

import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { routes } from './shared/component/router.config';
import { RouterModule } from '@angular/router';
import { ProductItemComponent } from './product-item/product-item.component';
import { TruncatePipe } from './shared/pipes/truncate.pipe';
import { AddProductComponent } from './add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainFooterComponent,
    MainHeaderComponent,
    ProductsComponent,
    UsersComponent,
    ProductItemComponent,
    TruncatePipe,
    AddProductComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
