import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

// import { AppRouterModule } from './app.routing';

import { AppComponent } from './app.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ProductsComponent } from './products/products.component';
import { AppRoutersModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    SuppliersComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
