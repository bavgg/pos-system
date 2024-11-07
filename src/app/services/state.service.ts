import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }
  
  selectedLink = signal<string>("Dashboard");

  setSelectedLink() {
    
  }
}
