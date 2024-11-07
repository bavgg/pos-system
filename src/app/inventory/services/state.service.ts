import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  optionIsOpen = signal<boolean>(false);


  constructor() { }
}
