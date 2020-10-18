import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* searchForMoreDetails(action) {
    console.log('DETAILS SAGA', action.type);
    console.log('DETAILS SAGA', action.payload);
    let response = yield axios({
        method: 'GET',
        url: '/api/details',
        params: {
            movieId: parseInt(action.payload)
        }
    })
    console.log('response data', response.data);
    yield put({
        type: 'SET_MOVIE_DETAILS',
        payload: response.data
    })
}



function* detailsSaga() {
    yield takeLatest('FETCH_MOVIE_DETAILS', searchForMoreDetails);
  }

  export default detailsSaga;