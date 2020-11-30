import * as actionTypes from './actionTypes';

const submitAfterTimeout = () => {
	return {
		type: actionTypes.SUBMIT
	};
}
export const orderInit = () =>{
	return {
		type: actionTypes.ORDER_INIT
	};
}
export const submit = () => {
	return dispatch => {
		setTimeout(()=>{
			dispatch(submitAfterTimeout());
		}, 2000);
	};
}
export const done =()=>{
	return {
		type: actionTypes.DONE
	};
}