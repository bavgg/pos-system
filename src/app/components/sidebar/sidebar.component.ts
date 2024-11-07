import { Component } from '@angular/core';
import { SidebarLinkComponent } from "../sidebar-link/sidebar-link.component";
import { LogoComponent } from "../logo/logo.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarLinkComponent, LogoComponent, NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
}
