import { takeLatest, call, put } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollectionAsync() {
  yield console.log('%cI\'m fired', 'font-size:14px;color:#2ECC40');
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    // call is an effect inside generator function that invokes the method
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    // put is a saga effect for createing actions (aka dispatch)
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }

  // collectionRef.get().then(snapshot => {
  //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //   dispatch(fetchCollectionsSuccess(collectionsMap));
  // }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
}
export function* fetchCollectionsStart() {
  // takeEvery is a listener, second argument is a response to that listener
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync)
}
