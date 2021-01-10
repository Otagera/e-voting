import axios from 'axios';
//import qs from 'qs';
import AuthHeader from './AuthHeader';
import black from '../assets/images/black.jpg';

class UserService {
	getCompanies(){
		return axios.get('/companies');
	}
	getCompany(fakeId){
		return axios.get(`/company/${fakeId}`);
	}
	postCompany(fd){
		return axios.post('/companies', fd, { headers: AuthHeader() });
	}
	putCompany(fakeId, fd){
		return axios.put(`/company/${fakeId}`, fd, { headers: AuthHeader() });
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
		return axios.post('/competitions', fd, { headers: AuthHeader() });
	}
	putCompetition(fakeId, fd){
		return axios.put(`/competition/${fakeId}`, fd, { headers: AuthHeader() });
	}
	deleteCompetition(fakeId){
		return axios.delete(`/competition/${fakeId}`, { headers: AuthHeader() });
	}

	getCategories(fakeId){
		if(fakeId){
			return axios.get(`/competition/${fakeId}/categories`);
		}else {
			return axios.get('/categories');
		}
	}
	getCategory(fakeId){
		return axios.get(`/category/${fakeId}`);
	}
	postCategory(fd){
		return axios.post('/categories', fd, { headers: AuthHeader() });
	}
	putCategory(fakeId, fd){
		return axios.put(`/category/${fakeId}`, fd, { headers: AuthHeader() });
	}
	deleteCategory(fakeId){
		return axios.delete(`/category/${fakeId}`, { headers: AuthHeader() });
	}

	getContestants(fakeId){
		if(fakeId){
			return axios.get(`/category/${fakeId}/contestants`);
		}else{
			return axios.get('/contestants');
		}
	}
	getContestant(categoryFakeId, contestantFakeId){
		return axios.get(`/category/${categoryFakeId}/contestant/${contestantFakeId}`);
	}
	postContestant(fakeId, fd){
		return axios.post(`/category/${fakeId}/contestants`, fd, { headers: AuthHeader() });
	}
	putContestant(categoryFakeId, contestantFakeId, fd){
		return axios.put(`/category/${categoryFakeId}/contestant/${contestantFakeId}`, fd, { headers: AuthHeader() });
	}
	deleteContestant(categoryFakeId, contestantFakeId){
		return axios.delete(`/category/${categoryFakeId}/contestant/${contestantFakeId}`, { headers: AuthHeader() });
	}
	voteContestant(categoryFakeId, contestantFakeId){
		return axios.put(`/category/${categoryFakeId}/contestant/${contestantFakeId}/vote`, {}, { headers: AuthHeader() });
	}

	updateImgURL(img){
		if(axios.defaults.baseURL === 'http://127.0.0.1:3003/api'){
			if(img){
				return axios.defaults.baseURL + '/' + img;				
			}else {
				return black;
			}
		}
		return img;
	}
}
export default new UserService();