import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
private products;
  constructor(private productService:ProductsService) { }
 // private product;
  ngOnInit() {
    this.display();
  }

  display(){
  this.productService.getProduct().subscribe((res:any)=>{
   this.products=res.hits.hits;
    console.log(res.hits.hits);
  });
  }
}
