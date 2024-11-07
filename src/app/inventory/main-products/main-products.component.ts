import { Component } from '@angular/core';


import { OptionListComponent } from "../option-list/option-list.component";
import { SelectComponent } from "../select/select.component";
import { NavArrowsComponent } from '../nav-arrows/nav-arrows.component';
import { TableRowComponent } from '../table-row/table-row.component';
import { TableComponent } from "../table/table.component";


@Component({
  selector: 'app-main-products',
  standalone: true,
  imports: [OptionListComponent, SelectComponent, NavArrowsComponent, TableRowComponent, TableComponent],
  templateUrl: './main-products.component.html',
  styleUrl: './main-products.component.css'
})
export class MainProductsComponent {

}
