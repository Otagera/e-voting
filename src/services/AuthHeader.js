export default anon = ()=>{
	const user = JSON.parse(localStorage.getItem('user'));

	if(user && user.token){
		return { Authorization: 'Bearer ' + user.token };
		//return { 'x-access-token': user.token }
	}else {
		return {};
	}
}