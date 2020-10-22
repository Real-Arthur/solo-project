import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* searchByTitle(action) {
    console.log('SEARCH TITLE SAGA', action.type);
    console.log('SEARCH TITLE SAGA', action.payload);
    let response = yield axios({
        method: 'GET',
        url: '/api/title',
        params: {
            title: action.payload
        }
    })
    console.log('response data', response.data);
    yield put({
        type: 'FILTER_TITLE',
        payload: response.data
    })
}

function* filterTitle(action) {
    console.log('Filter title results', action.payload);
    let results = action.payload;
    /// Filter null title results
    let noNulls = results.filter(function(film){
        return film.backdrop_path !== null
    })
    yield put({
        type: 'SET_SEARCHED_TITLE',
        payload: noNulls
    })
}



function* titleSaga() {
    yield takeLatest('SEARCH_BY_TITLE', searchByTitle);
    yield takeLatest('FILTER_TITLE', filterTitle);
  }

  export default titleSaga;