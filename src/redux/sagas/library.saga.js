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



function* librarySaga() {
    yield takeLatest('FETCH_LIBRARY', fetchLibrary);
  }

  export default librarySaga;