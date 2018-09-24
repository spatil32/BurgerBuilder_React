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

export const purchaseBurger = (orderData) => {
	return (dispatch) => {
		dispatch(purchaseBurgerStart());
		axios
			.post('/orders.json', orderData)
			.then((response) => {
				console.log(response.data);
				dispatch(purchaseBurgerSuccess(response.data.name, orderData));
			})
			.catch((error) => {
				dispatch(purchaseBurgerFailed(error));
			});
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

export const fetchOrders = () => {
	return (dispatch) => {
		dispatch(fetchOrdersStart());
		axios
			.get('/orders.json')
			.then((response) => {
				let fetchedOrders = [];
				for (let key in response.data) {
					fetchedOrders.push({
						...response.data[key],
						id: key
					});
				}
				dispatch(fetchOrderSuccess(fetchedOrders));
			})
			.catch((err) => {
				dispatch(fetchOrdersFailed(err));
			});
	};
};
