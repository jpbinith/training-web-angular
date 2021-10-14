import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { submitDiaryCard } from 'src/app/store/actions/diary-card.actions';
import { DiaryCard } from 'src/app/store/reducers/diary-card.reducer';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  
  @Input() name!: String;
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
      name: this.name,
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
