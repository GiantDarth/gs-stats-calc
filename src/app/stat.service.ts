import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, from } from 'rxjs';

import { Stat, STAT_DEFAULT_VALUE } from './stat';
import { StatCategory } from './stat-category';

@Injectable({
  providedIn: 'root'
})

export class StatService {
  private categories = [
    new StatCategory("Physical", [
      new Stat("Strength"),
      new Stat("Dexterity"),
      new Stat("Agility"),
      new Stat("Speed"),
      new Stat("Endurance"),
      new Stat("Vitality"),
      new Stat("Appeal"),
      new Stat("Weapons"),
      new Stat("Stat")
    ]),

    new StatCategory("Mental", [
      new Stat("Intelligence"),
      new Stat("Intuition"),
      new Stat("Perception"),
      new Stat("Impulse"),
      new Stat("Empathy"),
      new Stat("Charisma"),
      new Stat("Willpower"),
      new Stat("Science Adaption"),
      new Stat("Occult Adaption")
    ]),

    new StatCategory("Mystical", [
      new Stat("Focus"),
      new Stat("Channeling"),
      new Stat("Sense"),
      new Stat("Aura"),
      new Stat("Well"),
      new Stat("Bond"),
      new Stat("Barrier"),
      new Stat("Flow"),
      new Stat("Clarity")
    ])
  ];

  private categoriesSubject: Observable<StatCategory[]>;

  constructor() {
    this.categoriesSubject = of(this.categories);
  }

  getStatCategories(): Observable<StatCategory[]> {
    return this.categoriesSubject;
  }

  getMaxTotal(): number {
    return this.categories.map(cat => cat.stats.length).reduce((tot, len) => tot + len) * STAT_DEFAULT_VALUE;
  }
}
