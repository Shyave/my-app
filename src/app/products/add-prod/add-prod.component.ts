import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/product.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-prod',
    templateUrl: './add-prod.component.html',
    styleUrls: ['./add-prod.component.css']
})
export class AddProdComponent implements OnInit {
    product = {
        prodName: '',
        hsnCode: '',
        category: '',
        unitOfMeasure: ''
    };
    submitted = false;
    error = false;
    // myform = FormGroup;

    constructor(private prodService: ProductService, private router: Router) { }

    ngOnInit() {
    }

    selectUnitValue(): void {
        if (this.product.category === 'Spare Parts') {
            this.product.unitOfMeasure = 'units';
        } else {
            this.product.unitOfMeasure = 'kg';
        }
    }

    submitData(): void {
        this.prodService.addProduct(this.product)
            .subscribe(res => {
                console.log('res = ', res);
                if (res) {
                    this.submitted = true;
                    this.product = {
                        prodName: '',
                        hsnCode: '',
                        category: '',
                        unitOfMeasure: ''
                    };
                } else {
                    this.error = true;
                }
            });
    }
}
