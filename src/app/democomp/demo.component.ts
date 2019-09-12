import { Component } from '@angular/core';

@Component({
  selector: 'demo-root',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  titles = 'This is a Demo Component!!';
  imgsrc1 = 'http://lorempixel.com/400/50';
  imgsrc2 = 'http://lorempixel.com/400/100';
  imgsrc3 = 'http://lorempixel.com/400/200';
  isActive = true;

  onButtonClick($event) {
    event.stopPropagation();
    console.log('Button is Clicked');
  }
  onDivClick($event) {
    console.log('Div is Clicked');
  }
}
