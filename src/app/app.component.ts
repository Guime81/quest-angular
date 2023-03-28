import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Bonjour';

  isAdminValue(): void {
    this.isAdmin = !this.isAdmin;
  }

  isAdmin: boolean = true;
  displayGuestList = false;
}
