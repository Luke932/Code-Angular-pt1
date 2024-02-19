import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroPageComponent  {
public herolist: string[]= [];
public heroName: string = '';

saveHero(){
  this.herolist.push(this.heroName);
  for(let i = 0; i < this.herolist.length;i++){
    console.log(this.herolist[i]);
  }
}


}
