import { updateObject } from '../utility';
import * as actionTypes from '../actions/actionTypes';


const initialState = {};

const reducer = (state = initialState, action ) =>{
	switch(action.type) {
	    case actionTypes.LOGIN_INIT:
		    return updateObject(state, { loginSuccess: false, errorMsg: '' });
		case actionTypes.LOGIN:
			return updateObject(state, { 
											loginSuccess: action.success,
											errorMsg: action.errorMsg 
										});
		case actionTypes.LOGOUT:
			return updateObject(state, { userAvaliable: false });
	    case actionTypes.SIGNUP_INIT:
		    return updateObject(state, { signupSuccess: false, errorMsg: '' });
		case actionTypes.SIGNUP:
			return updateObject(state, {
											signupSuccess: action.success,
											errorMsg: action.errorMsg
										});
		case actionTypes.CHECK_USER_AVAILABLE:
			return updateObject(state, { userAvaliable: action.userAvaliable });
		default:
			return state;
	}
}

export default reducer;