import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Stat, MIN_STAT_VALUE, MAX_STAT_VALUE } from '../stat';
import { StatService } from '../stat.service';
import { StatCategory } from '../stat-category';

@Component({
  selector: 'app-stat-editor',
  templateUrl: './stat-editor.component.html',
  styleUrls: ['./stat-editor.component.scss']
})
export class StatEditorComponent implements OnInit {
  @Input() stat: Stat;
  categories: StatCategory[];

  statGroup: FormGroup;

  readonly RANKS = Array.from(Array(1 + MAX_STAT_VALUE - MIN_STAT_VALUE), (_, i) => (new Stat("", i + MIN_STAT_VALUE).toRank()));

  constructor(private statService: StatService) {
    this.statGroup = new FormGroup({
      value: new FormControl(),
      rank: new FormControl()
    });
  }

  getStatCategories(): void {
    this.statService.getStatCategories().subscribe(categories => this.categories = categories);
  }

  getTotal() {
    // Reduce each category to the sum of the stats' values, then sum up each category's subtotal
    return this.categories.map(cat => cat.stats.map(stat => stat.value).reduce((sub, value) => sub + value)).reduce((tot, sub) => tot + sub);
  }

  getOffset() {
    return this.getTotal() - this.statService.getMaxTotal();
  }

  ngOnInit(): void {
    this.getStatCategories();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.statGroup.setValue({
      value: this.stat.value,
      rank: this.stat.toRank()
    });
  }

  onValueChange(value: number) {
    this.stat.value = value;
    this.setForm(this.stat);
  }

  onRankChange(rank: string) {
    this.stat.value = this.RANKS.indexOf(rank) + MIN_STAT_VALUE;
    this.setForm(this.stat);
  }

  setForm(stat: Stat) {
    this.statGroup.setValue({
      value: this.stat.value,
      rank: this.stat.toRank()
    });

    console.log("Test");
  }
}
