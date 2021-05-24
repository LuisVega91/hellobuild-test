import {
  fetchRepostore,
  repostoreAdapter,
  repostoreReducer,
} from './repostore.slice';

describe('repostore reducer', () => {
  it('should handle initial state', () => {
    const expected = repostoreAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(repostoreReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchRepostores', () => {
    let state = repostoreReducer(undefined, fetchRepostore.pending(null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = repostoreReducer(
      state,
      fetchRepostore.fulfilled([{ id: 1 }], null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = repostoreReducer(
      state,
      fetchRepostore.rejected(new Error('Uh oh'), null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { 1: { id: 1 } },
      })
    );
  });
});
