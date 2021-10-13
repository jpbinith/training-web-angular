import { createReducer, on } from '@ngrx/store';
import { submitDiaryCard } from '../actions/add-form.actions';

export interface DiaryCard {
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
    on(submitDiaryCard, (state, {payload}) => { return {...state, diaryCards: [...state.diaryCards, payload.diaryCard]}})
);