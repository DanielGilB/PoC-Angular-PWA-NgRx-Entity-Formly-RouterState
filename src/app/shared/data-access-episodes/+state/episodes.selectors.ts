import { Params } from '@angular/router';
import { createFeatureSelector, createSelector, createSelectorFactory, resultMemoize } from '@ngrx/store';

import { RouterSelectors } from '@app/core/data-access-router';
import { Episode, EpisodesFilter, DataState, PAGE_SIZE } from '@app/shared/models';
import { filterContainsData, isEqual } from '@app/shared/utils';
import { episodesAdapter, EPISODES_FEATURE_KEY, State } from './episodes.reducer';

export const selectEpisodesState = createFeatureSelector<State>(EPISODES_FEATURE_KEY);

const { selectAll, selectEntities, selectIds } = episodesAdapter.getSelectors();

export const getDataState = createSelector(selectEpisodesState, (state: State) => state?.dataState);

export const getError = createSelector(selectEpisodesState, (state: State) => state?.error);

export const getAllEpisodes = createSelector(selectEpisodesState, (state: State) => state && selectAll(state));

export const getEpisodesEntities = createSelector(
  selectEpisodesState,
  (state: State) => state && selectEntities(state)
);

export const getEpisodesIds = createSelector(selectEpisodesState, (state: State) => state && selectIds(state));

export const getSelectedId = createSelector(RouterSelectors.getRouteIdParam, (id: string): number => +id);

export const getTotalEpisodes = createSelector(selectEpisodesState, (state: State) => state?.count);

export const getTotalPages = createSelector(selectEpisodesState, (state: State) => state?.pages);

export const getLoadedPages = createSelector(selectEpisodesState, (state: State) => state?.loadedPages);

export const getCurrentPage = createSelector(RouterSelectors.getRouteQueryParams, (params: Params): number =>
  params?.page ? +params?.page : 1
);

export const getEpisodesOfCurrentPage = createSelector(
  getAllEpisodes,
  getCurrentPage,
  (episodes: Episode[], currentPage: number): Episode[] => episodes?.filter((episode) => episode?.page === currentPage)
);

export const getCurrentFilter = createSelector(
  RouterSelectors.getRouteQueryParams,
  (params: Params): EpisodesFilter => {
    return (
      params && {
        name: params.name,
        episode: params.episode,
      }
    );
  }
);

export const getEpisodesFiltered = createSelector(
  getAllEpisodes,
  getCurrentFilter,
  (episodes: Episode[], filter: EpisodesFilter): Episode[] => filterContainsData<Episode>(episodes, filter)
);

export const getEpisodesFilteredWithPage = createSelector(
  getEpisodesFiltered,
  getCurrentPage,
  (episodes: Episode[], page: number): Episode[] => episodes.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
);

export const getEpisodes = createSelectorFactory((projector) =>
  resultMemoize(projector, (l1, l2) =>
    isEqual(
      l1?.map((c) => c.id),
      l2?.map((c) => c.id)
    )
  )
)(
  getDataState,
  getEpisodesFilteredWithPage,
  getEpisodesOfCurrentPage,
  (state: DataState, episodesFiltered: Episode[], episodes: Episode[]): Episode[] =>
    state === DataState.LOADING ? episodesFiltered : episodes
);

export const getSelectedEpisode = createSelectorFactory((projector) => resultMemoize(projector, isEqual))(
  getEpisodesEntities,
  getSelectedId,
  (entities, selectedId: number): Location => selectedId && entities[selectedId]
);
