import { put, takeLatest, takeEvery } from 'redux-saga/effects';
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
        type: 'SET_SEARCHED_TITLE',
        payload: response.data
    })
}



function* titleSaga() {
    yield takeLatest('SEARCH_BY_TITLE', searchByTitle);
  }

  export default titleSaga;