import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Developer } from 'src/model/developer';
import { Skill } from 'src/model/skill';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})
export class DeveloperComponent {
  developer: Developer = new Developer(
    'Jean',
    'Delarue',
    45,
    'male',
    'je suis un très bon développeur',
    [
      {
        name: 'Angular',
        logo: 'https://angular.io/assets/images/logos/angular/angular.svg',
        site: 'https://angular.io',
      },
      {
        name: 'React',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/240px-React-icon.svg.png',
        site: 'https://reactjs.org',
      },
      {
        name: 'Vue',
        logo: 'https://vuejs.org/images/logo.png',
        site: 'https://vuejs.org',
      },
    ]
  );
}
