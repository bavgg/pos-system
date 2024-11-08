import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-header',
  standalone: true,
  imports: [],
  templateUrl: './table-header.component.html',
  styleUrl: './table-header.component.css'
})
export class TableHeaderComponent {
  @Input( {required: true }) title!: string;
}
