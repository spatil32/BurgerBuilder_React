import axios from '../../axios-orders';
import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';

export function* loadIngredientsSaga() {
	try {
		const response = yield axios.get('https://react-burger-builder-79104.firebaseio.com/ingredients.json');
		yield put(actions.initIngredients(response.data));
	} catch (error) {
		yield put(actions.fetchIngredientsFailed());
	}
}
