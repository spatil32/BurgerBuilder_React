import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {
	componentDidMount() {
		this.props.onFetchOrders();
	}

	render() {
		let fetchedOrders = <Spinner />;
		if (!this.props.loading) {
			fetchedOrders = this.props.orders.map((order) => (
				<Order key={order.id} ingredients={order.ingredients} price={order.price} />
			));
		}
		return <div>{fetchedOrders}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.order.loading,
		orders: state.order.orders
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onFetchOrders: () => dispatch(actions.fetchOrders())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));