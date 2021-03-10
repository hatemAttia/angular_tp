import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
private products:Array<Product>
  constructor() { }
  getProducts():any{
    this.products=[{
      id:1,
      name:"sumsung Galaxy sc",
      description:"***************************************************************************************************************",
      image:"/assets/images/tel.png",
      price:150,
      category:"Mobile",
      favorite:false
    },{
      id:2,
      name:"sumsung Galaxy sc",
      description:"*****************************",
      image:"/assets/images/tel.png",
      price:150,
      category:"Mobile",
      favorite:false
    },{
      id:3,
      name:"sumsung Galaxy sc",
      description:"*****************************",
      image:"/assets/images/tel.png",
      price:150,
      category:"Mobile",
      favorite:false
    }]
    return this.products;
  
  }
}


