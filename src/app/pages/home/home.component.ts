import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiaryCard } from 'src/app/models/diary-card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: String = '';
  diaryCards: DiaryCard[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name')!;
  }

  onSubmit(data: DiaryCard) {
    this.diaryCards.push(data);
  }

}
