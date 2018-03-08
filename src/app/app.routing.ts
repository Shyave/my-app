import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ProdListComponent } from './products/prod-list/prod-list.component';
import { ProdViewComponent } from './products/prod-view/prod-view.component';
import { AddProdComponent } from './products/add-prod/add-prod.component';

import { SuppliersComponent } from './suppliers/suppliers.component';
import { SuppliersListComponent } from './suppliers/list-supplier/list-suppliers.component';
import { AddSupplierComponent } from './suppliers/add-supplier/add-supplier.component';

const routes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', component: ProductsComponent,
        children: [
            { path: '', component: ProdListComponent },
            { path: 'addProduct', component: AddProdComponent },
            { path: 'viewProduct/:id', component: ProdViewComponent }
        ]
    },
    { path: 'suppliers', component: SuppliersComponent,
        children: [
            { path: '', component: SuppliersListComponent },
            { path: 'addSupplier', component: AddSupplierComponent }
        ]
    },
];
export const AppRoutersModule = RouterModule.forRoot(routes);
