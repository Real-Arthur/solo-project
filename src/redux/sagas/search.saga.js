import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* searchByTitle(action) {
    console.log('SEARCH_BY SAGA', action.type);
    console.log('SEARCH BY SAGA', action.payload);
    let response = yield axios({
        method: 'GET',
        url: '/api/search/title',
        params: {
            title: action.payload
        }
    })
    console.log('response data', response.data);
    yield put({
        type: 'SET_SEARCH_TITLE',
        payload: response.data
    })
    
}

function* searchByName(action) {
    console.log('SEARCH_BY SAGA', action.type);
    console.log('SEARCH BY SAGA', action.payload);
}



function* searchSaga() {
    yield takeLatest('SEARCH_BY_TITLE', searchByTitle);
    yield takeLatest('SEARCH_BY_NAME', searchByName);
  }

  export default searchSaga;