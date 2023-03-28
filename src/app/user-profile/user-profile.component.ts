import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  user = new User(
    'Doe',
    'John',
    25,
    '',
    'https://randomuser.me/api/portraits/lego/2.jpg'
  );
}

class User {
  name: string;
  firstName: string;
  age: number;
  quote: string;
  photo: string;
  displayUserAge = false;

  constructor(
    name: string,
    firstName: string,
    age: number,
    quote: '',
    photo: string
  ) {
    this.name = name;
    this.firstName = firstName;
    this.age = age;
    this.quote = quote;
    this.photo = photo;
  }

  displayAge(): void {
    this.displayUserAge = !this.displayUserAge;
  }
}
