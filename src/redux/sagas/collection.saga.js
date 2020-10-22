import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchCollection(action) {
    // console.log('FETCH_COLLECTION SAGA', action.payload);
    let userId = action.payload.id;
    // console.log('userId', userId);
    let response = yield axios({
        method: 'GET',
        url: `/api/collection/${userId}`,
        params: {
            id: userId
        }
    })
    // console.log('response in fetchLibrary function', response.data);
    yield put({
        type: 'CREATE_COLLECTION',
        payload: response.data
    })
}

function* addToCollection(action) {
    // console.log('ADD_TO_COLLECTION', action.type);
    // console.log('ADD_TO_COLLECTION', action.payload);
    yield axios({
        method: 'POST',
        url: '/api/collection/add',
        data: {
            id: action.payload.user,
            movie_id: action.payload.movie
        }
    })
    // console.log('user Id', action.payload);
    yield put({
        type: 'FETCH_COLLECTION',
        payload: action.payload
    })
}



function* collectionSaga() {
    yield takeLatest('FETCH_COLLECTION', fetchCollection);
    yield takeLatest('ADD_TO_COLLECTION', addToCollection);
  }

  export default collectionSaga;