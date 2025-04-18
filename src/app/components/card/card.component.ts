import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-card',
  imports: [MatCardModule, MatButtonModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  name = input("");
  image = input("");
  manaCost = input("");
  text = input("");
  id = input("");

  // ngOnViewInit() {
  //   console.log(this.name(), this.image(), this.manaCost(), this.text(), this.id());
  // }
}
