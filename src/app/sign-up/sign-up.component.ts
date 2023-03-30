import { Component } from '@angular/core';
import { User } from 'src/model/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  model: User = new User('fr@fr.fr', 'coucou', 'cou', '123');

  constructor() {}

  onSubmit(): void {
    // Formulaire envoyé
    console.log(this.model);
  }
}
