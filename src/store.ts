import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QueryState {
  history: string[];
  results: { query: string; value: number } | null;
  loading: boolean;
  error: string | null;
}

const initialState: QueryState = { history: [], results: null, loading: false, error: null };

const querySlice = createSlice({
  name: 'queries',
  initialState,
  reducers: {
    submitQuery: (state) => {
      state.loading = true;
      state.error = null;
    },
    setQueryResult: (state, action: PayloadAction<{ query: string; value: number }>) => {
      state.loading = false;
      state.results = action.payload;
      state.history.push(action.payload.query);
    },
    setError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { submitQuery, setQueryResult, setError } = querySlice.actions;
export const store = configureStore({ reducer: { queries: querySlice.reducer } });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
