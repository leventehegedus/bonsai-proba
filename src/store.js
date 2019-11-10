import React from 'react'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { i18nReducer, loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n'
import moment from 'moment'

import playlist from './reducers/playlist'
import song from './reducers/song'
import layout from './reducers/layout'

const persistedLocalStorageObject = localStorage.getItem('localStorageObject') ? JSON.parse(localStorage.getItem('localStorageObject')) : {}

const store = createStore(
  combineReducers({
    i18n: i18nReducer,
    playlist,
    song,
    layout
  }),
  applyMiddleware(thunk)
)

syncTranslationWithStore(store)


let currentLocale;
if (localStorage.getItem('currentLocale')) {
  currentLocale = localStorage.getItem('currentLocale');
}

export default store
