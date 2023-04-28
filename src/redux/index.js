import { configureStore, createImmutableStateInvariantMiddleware } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import currencyReducer from './slices/currencySlice'
import lengthReducer from './slices/lengthSlice'
import filterReducer from './slices/filterSlice'
import favoritesReducer from './slices/favoritesSlice'

const immutableInvariantMiddleware = createImmutableStateInvariantMiddleware({
  ignoredPaths: ['favorites'],
})
const initStore = (preloadedState) => {
  return configureStore({
    reducer: {
      currency: currencyReducer,
      length: lengthReducer,
      filters: filterReducer,
      favorites: favoritesReducer,
    },
    preloadedState,
    devTools: true,
    middleware: [immutableInvariantMiddleware],
  })
}


let store

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    store = undefined
  }
  if (typeof window === 'undefined') return _store
  if (!store) store = _store
  return _store
}

export function useStore(initialState) {
  let state = JSON.stringify(initialState)
  const store = useMemo(() => {
    return initializeStore(initialState)
  }, [state])
  return store
}
