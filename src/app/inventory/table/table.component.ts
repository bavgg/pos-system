import { Component } from '@angular/core';
import { TableRowComponent } from '../table-row/table-row.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableRowComponent, NgClass],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  theads = [ '', '', 'Name', 'Type', 'SKU', 'Category', 'Status', 'Author', 'Date']
  tnum = '9';
}
