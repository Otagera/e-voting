import * as actionTypes from './actionTypes';
import UserService from '../../services/UserService';

export const addCompany = (company) =>{
	return {
		type: actionTypes.ADD_COMPANY,
		newCompany: company
	};
}

export const removeCompany = () =>{
	return {
		type: actionTypes.REMOVE_COMPANY
	};
}

const editCompany = (company) =>{
	return {
		type: actionTypes.EDIT_COMPANY,
		editedCompany: company
	};
}
export const editCompanyRequest = (company) =>{
	return dispatch => {
		setTimeout(()=>{
			dispatch(editCompany(company));
		}, 2000);
	};
}

const getCompanies = (companies) =>{
	return {
		type: actionTypes.GET_COMPANIES,
		companies: companies
	};
}
export const getCompaniesRequest = () =>{
	return dispatch => {
		UserService.getCompanies()
			.then(companyResponse=>{
            	let companies = companyResponse.data.companies;
            	let promises = [];
                companies.forEach((company)=>{
                    company.img = UserService.updateImgURL(company.img);
                    promises.push(
                    	new Promise((resolve, reject)=>{
		                    UserService.getCompetitions(company.fakeId)
			                    .then(competResponse=>{
			                    	company.competitions = competResponse.data.competitions;
			                    	resolve('Success');
			                    }).catch(err=>{console.log(err); reject('Failed');});                    		
                    	})
                    );
                });
                Promise.all(promises).then(()=>{
					dispatch(getCompanies(companies));                	
                });
			}).catch(err=>console.log(err));
	};
}

const getCompany = company =>{
	return {
		type: actionTypes.GET_COMPANY,
		company: company
	};
}
export const getCompanyRequest = fakeId =>{
	return dispatch =>{
		new Promise((resolve, reject)=>{
			UserService.getCompany(fakeId)
				.then(response=>{
	            	let company = response.data.company;
	                company.img = UserService.updateImgURL(company.img);
	                resolve(company);
				}).catch(err=>reject(err));
		}).then(company=>{
			return new Promise((resolve, reject)=>{
				UserService.getCompetitions(company.fakeId)
	                .then(competResponse=>{
	                	company.competitions = competResponse.data.competitions;
	                	resolve(company);
	                }).catch(err=>reject(err));
			});
		}).then(company=>{
			return new Promise((resolve, reject)=>{
				let promises = [];
				for(let i = 0; i < company.competitions.length; i++){
					promises.push(new Promise((resolve, reject)=>{
			            UserService.getCategories(company.competitions[i].fakeId).then(catResponse=>{
							company.competitions[i].categories = catResponse.data.categories;
							resolve('Success');
			    		}).catch(err=>reject(err));
					}));
				}
				Promise.all(promises).then(()=>{
			    	resolve(company);
				});
			});
		}).then(company=>{
			dispatch(getCompany(company));
		}).catch(err=>{
			console.log(err);
		});
	};
}getCompetitions
export const addCompetition = competition =>{
	return {
		type: actionTypes.ADD_COMPETITION,
		newCompetition: competition
	};
}
const getCompetition = (company, competition) =>{
	return {
		type: actionTypes.GET_COMPETITION,
		company: company,
		competition: competition
	};
}
export const getCompetitionRequest = (companyFakeId, competitionFakeId) =>{
	return dispatch =>{
		new Promise((resolve, reject)=>{
			UserService.getCompetition(competitionFakeId)
				.then(response=>{
					let competition = response.data.competition;
					resolve(competition)
				}).catch(err=>reject(err));
		}).then(competition=>{
			return new Promise((resolve, reject)=>{
	            UserService.getCategories(competition.fakeId).then(catResponse=>{
					competition.categories = catResponse.data.categories;
					resolve(competition);
	    		}).catch(err=>reject(err));
			});
		}).then(competition=>{
			return new Promise((resolve, reject)=>{
				UserService.getCompany(companyFakeId)
					.then(response=>{
		            	let company = response.data.company;
		                company.img = UserService.updateImgURL(company.img);
		                resolve([company, competition]);
					}).catch(err=>reject(err));
			});
		}).then(([company, competition])=>{
			dispatch(getCompetition(company, competition));
		}).catch(err=>{
			console.log(err);
		});
	};
}
const getCompetitions = competitions =>{
	return {
		type: actionTypes.GET_COMPETITIONS,
		competitions: competitions
	};
}
export const getCompetitionsRequest = () =>{
	return dispatch =>{
		setTimeout(()=>{
			dispatch(getCompany(compaFakeId));
		}, 1000);
	};
}