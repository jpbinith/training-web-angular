import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { submitDiaryCard } from 'src/app/store/actions/add-form.actions';
import { DiaryCard } from 'src/app/store/reducers/diary-card.reducer';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<DiaryCard>();

  addForm: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl()
  });

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const data: DiaryCard = {
      title: this.addForm.value.title,
      description: this.addForm.value.description
    }
    this.store.dispatch(submitDiaryCard(
      {
        payload: {
          diaryCard: data
        }
      }));
  }

}
