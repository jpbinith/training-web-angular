import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DiaryCard } from 'src/app/models/diary-card.model';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  addForm: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const data: DiaryCard = {
      title: this.addForm.value.title,
      description: this.addForm.value.description
    }
    console.log(data)
  }

}
