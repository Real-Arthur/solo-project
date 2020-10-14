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

function* findFilmography(action) {
    console.log('FIND FILMOGRAPHY Payload', action.payload);
    let filmographyToSearch = action.payload.id;
    let response = yield axios({
        method: 'GET',
        url: '/api/person/filmography',
        params: {
            id: filmographyToSearch
        }
    })
    console.log('Res data', response.data);
    yield put({
        type: 'FILTER_FILMOGRAPHY',
        payload: response.data
    })
}

function* filterFilmography(action) {
    console.log('FILTER FILMOGRAPHY payload', action.payload);
    let filmography = action.payload;
    let noSelf = filmography.filter(function(film){
        return film.character !== "Himself" 
            && film.character !== "Herself"
            && film.character !== "Himself - Host"
            && film.character !== "Herself - Host"
            && film.character !== "Self"
            && film.character !== ""
    }
    )
    console.log('Filtered Out Self', noSelf);
    
}



function* personSaga() {
    yield takeLatest('SEARCH_BY_PERSON', searchByPerson);
    yield takeLatest('FILTER_PERSON', filterPersonResults);
    yield takeLatest('FETCH_FILMOGRAPHY', findFilmography);
    yield takeLatest('FILTER_FILMOGRAPHY', filterFilmography);
  }

  export default personSaga;