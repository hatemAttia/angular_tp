import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 products:any;
  constructor(private http: HttpClient) { }
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


  /**
   * Option http
   */
   private createRequestOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return headers;
  }

  /**
   * traitement Erreur
   * @param erreur 
   */
  traitementErreur(erreur: HttpErrorResponse) {
    if (erreur.error instanceof ErrorEvent) {
      console.log('Une erreur s est produite', erreur.error.message);
    } else
      console.error("code renvoyé par le backen " + erreur.status +
        + "le corps était : " + JSON.stringify(erreur.error));
    return throwError("quelque chose est arrivé ; Veuillez reessayer plus tard");
  }
   
    addProduct(data) {
      const options = this.createRequestOptions();
      return this.http.post("/tp/product", JSON.stringify(data), { headers: options }).
        pipe(retry(2),
          catchError(this.traitementErreur))
    }
  
    
      getProduct() {
        const options = this.createRequestOptions();
        return this.http.get("/tp/product/_search").
          pipe(retry(2),
            catchError(this.traitementErreur))
      }
    
}


