import { Component, ViewEncapsulation } from '@angular/core';
import { environment } from '../environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation : ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'demo-app';
  navbgc = environment.navBGcolor;
}
