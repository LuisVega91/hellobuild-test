import { IQueryResult } from './services/queries/types';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import { REPOSITORY_QUERY } from './services/queries/queries';
import { apolloClient } from './services/queries/apollo-config';

export const REPOSTORE_FEATURE_KEY = 'repostore';


export interface RepostoreState extends EntityState<IQueryResult> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string | undefined | null;
}

export const repostoreAdapter = createEntityAdapter<IQueryResult>();

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(fetchRepostore())
 * }, [dispatch]);
 * ```
 */
export const fetchRepostore = createAsyncThunk(
  'repostore/fetchStatus',
  async (_, thunkAPI) => {

    return await apolloClient.query({ query: REPOSITORY_QUERY });

  }
);

export const initialRepostoreState: RepostoreState = repostoreAdapter.getInitialState(
  {
    loadingStatus: 'not loaded',
    error: null,
  }
);

export const repostoreSlice = createSlice({
  name: REPOSTORE_FEATURE_KEY,
  initialState: initialRepostoreState,
  reducers: {
    add: repostoreAdapter.addOne,
    remove: repostoreAdapter.removeOne,
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepostore.pending, (state: RepostoreState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchRepostore.fulfilled,
        (state: RepostoreState, action: PayloadAction<any>) => {
          repostoreAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchRepostore.rejected, (state: RepostoreState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const repostoreReducer = repostoreSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(repostoreActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const repostoreActions = repostoreSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllRepostore);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = repostoreAdapter.getSelectors();

export const getRepostoreState = (rootState: any): RepostoreState =>
  rootState[REPOSTORE_FEATURE_KEY];

export const selectAllRepostore = createSelector(getRepostoreState, selectAll);

export const selectRepostoreEntities = createSelector(
  getRepostoreState,
  selectEntities
);
