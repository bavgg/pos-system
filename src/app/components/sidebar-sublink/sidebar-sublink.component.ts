import { Component, Input } from '@angular/core';
import { StateService } from '../../services/state.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar-sublink',
  standalone: true,
  imports: [NgClass],
  templateUrl: './sidebar-sublink.component.html',
  styleUrl: './sidebar-sublink.component.css'
})
export class SidebarSublinkComponent {
  @Input({ required: true }) title!: string;

  constructor(public stateService: StateService ) {}

  onClick() {
    this.stateService.selectedLink.set(this.title);
  }
}
