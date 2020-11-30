import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 1.7
};

const initialState = {
	ingredients: {
		salad: 0,
		bacon: 0,
		cheese: 0,
		meat: 0
	},
	totalPrice: 0
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.BB_INIT:
			const updatedStateInit = {
				ingredients: { salad: 0, bacon: 0, cheese: 0, meat: 0 },
				totalPrice: 0	
			};
			return updateObject(state, updatedStateInit);
		case actionTypes.ADD_INGREDIENT:
			const updatedIngAdd = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
			const updatedIngsAdd = updateObject(state.ingredients, updatedIngAdd);
			const updatedStateAdd = {
				ingredients: updatedIngsAdd,
				totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]				
			};
			return updateObject(state, updatedStateAdd);
		case actionTypes.REMOVE_INGREDIENT:
			const updatedIngRemv = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
			const updatedIngsRemv = updateObject(state.ingredients, updatedIngRemv);
			const updatedStateRemove = {
				ingredients: updatedIngsRemv,
				totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
			};
			return updateObject(state, updatedStateRemove);
		default:
			return state;
	}
};

export default reducer;