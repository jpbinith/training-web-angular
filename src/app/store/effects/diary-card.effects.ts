import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';
import { LoadDiaryCards, LoadDiaryCardsError, loadDiaryCardSuccess, submitDiaryCard, SubmitDiaryCardError, SubmitDiaryCardSuccess } from "../actions/diary-card.actions";
import { DiaryCardService } from "src/app/services/diary-card.service";
import { of } from "rxjs";

@Injectable()
export class DiaryCardEffects {

    constructor(
        private action$: Actions,
        private diaryCardService: DiaryCardService
    ) { }

    public addDiaryCards$ = createEffect(() => {
        return this.action$.pipe(
            ofType(submitDiaryCard),
            mergeMap(async (action) => {
                return this.diaryCardService.addDiaryCard(action.payload.diaryCard)
                    .then(() => SubmitDiaryCardSuccess())
                    .catch(() => SubmitDiaryCardError())
            })
        )
    });

    public loadDiaryCards$ = createEffect(() => {
        return this.action$.pipe(
            ofType(LoadDiaryCards),
            concatMap(() => this.diaryCardService.getDiaryCards().pipe(
                map((diaryCards) => loadDiaryCardSuccess({ payload: { diaryCard: diaryCards } })
                ),
                catchError(() => of(LoadDiaryCardsError()))
            ))
        );
    })
}