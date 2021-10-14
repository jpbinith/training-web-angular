import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { DiaryCard } from "../store/reducers/diary-card.reducer";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class DiaryCardService {

    constructor(private firestore: AngularFirestore) { }

    public async addDiaryCard(diaryCard: DiaryCard): Promise<void> {
        await this.firestore.collection('cards').add(diaryCard);
    }

    public getDiaryCards() {
        return this.firestore.collection('cards').snapshotChanges().pipe(map((querySnapshot) => {
            console.log("doc")
            return querySnapshot.map((doc) => {
                const data: any = doc.payload.doc.data();
                const diaryCard: DiaryCard = {
                    title: data.title, 
                    name: data.name,
                    description: data.description
                }
                return diaryCard;
            });
        }))
    }
}