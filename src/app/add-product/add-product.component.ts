import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;
  name: String;
  price: number;
  description: String;
  pSubmit: boolean = false;

  constructor(private productBuilder: FormBuilder,
    productService: ProductsService) {

  }

  ngOnInit() {
    this.productForm = this.productBuilder.group({
      'name': [null, Validators.required],
      'price': [null, Validators.compose([Validators.required, Validators.pattern("^(0|[1-9][0-9]*)$")])],
      'description': [null, Validators.required, Validators.minLength(20)]
    });
  }

  addProduct(){}

}
