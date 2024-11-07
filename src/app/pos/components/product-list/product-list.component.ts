import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../breadcrumb/breadcrumb.component";
import { ItemComponent } from "../item/item.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [BreadcrumbComponent, ItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

}
