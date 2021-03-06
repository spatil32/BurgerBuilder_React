import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const inititalState = {
	error: null,
	token: null,
	loading: false,
	userId: null,
	authRedirectPath: '/'
};

const authStart = (state, action) => {
	return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {
	return updateObject(state, { error: null, token: action.idToken, loading: false, userId: action.localId });
};

const authFail = (state, action) => {
	return updateObject(state, { error: action.error, loading: false });
};

const authLogout = (state, action) => {
	return updateObject(state, { userId: null, token: null });
};

const setAuthRedirect = (state, action) => {
	return updateObject(state, { authRedirectPath: action.path });
};

const reducer = (state = inititalState, action) => {
	switch (action.type) {
		case actionTypes.AUTH_START:
			return authStart(state, action);
		case actionTypes.AUTH_SUCCESS:
			return authSuccess(state, action);
		case actionTypes.AUTH_FAILURE:
			return authFail(state, action);
		case actionTypes.AUTH_LOGOUT:
			return authLogout(state, action);
		case actionTypes.SET_AUTH_REDIRECT_PATH:
			return setAuthRedirect(state, action);
		default:
			return state;
	}
};

export default reducer;
