import axios from 'axios';
import { put, takeLatest, select } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions

function* createPost(action) {
    console.log('creating event with', action);
    yield axios({
        method: 'POST',
        url: '/api/post',
        data: action
    });

    yield put ({
        type: 'GET_RELEVENT_POSTS'
    })
}

function* getReleventPosts(action){
    console.log('in getReleventPosts with:', action);
    const response = yield axios({
        method: 'GET',
        url: '/api/post',
    });


    console.log('back from GET relevent posts with:', response.data);
    yield put({ type: 'SET_POST', payload: response.data});



}


function* deletePost(action){
    console.log('in deletePost with:', action);
    yield axios({
        method: 'DELETE',
        url: `/api/post/${action.payload}`,
        data: action
    })
    yield put({
        type: 'GET_RELEVENT_POSTS'
    })
}

function* updatePost(action){
    console.log('in updatePost', action);
    let response = yield axios ({
        method: 'PUT',
        url: `/api/post/${action.payload}`,
        data: action.payload
    })
    console.log('getTempPhase back with:', response.data);
    // yield put({ type: 'SET_TEMP_PHASE', payload: response.data });
}

function* postSaga() {
  yield takeLatest('CREATE_POST', createPost);
  yield takeLatest('GET_RELEVENT_POSTS', getReleventPosts);
  yield takeLatest('DELETE_POST', deletePost);
  yield takeLatest('UPDATE_POST', updatePost);
  
}

export default postSaga;
