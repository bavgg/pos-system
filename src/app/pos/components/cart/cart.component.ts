import { Component } from '@angular/core';
import { MenuItemComponent } from "../menu-item/menu-item.component";
import { TableRowComponent } from '../table-row/table-row.component';
import { CartButtonComponent } from "../cart-button/cart-button.component";
import { ComputeComponent } from "../compute/compute.component";


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MenuItemComponent, TableRowComponent, CartButtonComponent, ComputeComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
