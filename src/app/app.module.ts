import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ProductsComponent } from './products/products.component';
import { AppRoutersModule } from './app.routing';

import { ProductService } from './shared/product.service';
import { SupplierService } from './shared/suppliers.service';
import { HandleError } from './shared/handleErr.service';

@NgModule({
  declarations: [
    AppComponent,
    SuppliersComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutersModule,
    HttpModule,
    HandleError
  ],
  providers: [
    SupplierService,
    ProductService,
    HandleError
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
