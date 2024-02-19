import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent {

  @Input()
  public items: string[] = [];

  constructor(public cd: ChangeDetectorRef){}

  onSelectedItem($event: string) {
    alert($event);
    }  
}
