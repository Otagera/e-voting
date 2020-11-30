import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const initialState = {
	done: false,
	redirect: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ORDER_INIT:
			return updateObject(state, { redirect: false });
		case actionTypes.SUBMIT:
			return updateObject(state, { done: true });
		case actionTypes.DONE:
			return updateObject(state, { done: false, redirect: true });
		default:
			return state;
	}
};

export default reducer;