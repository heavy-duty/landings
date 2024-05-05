import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'hdb-root',
  template: `
    <h1>EPALE</h1>
  
    
    <!-- <router-outlet></router-outlet> -->
    `,
  styles: ``,
})
export class AppComponent {
  title = 'heavy-duty-landing-new';
}
