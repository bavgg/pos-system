import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

import { StateService } from '../services/state.service';
import { NgClass } from '@angular/common';
import { OptionListComponent } from "../option-list/option-list.component";

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [ NgClass, OptionListComponent],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {

  constructor(public stateService: StateService, private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: HTMLElement) {
    const clickInside = this.elementRef.nativeElement.contains(target) 

    
    if(!clickInside ) {
      console.log('shi')
      this.stateService.optionIsOpen.set(false)
    }
  }
  
  onClick() {

    this.stateService.optionIsOpen.set(true);

  }
}
