import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';



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
    // console.log('user id', action.payload.user_id);
    // console.log('movie id', action.payload.id);
    // yield put({
    //     type: 'ADD_TO_COLLECTION',
    //     payload: {
    //         user_id: action.payload.user_id,
    //         movie_id: action.payload.id
    //     }
    // })
}



function* librarySaga() {
    yield takeLatest('ADD_TO_LIBRARY', addToLibrary);
  }

  export default librarySaga;