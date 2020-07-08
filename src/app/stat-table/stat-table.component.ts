import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { StatService } from '../stat.service';

import { Stat } from '../stat';
import { StatCategory } from '../stat-category';

@Component({
  selector: 'app-stat-table',
  templateUrl: './stat-table.component.html',
  styleUrls: ['./stat-table.component.scss']
})
export class StatTableComponent implements OnInit {
  categories: StatCategory[];
  @Output() statSelectedEvent = new EventEmitter<Stat>();

  constructor(private statService: StatService) { }

  ngOnInit(): void {
    this.getStatCategories();
  }
  
  onSelect(stat: Stat) {
    this.statSelectedEvent.emit(stat);
  }

  getStatCategories(): void {
    this.statService.getStatCategories().subscribe(categories => this.categories = categories);
  }
}
