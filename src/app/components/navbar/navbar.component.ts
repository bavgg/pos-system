import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public stateService: StateService) {
    
  }


  onClick() {
    console.log('clicked')
    this.stateService.toggleMenuIsOpen.set(!this.stateService.toggleMenuIsOpen())
  }
}
