import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
	return {
		type: actionTypes.AUTH_START
	};
};

export const authSuccess = (authData) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		idToken: authData.idToken,
		localId: authData.localId
	};
};

export const authFail = (error) => {
	return {
		type: actionTypes.AUTH_FAILURE,
		error: error
	};
};

export const logout = () => {
	return {
		type: actionTypes.AUTH_LOGOUT
	};
};

export const checkAuthTimeout = (expirationTime) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(logout());
		}, expirationTime * 1000);
	};
};

export const auth = (email, password, isSignUp) => {
	return (dispatch) => {
		dispatch(authStart());
		let url =
			'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDaZ_tDKKR5UX48Ikuil74GI1Z6sCM0sX8';
		if (!isSignUp) {
			url =
				'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDaZ_tDKKR5UX48Ikuil74GI1Z6sCM0sX8';
		}
		const authData = {
			email: email,
			password: password,
			returnSecureToken: true
		};
		axios
			.post(url, authData)
			.then((response) => {
				console.log(response);
				dispatch(authSuccess(response.data));
				dispatch(checkAuthTimeout(response.data.expiresIn));
			})
			.catch((error) => {
				console.log(error);
				dispatch(authFail(error.response.data.error));
			});
	};
};
