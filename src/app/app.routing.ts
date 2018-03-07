import { RouterModule, Routes } from '@angular/router';

import { SuppliersComponent } from './suppliers/suppliers.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
    { path: 'suppliers', component: SuppliersComponent },
    { path: 'products', component: ProductsComponent }
];
export const AppRoutersModule = RouterModule.forRoot(routes);
