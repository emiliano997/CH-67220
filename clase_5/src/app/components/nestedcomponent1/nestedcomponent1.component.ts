import { Component } from '@angular/core';

@Component({
  selector: 'app-nestedcomponent1',
  standalone: false,
  templateUrl: './nestedcomponent1.component.html',
  styleUrl: './nestedcomponent1.component.css',
})
export class Nestedcomponent1Component {
  public title = 'Nested Component 1';
}
