import * as actionTypes from './actionTypes';

export const addIngredient = (name) => {
	return {
		type: actionTypes.ADD_INGREDIENT,
		ingredientName: name
	};
};

export const removeIngredient = (name) => {
	return {
		type: actionTypes.REMOVE_INGREDIENT,
		ingredientName: name
	};
};

export const initIngredients = (ingredients) => {
	return {
		type: actionTypes.INIT_INGREDIENTS,
		ingredients: ingredients
	};
};

export const fetchIngredientsFailed = () => {
	return {
		type: actionTypes.FETCH_INGREDIENTS_FAILED
	};
};
export const loadIngredients = () => {
	return {
		type: actionTypes.LOAD_INIT_INGREDIENTS
	};
};
