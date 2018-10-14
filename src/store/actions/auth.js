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
	// localStorage.removeItem('token');
	// localStorage.removeItem('expirationDate');
	// localStorage.removeItem('userId');
	return {
		type: actionTypes.AUTH_LOGOUT_INITIATE
	};
};

export const logoutSucceed = () => {
	return {
		type: actionTypes.AUTH_LOGOUT
	};
};

export const checkAuthTimeout = (expirationTime) => {
	return {
		type: actionTypes.AUTH_CHECK_TIMEOUT,
		expirationTime: expirationTime
	};
};

export const auth = (email, password, isSignUp) => {
	return {
		type: actionTypes.AUTH_USER,
		email: email,
		password: password,
		isSignUp: isSignUp
	};
};

export const setAuthRedirect = (path) => {
	return {
		type: actionTypes.SET_AUTH_REDIRECT_PATH,
		path: path
	};
};

export const authCheckState = () => {
	return {
		type: actionTypes.AUTH_CHECK_STATE
	};
};
