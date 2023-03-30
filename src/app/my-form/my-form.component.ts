import { Component } from '@angular/core';
import { Order } from 'src/model/order';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent {
  model: Order = new Order('', 0, new Date(), '');

  constructor() {}

  onSubmit(): void {
    // Formulaire envoyé
    console.log(this.model);
  }
}
