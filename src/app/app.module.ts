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

@NgModule({
  declarations: [
    AppComponent,
    MainFooterComponent,
    MainHeaderComponent,
    ProductsComponent,
    UsersComponent,
    ProductItemComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
