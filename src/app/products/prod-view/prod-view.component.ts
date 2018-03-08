import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'app-prod-view',
  templateUrl: './prod-view.component.html',
  styleUrls: ['./prod-view.component.css', '../../common/lib/list-view/list.component.css']
})
export class ProdViewComponent implements OnInit {
  prodData: any;
  constructor(private route: ActivatedRoute, private prodService: ProductService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.prodService.getProductDetail(id)
      .subscribe(res => {
        this.prodData = res;
        console.log('prodData = ', this.prodData);
      });
  }

}
