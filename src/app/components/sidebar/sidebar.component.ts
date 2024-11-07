import { Component } from '@angular/core';
import { SidebarLinkComponent } from "../sidebar-link/sidebar-link.component";
import { LogoComponent } from "../logo/logo.component";
import { NgClass } from '@angular/common';
import { SidebarDropdownComponent } from "../sidebar-dropdown/sidebar-dropdown.component";
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarLinkComponent, LogoComponent, NgClass, SidebarDropdownComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(public stateService: StateService) {}
}
