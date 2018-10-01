import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
	<ul className={classes.NavigationItems}>
		<NavigationItem link="/" exact>
			Burger Builder
		</NavigationItem>
		{props.auth ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
		{props.auth ? (
			<NavigationItem link="/logout">Logout</NavigationItem>
		) : (
			<NavigationItem link="/auth">Authenticate</NavigationItem>
		)}
	</ul>
);

export default navigationItems;
