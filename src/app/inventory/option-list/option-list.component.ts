import { Component, Input } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-option-list',
  standalone: true,
  imports: [],
  templateUrl: './option-list.component.html',
  styleUrl: './option-list.component.css'
})
export class OptionListComponent {
  @Input( { required: true }) title!: string;

  constructor(public stateService: StateService){}

  onClick() {
    this.stateService.optionIsOpen.set(false)
  }
}
