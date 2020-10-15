import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinct } from 'rxjs/operators';

import { DataState, Location, PAGE_SIZE } from '@app/shared/models';
import { untilDestroyed } from '@app/shared/utils';
import { LocationsActions, LocationsSelectors } from '@app/shared/data-access-locations';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationsListComponent implements OnInit, OnDestroy {
  dataState$: Observable<DataState> = this.store.select(LocationsSelectors.getDataState);
  locations$: Observable<Location[]> = this.store.select(LocationsSelectors.getLocations);
  totalLocations$: Observable<number> = this.store.select(LocationsSelectors.getTotalLocations);
  currentPage$: Observable<number> = this.store.select(LocationsSelectors.getCurrentPage);

  dataStateTypes = DataState;
  pageSize = PAGE_SIZE;
  displayedColumns = ['id', 'name', 'type', 'dimension', 'residents'];

  private readonly hoverLocation$ = new Subject<Location>();

  constructor(private readonly store: Store, private router: Router) {}

  ngOnInit(): void {
    // Only dispatch on hover location during debounce time
    this.hoverLocation$
      .pipe(
        untilDestroyed(this),
        debounceTime(300),
        distinct(({ id }) => id)
      )
      .subscribe((location) => this.store.dispatch(LocationsActions.hoverLocationLine({ location })));
  }

  ngOnDestroy(): void {}

  prefetchResidentsOnHover(location: Location): void {
    this.hoverLocation$.next(location);
  }

  openResidentsDialog(location: Location): void {
    // TODO:
  }

  changePage(page: PageEvent): void {
    this.router.navigate([], {
      queryParams: { page: page.pageIndex + 1 },
      queryParamsHandling: 'merge',
    });
  }
}
