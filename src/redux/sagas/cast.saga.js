import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* findMovieCast(action) {
    
}






function* castSaga() {
    yield takeLatest('FETCH_CAST', findMovieCast);

  }

  export default castSaga;