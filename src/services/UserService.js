import axios from 'axios';
//import qs from 'qs';
import AuthHeader from './AuthHeader';

class UserService {
	getCompanies(){
		return axios.get('/companies');
	}
	getCompany(fakeId){
		return axios.get(`/company/${fakeId}`);
	}
	postCompany(fd){
		//return axios.post('/companies', fd, { headers: AuthHeader() });
		return axios.post('/companies', fd);
	}
	putCompany(fakeId, fd){
		return axios.put(`/company/${fakeId}`, fd);
		/* let headersObj = {
			...AuthHeader(),
			'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
		};
		return axios({
        	method: 'put',
        	url: `/company/${fakeId}`,
        	data: qs.stringify(companyData),
        	headers: headersObj
        }) */
	}
	deleteCompany(fakeId){
		return axios.delete(`/company/${fakeId}`, { headers: AuthHeader() });
	}

	getCompetitions(fakeId){
		if(fakeId){
			return axios.get(`/competitions/${fakeId}`);
		}else {
			return axios.get(`/competitions`);
		}
	}
	getCompetition(fakeId){
		return axios.get(`/competition/${fakeId}`);
	}
	postCompetition(fd){
		return axios.post('/competitions', fd);
	}
	putCompetition(fakeId, fd){
		return axios.put(`/competition/${fakeId}`, fd);
	}
	deleteCompetition(fakeId){
		return axios.delete(`/competition/${fakeId}`);
	}

	getCategories(fakeId){
		if(fakeId){
			return axios.get(`/categories/${fakeId}`);
		}else {
			return axios.get('/categories');
		}
	}
	getCategory(fakeId){
		return axios.get(`/category/${fakeId}`);
	}
	postCategory(fd){
		return axios.post('/categories', fd);
	}
	putCategory(fakeId, fd){
		return axios.put(`/categories/${fakeId}`, fd);
	}
	deleteCategory(fakeId){
		return axios.delete(`/category/${fakeId}`);
	}

	getContestants(fakeId){
		if(fakeId){
			return axios.get(`/contestants/${fakeId}`);
		}else{
			return axios.get('/contestants');
		}
	}
	getContestant(fakeId){
		return axios.get(`/contestants/${fakeId}`);
	}
	postContestant(fd){
		return axios.post('/contestants', fd);
	}
	putContestant(fakeId, fd){
		return axios.put(`/contestant/${fakeId}`, fd);
	}
	deleteContestant(fakeId){
		return axios.delete(`/contestant/${fakeId}`)
	}

	updateImgURL(img){
		if(axios.defaults.baseURL === 'http://127.0.0.1:3003/api'){
			return axios.defaults.baseURL + '/' + img;
		}
		return img;
	}
}
export default new UserService();