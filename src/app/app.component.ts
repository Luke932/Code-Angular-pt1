import { Component } from '@angular/core';
import { UnlessDirective } from './directives/unless.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
[x: string]: boolean;
  title: any = 'app';
  condition = false;


}
