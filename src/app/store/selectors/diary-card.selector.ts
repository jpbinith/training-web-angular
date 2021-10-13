import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Features } from "..";
import { DiaryCard, DIaryCardState } from "../reducers/diary-card.reducer";

export const selectFeature = createFeatureSelector<DIaryCardState>(
    Features.Cards
);

export const selectDiaryCards = createSelector(
    selectFeature,
    state => state.diaryCards
  );