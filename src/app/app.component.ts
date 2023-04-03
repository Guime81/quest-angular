import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Bienvenue sur le site de Guime !';

  onomatopoeiaList: string[] = ['Bam', 'Pow', 'Zap', 'pif', 'paf', 'boum'];

  onReceiveNewOnomatopia(event: string): void {
    this.onomatopoeiaList.push(event);
  }
}
