import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DiaryCard } from 'src/app/store/reducers/diary-card.reducer';
import { selectDiaryCards, selectFeature } from 'src/app/store/selectors/diary-card.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: String = '';
  // diaryCards: Subs
  diaryCards: Observable<DiaryCard[]> = this.store.pipe(select(selectDiaryCards))

  constructor(
    private route: ActivatedRoute,
    private readonly store: Store
  ) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name')!;
  }

}
