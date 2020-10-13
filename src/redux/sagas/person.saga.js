import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* searchByPerson(action) {
    console.log('SEARCH PERSON SAGA', action.type);
    console.log('SEARCH PERSON SAGA', action.payload);
    let response = yield axios({
        method: 'GET',
        url: '/api/person',
        params: {
            name: action.payload
        }
    })
    console.log('response data', response.data);
    yield put({
        type: 'FILTER_PERSON',
        payload: response.data
    })
}

function* filterPersonResults(action) {
    console.log('FILTER', action.type);
    console.log('FILTER', action.payload);
    let people = action.payload;
    let justActors = people.filter(function(person){
        return person.known_for_department === 'Acting'
    })
    console.log('newPeople', justActors);
    yield put({
        type: 'SET_SEARCHED_PERSON',
        payload: justActors
    })
}



function* personSaga() {
    yield takeLatest('SEARCH_BY_PERSON', searchByPerson);
    yield takeLatest('FILTER_PERSON', filterPersonResults);
  }

  export default personSaga;