import { Component } from '@angular/core';
import { CartComponent } from "../components/cart/cart.component";
import { ProductListComponent } from "../components/product-list/product-list.component";

@Component({
  selector: 'app-pos-main',
  standalone: true,
  imports: [CartComponent, ProductListComponent],
  templateUrl: './pos-main.component.html',
  styleUrl: './pos-main.component.css'
})
export class PosMainComponent {

}
