import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


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
    /// Filters out all results where actor/actress plays his/herself
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
    yield put({
        type: 'SET_FILMOGRAPHY',
        payload: noSelf
    })
}

function* personSaga() {
    yield takeLatest('FETCH_FILMOGRAPHY', findFilmography);
    yield takeLatest('FILTER_FILMOGRAPHY', filterFilmography);
  }

  export default personSaga;