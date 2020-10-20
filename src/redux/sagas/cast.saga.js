import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* findMovieCast(action) {
    console.log('find cast payload', action.payload);
    let movieId = action.payload;
    console.log('movie id and typeof', movieId, typeof(movieId));
    
    let response = yield axios({
        method: 'GET',
        url: '/api/cast',
        params: {
            id: movieId
        }
    })
    console.log('cast res data', response.data);
    yield put({
        type: 'SET_CAST',
        payload: response.data
    })
}






function* castSaga() {
    yield takeEvery('FETCH_CAST', findMovieCast);
  }

  export default castSaga;