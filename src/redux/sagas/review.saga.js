import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* createReview(action) {
    console.log('CREATE_REVIEW SAGA', action.payload);
    let userId = action.payload.id;
    let movieId = action.payload.movie_id;
    let review = action.payload.review_string;
    console.log('userId', userId);
    console.log('movieId', movieId);
    console.log('review', review);
    let response = yield axios({
        method: 'PUT',
        url: `/api/review/${userId}`,
        data: {
            id: userId,
            movie_id: movieId,
            review_string: review
        }
    })
    yield put({
        type: 'FETCH_COLLECTION',
        payload: action.payload
    })
}

function* reviewSaga() {
    yield takeLatest('CREATE_REVIEW', createReview);
  }

  export default reviewSaga;