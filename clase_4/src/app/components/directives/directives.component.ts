import { Component } from '@angular/core';
import { Hero } from './interfaces/Hero';

@Component({
  selector: 'app-directives',
  standalone: false,
  templateUrl: './directives.component.html',
  // template: `<h3> </h3>`,
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  public name: string = 'Patricio';
  public lastName: string = 'Parra';
  age: number = 15;

  hayError: boolean = false;

  styles = {
    backgroundColor: 'red',
    padding: '20px',
  };

  public heroes: Hero[] = [
    {
      fullName: 'Bruce Wayne',
      heroName: 'Batman',
      power: 'Money',
      isAlive: true,
    },
    {
      fullName: 'Clark Kent',
      heroName: 'Superman',
      power: 'Everything',
      isAlive: false,
    },
    {
      fullName: 'Diana Prince',
      heroName: 'Wonder Woman',
      power: 'Strength',
      isAlive: true,
    },
  ];

  public actualHero = 'sadas';

  showData(): void {
    console.log(this.heroes);
  }

  clearHeroes(): void {
    this.heroes = [];
  }
}
