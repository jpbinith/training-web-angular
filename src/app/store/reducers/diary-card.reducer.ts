import { createReducer, on } from '@ngrx/store';
import { loadDiaryCardSuccess, submitDiaryCard } from '../actions/diary-card.actions';

export interface DiaryCard {
    name: String,
    title: String,
    description: String
}

export interface DIaryCardState {
    diaryCards: DiaryCard[]
}

export const initialState: DIaryCardState = {
    diaryCards: []
};

export const diaryCardReducer = createReducer(
    initialState,
    on(loadDiaryCardSuccess, (state, { payload }) => {
        console.log("payload")
        console.log(payload)
        return {
            ...state,
            diaryCards: payload ? payload.diaryCard : state.diaryCards
        }
    })
);