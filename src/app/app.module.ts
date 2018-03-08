import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProdViewComponent } from './products/prod-view/prod-view.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SuppliersListComponent } from './suppliers/list-supplier/list-suppliers.component';
import { AddSupplierComponent } from './suppliers/add-supplier/add-supplier.component';
import { ListComponent } from './common/lib/list-view/list.component';

import { AppRoutersModule } from './app.routing';

import { ProductService } from './shared/product.service';
import { SupplierService } from './shared/suppliers.service';
import { HandleError } from './shared/handleErr.service';
import { ProdListComponent } from './products/prod-list/prod-list.component';
import { AddProdComponent } from './products/add-prod/add-prod.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SuppliersComponent,
    AddSupplierComponent, SuppliersListComponent,
    ListComponent,
    ProdViewComponent,
    ProdListComponent,
    AddProdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutersModule,
    HttpModule,
    FormsModule,
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
