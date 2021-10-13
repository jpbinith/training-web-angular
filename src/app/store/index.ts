import { ActionReducerMap } from "@ngrx/store";
import { DiaryCard, diaryCardReducer, DIaryCardState } from "./reducers/diary-card.reducer";

export enum Features {
    Cards = 'cards'
}

export interface RootState {
    cards: DIaryCardState;
}

export const reducers: ActionReducerMap<RootState> = {
    cards: diaryCardReducer
}