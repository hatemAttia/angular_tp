import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './shared/component/main-header/main-header.component';
import { MainFooterComponent } from './shared/component/main-footer/main-footer.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { routes } from './shared/component/config/router.config';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    ProductsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
