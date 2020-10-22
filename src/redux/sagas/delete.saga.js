import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteFromCollection(action) {
    console.log('DELETE SAGA', action.type);
    console.log('DELETE SAGA', action.payload);
    yield axios({
        method: 'DELETE',
        url: '/api/collection/delete',
        data: action.payload
    })
    yield put({
        type: 'FETCH_COLLECTION',
        payload: action.payload
    })
}



function* deleteSaga() {
    yield takeLatest('DELETE_FROM_COLLECTION', deleteFromCollection);
  }

  export default deleteSaga;