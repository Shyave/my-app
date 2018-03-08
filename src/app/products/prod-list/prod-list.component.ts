import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/product.service';
import { ListComponent } from '../../common/lib/list-view/list.component';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit {
  prodData: any;
  constructor(private prodService: ProductService) { }

  ngOnInit() {
    this.prodService.getProducts()
      .subscribe(prodRes => {
        this.prodData = prodRes;
      });
  }
}
