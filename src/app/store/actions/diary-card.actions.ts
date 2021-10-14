import { createAction, props } from '@ngrx/store';
import { DiaryCard } from '../reducers/diary-card.reducer';

export enum DiaryCardActionTypes {
    LOAD_DIARY_CARDS = '[Diary Card] Load All',
    LOAD_DIARY_CARDS_SUCCESS = '[Diary Card] Load All Success',
    LOAD_DIARY_CARDS_ERROR = '[Diary Card] Load All Error',
    SUBMIT_NEW_DIARY_CARD = '[Diary Card] Submit',
    ADD_DIARY_CARD_SUCCESS = '[Diary Card] Submit Success',
    ADD_DIARY_CARD_ERROR = '[Diary Card] Submit Error'
}

export const submitDiaryCard = createAction(DiaryCardActionTypes.SUBMIT_NEW_DIARY_CARD,
    props<{
        payload: {
            diaryCard: DiaryCard
        }
    }>()
);

export const loadDiaryCardSuccess = createAction(DiaryCardActionTypes.ADD_DIARY_CARD_SUCCESS,
    props<{
        payload: {
            diaryCard: DiaryCard[]
        }
    }>()
)

export const LoadDiaryCards = createAction(DiaryCardActionTypes.LOAD_DIARY_CARDS)

export const LoadDiaryCardsError = createAction(DiaryCardActionTypes.LOAD_DIARY_CARDS_ERROR)

export const SubmitDiaryCardSuccess = createAction(DiaryCardActionTypes.ADD_DIARY_CARD_SUCCESS)

export const SubmitDiaryCardError = createAction(DiaryCardActionTypes.ADD_DIARY_CARD_ERROR)