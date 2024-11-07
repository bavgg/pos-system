import { Component } from '@angular/core';
import { MenuItemComponent } from "../menu-item/menu-item.component";
import { TableRowComponent } from '../table-row/table-row.component';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MenuItemComponent, TableRowComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
