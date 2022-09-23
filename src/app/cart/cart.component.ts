import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { IProductCart } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  itensCart: IProductCart[] = [];
  total = 0;

  constructor(
    public cartService: CartService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.itensCart = this.cartService.getCart();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.itensCart.reduce((prev,curr) => prev + (curr.price * curr.quantity), 0);
  }

  removeFromCart(productId: number) {
    this.itensCart = this.itensCart.filter(item => item.id !== productId);
    this.cartService.removeFromCart(productId);
    this.calculateTotal();
  }

  buy() {
    alert("you have completed your purchase!");
    this.cartService.clearCart();
    this.router.navigate(["products"])
  }
}
