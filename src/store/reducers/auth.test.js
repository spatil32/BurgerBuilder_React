import React from 'react';
import * as actionTypes from '../actions/actionTypes';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import reducer from './auth';
configure({ adapter: new Adapter() });

describe('auth reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
			error: null,
			token: null,
			loading: false,
			userId: null,
			authRedirectPath: '/'
		});
	});

	it('should should store token upon login', () => {
		expect(
			reducer(
				{
					error: null,
					token: null,
					loading: false,
					userId: null,
					authRedirectPath: '/'
				},
				{
					type: actionTypes.AUTH_SUCCESS,
					idToken: 'authData.idToken',
					localId: 'authData.localId'
				}
			)
		).toEqual({
			error: null,
			token: 'authData.idToken',
			loading: false,
			userId: 'authData.localId',
			authRedirectPath: '/'
		});
	});
});
