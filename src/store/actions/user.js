import * as actionTypes from './actionTypes';
import AuthService from '../../services/AuthService';

export const loginInit =()=>{
	return {
		type: actionTypes.LOGIN_INIT
	};
}
const login = (success, msg='') =>{
	return {
		type: actionTypes.LOGIN,
		success: success,
		errorMsg: msg
	};
}
export const loginRequest = loginData =>{
	return dispatch =>{
		AuthService.login(loginData)
			.then(response=>{
				if(response.data.statusCode === 200){
	    			if(response.data.token){
	    				localStorage.setItem('user', JSON.stringify({ token: response.data.token }));
						dispatch(login(true));
						setTimeout(()=>{
							dispatch(checkUserAvaIlability());							
						}, 5000);
	    			}					
				}
			}).catch(err=>{
				console.log(err);
				if(err.response.status === 401){
					dispatch(login(false, err.response.data.message));
				}else{
					dispatch(login(false, 'Something went wrong'));
				}
			});
	}
}

export const signupInit =()=>{
	return {
		type: actionTypes.SIGNUP_INIT
	};
}
const signup = (success, msg='') =>{
	return {
		type: actionTypes.SIGNUP,
		success: success,
		errorMsg: msg
	};
}
export const signupRequest = signupData =>{
	return dispatch =>{
		AuthService.register(signupData)
			.then(response=>{
				if(response.data.statusCode === 201){
					dispatch(signup(true));					
				}else {
					dispatch(signup(false, 'Something went wrong'));
				}
			}).catch(err=>{
				console.log(err);
				if(err.response.status === 409){
					dispatch(signup(false, err.response.data.message));
				}else{
					dispatch(signup(false, 'Something went wrong'));
				}
			});
	}
}

export const logout = () =>{
	return {
		type: actionTypes.LOGOUT
	}
}
export const logoutTimer = () =>{
	return dispatch =>{
		setTimeout(()=>{
			AuthService.logout();
			dispatch(logout());
		}, 5000);
	}
}

export const checkUserAvaIlability = () =>{
	return {
		type: actionTypes.CHECK_USER_AVAILABLE,
		userAvaliable: AuthService.userAvailable()
	};
}