import { createAction, props } from '@ngrx/store';
import { DiaryCard } from '../reducers/diary-card.reducer';

export enum AddFormActionTypes {
    SUBMIT_NEW_DIARY_CARD = '[Add Form] Submit'
}

export const submitDiaryCard = createAction(AddFormActionTypes.SUBMIT_NEW_DIARY_CARD,
    props<{
        payload: {
            diaryCard: DiaryCard
        }
    }>());