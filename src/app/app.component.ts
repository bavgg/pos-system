import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { SidebarLinkComponent } from "./components/sidebar-link/sidebar-link.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CartComponent } from "./pos/components/cart/cart.component";
import { ProductListComponent } from "./pos/components/product-list/product-list.component";
import { PosMainComponent } from "./pos/pos-main/pos-main.component";
import { MainProductsComponent } from "./inventory/main-products/main-products.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, SidebarLinkComponent, NavbarComponent, CartComponent, ProductListComponent, PosMainComponent, MainProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pos-v1';
}
