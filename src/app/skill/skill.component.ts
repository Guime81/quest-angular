import { Component, Input } from '@angular/core';
import { Skill } from 'src/model/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent {
  @Input() skill: Skill = new Skill(
    'Angular',
    'https://angular.io/assets/images/logos/angular/angular.svg',
    'https://angular.io'
  );
}
