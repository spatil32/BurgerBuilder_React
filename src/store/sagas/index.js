import * as actionTypes from '../actions/actionTypes';
import { takeEvery } from 'redux-saga/effects';
import { logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga } from './auth';
import { loadIngredientsSaga } from './burgerBuilder';
import { purchaseBurgerSaga, fetchOrderSaga } from './order';

export function* watchAuth() {
	yield takeEvery(actionTypes.AUTH_LOGOUT_INITIATE, logoutSaga);
	yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
	yield takeEvery(actionTypes.AUTH_USER, authUserSaga);
	yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga);
}

export function* watchBurgerBuilder() {
	yield takeEvery(actionTypes.LOAD_INIT_INGREDIENTS, loadIngredientsSaga);
}

export function* watchPurchaseBurger() {
	yield takeEvery(actionTypes.PURCHASE_BURGER_INIT, purchaseBurgerSaga);
	yield takeEvery(actionTypes.FETCH_ORDERS_INIT, fetchOrderSaga);
}
