import { createReducer, on } from '@ngrx/store';
import { submitDiaryCard } from '../actions/add-form.actions';

export interface DiaryCard {
    title: String,
    description: String
}

export const initialState: DiaryCard[] = [];

export const diaryCardReducer = createReducer(
    initialState,
    on(submitDiaryCard, (state, {payload}) => [...state, payload])
);