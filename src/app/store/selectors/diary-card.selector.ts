import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Features } from "..";
import { DiaryCard } from "../reducers/diary-card.reducer";

export const diaryCardsFeature = createFeatureSelector<DiaryCard[]>(
    Features.CardState
);