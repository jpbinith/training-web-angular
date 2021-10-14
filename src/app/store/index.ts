import { ActionReducerMap } from "@ngrx/store";
import { DiaryCardEffects } from "./effects/diary-card.effects";
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

export const effects = [DiaryCardEffects]