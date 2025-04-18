import { effect, Injectable, signal } from '@angular/core';
import MagicCard from '../models/magic-card';

@Injectable({
  providedIn: 'root'
})
export class MagicCardService {
  static page = 1;
  arrayCards = signal<MagicCard[]>([])

  constructor() {
    this.getData();
    effect(() => console.log(this.arrayCards()))
   }

  getData() {
    const baseUrl = "https://api.magicthegathering.io/v1/cards";
    const pageUrl = baseUrl + `?page=${MagicCardService.page}`

    return fetch(pageUrl)
        .then(res => res.json())
        .then(data => {
            this.arrayCards.set(data.cards);
        })
        .catch(err => console.error(err));
}

nextPage() {
    if (MagicCardService.page < 937) {
        MagicCardService.page++;
    } else {
        MagicCardService.page = 1;
    }
    //max 937
}

prevPage() {
    if (MagicCardService.page > 1) {
        MagicCardService.page--;
    } else {
        MagicCardService.page = 937;
    }
}

getCardById(searchIndex: string) {
    console.log(MagicCardService.page);
    return this.arrayCards().find(card => card.id === searchIndex);
}
}
