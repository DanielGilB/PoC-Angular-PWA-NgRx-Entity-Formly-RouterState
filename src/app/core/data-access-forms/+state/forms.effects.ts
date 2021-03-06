import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, concatMap } from 'rxjs/operators';

import { formatDateToYYYYMMDD, convertYYYYMMDDToDate, DATE_FORMAT_REGEXP } from '@app/shared/utils';
import { fromStore } from '@app/shared/ngrx-utils';
import * as fromRouter from '@app/core/data-access-router';
import * as FormsActions from './forms.actions';
import * as FormsSelectors from './forms.selectors';
import { FormsPartialState } from './forms.reducer';

@Injectable()
export class FormsEffects {
  updateQueryParams$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(FormsActions.updateFormModel, FormsActions.resetForm, FormsActions.reuseForm, FormsActions.submitForm),
        filter((action) => action.filter),
        concatMap((action) => {
          const newModel = { ...action.model };
          Object.keys(action.model).forEach((key) => {
            newModel[key] =
              newModel[key] instanceof Date
                ? formatDateToYYYYMMDD(newModel[key])
                : newModel[key] === false
                ? ''
                : Array.isArray(newModel[key]) && !newModel[key].length
                ? null
                : newModel[key];
          });

          return this.router.navigate([], {
            queryParams: newModel,
            queryParamsHandling: 'merge',
          });
        })
      ),
    { dispatch: false }
  );

  updateModelFromRouteOnInit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FormsActions.initForm),
      filter((action) => action.filter),
      fromStore(fromRouter.getRouteQueryParams)(this.store$),
      map(([action, queryParams]) => {
        // Remove Page of filter (Pagination)
        const { page, ...model } = queryParams;
        return { formId: action.formId, model };
      }),
      filter(({ model }) => model && !!Object.keys(model).length),
      map(({ formId, model }) => {
        const newModel = model;
        Object.keys(model).forEach((key) => {
          newModel[key] =
            typeof newModel[key] === 'string'
              ? newModel[key].match(DATE_FORMAT_REGEXP)
                ? convertYYYYMMDDToDate(newModel[key])
                : newModel[key].replace('%20', ' ')
              : newModel[key];
        });
        return FormsActions.updateFormModel({ formId, model: newModel, filter: false });
      })
    )
  );

  manualSubmitForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FormsActions.manualSubmitForm),
      fromStore(FormsSelectors.getFormsEntities)(this.store$),
      map(([action, forms]) => FormsActions.submitForm({ ...action, model: forms[action.formId].model }))
    )
  );

  constructor(private actions$: Actions, private store$: Store<FormsPartialState>, private router: Router) {}
}
