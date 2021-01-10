import axios from 'axios';

class AuthService {
	login(fd){
		return axios.post('/users/login', fd);
	}
	logout(){
		localStorage.removeItem('user');
	}
	register(fd){
		return axios.post('/users/signup', fd);
    }
    getCurrentUser(){
    	return JSON.parse(localStorage.getItem('user'));
    }
    userAvailable(){
    	if(JSON.parse(localStorage.getItem('user'))){
    		return true;
    	}
    	return false;
    }
}

export default new AuthService();