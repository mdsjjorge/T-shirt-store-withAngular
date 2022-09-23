import { Injectable } from '@angular/core';
import { IProductCart } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itens: IProductCart[] = [];

  constructor() { }

  getCart() {
    return JSON.parse(localStorage.getItem("cart") || "" );
  }

  addToCart( product: IProductCart) {
    this.itens.push(product);
    localStorage.setItem("cart", JSON.stringify(this.itens));
  }

  clearCart() {
    this.itens = [];
    localStorage.clear();
  }
}
