import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-row',
  standalone: true,
  imports: [],
  templateUrl: './table-row.component.html',
  styleUrl: './table-row.component.css'
})
export class TableRowComponent {
  @Input() title: string = "Jonas";
  @Input() total: string = "Jonas";
  @Input() quantity: string = "Jonas";
  @Input() discount_amount: string = "Jonas";
  @Input() discount_percent: string = "Jonas";
  @Input() price_amount: string = "Jonas";
}
