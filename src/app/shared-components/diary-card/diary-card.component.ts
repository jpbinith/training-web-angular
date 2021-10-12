import { Component, Input, OnInit } from '@angular/core';
import { DiaryCard } from 'src/app/store/reducers/diary-card.reducer';

@Component({
  selector: 'app-diary-card',
  templateUrl: './diary-card.component.html',
  styleUrls: ['./diary-card.component.scss']
})
export class DiaryCardComponent implements OnInit {

  readMore: Boolean = false;
  isMore: Boolean = false;
  @Input() cardData!: DiaryCard;
  @Input() name!: String;
  
  constructor() { }

  ngOnInit(): void {
  }

  showMore() {
    if (this.cardData.description.length > 100) {
      this.isMore = !this.isMore;
    }
  }

}
