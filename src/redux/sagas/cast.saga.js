import { put, takeEvery, takeLatest } from 'redux-saga/effects';
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
        type: 'FILTER_CAST',
        payload: response.data
    })
}

function* filterMovieCast(action) {
    console.log('Filter Cast results', action.payload);
    let cast = action.payload;
    let filteredCast = cast.filter(function(person){
        return person.profile_path !== null
    })
    console.log('Filtered nulls', filteredCast);
    yield put({
        type: 'SET_CAST',
        payload: filteredCast
    })
}






function* castSaga() {
    yield takeLatest('FETCH_CAST', findMovieCast);
    yield takeLatest('FILTER_CAST', filterMovieCast);
  }

  export default castSaga;