import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinct } from 'rxjs/operators';

import { DataState, Episode, PAGE_SIZE } from '@app/shared/models';
import { untilDestroyed } from '@app/shared/utils';
import { EpisodesActions, EpisodesSelectors } from '@app/shared/data-access-episodes';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodesListComponent implements OnInit, OnDestroy {
  dataState$: Observable<DataState> = this.store.select(EpisodesSelectors.getDataState);
  episodes$: Observable<Episode[]> = this.store.select(EpisodesSelectors.getEpisodes);
  totalEpisodes$: Observable<number> = this.store.select(EpisodesSelectors.getTotalEpisodes);
  currentPage$: Observable<number> = this.store.select(EpisodesSelectors.getCurrentPage);

  dataStateTypes = DataState;
  pageSize = PAGE_SIZE;
  displayedColumns = ['id', 'episode', 'name', 'air_date', 'characters'];

  private readonly hoverEpisode$ = new Subject<Episode>();

  constructor(private readonly store: Store, private router: Router) {}

  ngOnInit(): void {
    // Only dispatch on hover episode during debounce time
    this.hoverEpisode$
      .pipe(
        untilDestroyed(this),
        debounceTime(300),
        distinct(({ id }) => id)
      )
      .subscribe((episode) => this.store.dispatch(EpisodesActions.hoverEpisodeLine({ episode })));
  }

  ngOnDestroy(): void {}

  prefetchCharactersOnHover(episode: Episode): void {
    this.hoverEpisode$.next(episode);
  }

  openCharactersDialog(episode: Episode): void {
    // TODO:
  }

  changePage(page: PageEvent): void {
    this.router.navigate([], {
      queryParams: { page: page.pageIndex + 1 },
      queryParamsHandling: 'merge',
    });
  }
}
