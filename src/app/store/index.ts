import { ActionReducerMap } from "@ngrx/store";
import { DiaryCard, diaryCardReducer } from "./reducers/diary-card.reducer";

export enum Features {
    CardState = 'cardState'
}

export interface RootState {
    cardState: DiaryCard[];
}

export const reducers: ActionReducerMap<RootState> = {
    cardState: diaryCardReducer
}