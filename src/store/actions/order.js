import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
	return {
		type: actionTypes.PURCHASE_BURGER_SUCCESS,
		id: id,
		orderData: orderData
	};
};

export const purchaseBurgerFailed = (error) => {
	return {
		type: actionTypes.PURCHASE_BURGER_FAILED,
		error: error
	};
};

export const purchaseBurgerStart = () => {
	return {
		type: actionTypes.PURCHASE_BURGER_START
	};
};

export const purchaseBurger = (orderData, token) => {
	return {
		type: actionTypes.PURCHASE_BURGER_INIT,
		orderData: orderData,
		token: token
	};
};

export const purchaseInit = () => {
	return {
		type: actionTypes.PURCHASE_INIT
	};
};

export const fetchOrderSuccess = (orders) => {
	return {
		type: actionTypes.FETCH_ORDERS_SUCCESS,
		orders: orders
	};
};

export const fetchOrdersFailed = (error) => {
	return {
		type: actionTypes.FETCH_ORDERS_FAILED,
		error: error
	};
};

export const fetchOrdersStart = () => {
	return {
		type: actionTypes.FETCH_ORDERS_START
	};
};

export const fetchOrders = (token, userId) => {
	return {
		type: actionTypes.FETCH_ORDERS_INIT,
		token: token,
		userId: userId
	};
};
