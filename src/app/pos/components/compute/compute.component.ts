import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-compute',
  standalone: true,
  imports: [],
  templateUrl: './compute.component.html',
  styleUrl: './compute.component.css'
})
export class ComputeComponent {
  @Input( {required: true }) t1!: string;
  @Input( {required: true }) t2!: string;
  @Input( {required: true }) t3!: string;
}
