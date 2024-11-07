import { Component, Input } from '@angular/core';
import { SidebarSublinkComponent } from "../sidebar-sublink/sidebar-sublink.component";

@Component({
  selector: 'app-sidebar-dropdown',
  standalone: true,
  imports: [SidebarSublinkComponent],
  templateUrl: './sidebar-dropdown.component.html',
  styleUrl: './sidebar-dropdown.component.css'
})
export class SidebarDropdownComponent {
  @Input({ required: true }) title!: string;
}
