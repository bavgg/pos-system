import { Component, Input } from '@angular/core';
import { StateService } from '../../services/state.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar-link',
  standalone: true,
  imports: [NgClass],
  templateUrl: './sidebar-link.component.html',
  styleUrl: './sidebar-link.component.css'
})
export class SidebarLinkComponent {
  @Input({ required: true }) title!: string;

  constructor(public stateService: StateService ) {}

  onClick() {
    this.stateService.selectedLink.set(this.title);
  }
}
