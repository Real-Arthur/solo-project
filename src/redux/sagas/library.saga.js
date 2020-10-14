import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchLibrary(action) {
    console.log('FETCH_LIBRARY SAGA', action);
    let userId = action.payload.id;
    let response = yield axios({
        method: 'GET',
        url: `/api/library/${userId}`,
        params: {
            id: userId
        }
    })
    console.log('response', response.data);
    yield put({
        type: 'CREATE_LIBRARY',
        payload: response.data
    })
}

function* addToLibrary(action) {
    console.log('ADD TO LIBRARY SAGA', action.payload);
    yield axios({
        method: 'POST',
        url: `/api/library/add`,
        data: {
            id: parseInt(action.payload.id),
            title: action.payload.title,
            overview: action.payload.overview,
            release_date: action.payload.release_date,
            poster_path: action.payload.poster_path
        }
    })
}



function* librarySaga() {
    yield takeLatest('FETCH_LIBRARY', fetchLibrary);
    yield takeLatest('ADD_TO_LIBRARY', addToLibrary);
  }

  export default librarySaga;