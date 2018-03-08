import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../shared/suppliers.service';
import { ListComponent } from '../common/lib/list-view/list.component';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})

export class SuppliersComponent implements OnInit {
  suppData: any;
  constructor(private suppliers: SupplierService) { }

  ngOnInit() {
    this.suppliers.getSuppliers()
      .subscribe(suppliersRes => {
        console.log('suppliersRes = ', suppliersRes);
        this.suppData = suppliersRes;
      });
  }
}
