import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeroItemComponent {
@Input()
public item: string = '';
@Output()
selectedItem = new EventEmitter<string>();

/*getItem(){
  console.log(this.item);
  return this.item;
}*/

onSelectedItem(){
  this.selectedItem.emit(this.item);
}

}
