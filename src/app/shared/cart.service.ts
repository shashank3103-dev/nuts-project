import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList:any=[];
  public productList = new BehaviorSubject<any>([]);
  constructor() { }
 
  addtocart(product:any){
   this.cartItemList.push(product);
   this.productList.next(this.cartItemList);
  
   console.log(this.cartItemList);
  }



}
