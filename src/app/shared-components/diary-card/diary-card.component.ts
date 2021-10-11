import { Component, OnInit } from '@angular/core';
import { DiaryCard } from 'src/app/models/diary-card.model';

@Component({
  selector: 'app-diary-card',
  templateUrl: './diary-card.component.html',
  styleUrls: ['./diary-card.component.scss']
})
export class DiaryCardComponent implements OnInit {

  readMore: Boolean = false;
  isMore: Boolean = false;
  cardData: DiaryCard = {
    title: "title1",
    description: "abcdfywiuey ywefgi eirus erugyhe rgeryh geiur ruig hdr;ug sdirg u hsur ghr thtfg fghb fhgsth ti hgrt hjerioae rio herozi;gj szi;thgs rehgsro hsroit rih sior hsrgiszrio gh szr;oh         srd;o h;oith xotih szthjs 'ihjzdri'o iothj drithjr'hy sre'hji thijs rt'hij srt'hi srtj'hisrthi th rtj'hirjt' ihsrtj'yhi"
  };
  name: String = 'name1';
  
  constructor() { }

  ngOnInit(): void {
  }

  showMore() {
    if (this.cardData.description.length > 100) {
      this.isMore = !this.isMore;
    }
  }

}
