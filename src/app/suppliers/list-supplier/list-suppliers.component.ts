import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../../shared/suppliers.service';
import { ListComponent } from '../../common/lib/list-view/list.component';

@Component({
  selector: 'app-suppliers',
  templateUrl: './list-suppliers.component.html',
  styleUrls: ['./list-suppliers.component.css']
})

export class SuppliersListComponent implements OnInit {
  suppData: any;
  constructor(private suppliers: SupplierService) { }

  ngOnInit() {
    this.suppliers.getSuppliers()
      .subscribe(suppliersRes => {
        this.suppData = suppliersRes;
        console.log('data = ', this.suppData);
      });
  }
}
