import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link, Redirect } from 'react-router-dom';

import Aux from '../../../hoc/Auxillary/Auxillary';
import Competitions from './Competition/CompetitionsPage/Competitions.js';
import Loader from '../../UI/Loader/Loader';
import Modal from '../../UI/Modal/Modal';
import * as actions from '../../../store/actions/index'

class Company extends Component {
    state = {
    	redirect: false,
    	showModal: false,
    	deleteSuccess: false,
    	confirmedDelete: false
    }
	componentDidMount(){
		this.props.onInit(+this.props.match.params.companyId);
		this.props.onEditInit();
	}
    static getDerivedStateFromProps(props, state){
        if(props.deleteSuccess){
            return { deleteSuccess: true };
        }
        return null;
    }
    confirmDelete = () =>{
		this.props.onDelete(+this.props.match.params.companyId);
    	this.setState({ confirmedDelete: true });
    }
    putModal = ()=>{
    	this.setState({ showModal: true });
    }
    removeModal = ()=>{
    	this.setState({ 
    		showModal: false,
    		deleteSuccess: false,
    		confirmedDelete: false,
    		redirect: true
    	});
    }
	render(){
		const { selectedCompany, userAvaliable } = this.props;
		const { showModal, deleteSuccess, confirmedDelete, redirect } = this.state;
		let display = null;
		let reDirect = null;
		if(redirect){ reDirect = <Redirect to='/companies'/>; }
		if(!selectedCompany){
			display = <Loader />
		/*}else if(Object.keys(selectedCompany).length === 0){
			display = <p>Something Went Terribly Wrong!!! </p>
		*/}else {
			let modalDisplay = null;
			if(showModal){
                modalDisplay = (
                    <Aux>
                        <p>Are You Sure you want to delete {selectedCompany.name}</p>
	                        <button onClick={this.removeModal}>Cancel</button>
	                        <button onClick={this.confirmDelete}>Continue</button>
                    </Aux>
                );
				if(confirmedDelete && !deleteSuccess){ modalDisplay = <Loader />; }
	            else if(confirmedDelete && deleteSuccess){
	                modalDisplay = (
	                    <Aux>
	                        <p>{selectedCompany.name} Delete Successfully</p>
	                        <button onClick={this.removeModal}>Continue</button>
	                    </Aux>
	                );
	            }
			}
			display = (
				<Aux>
					{reDirect}
					<div className='Company-Top'>
						<img src={selectedCompany.img} alt={selectedCompany.name} />
						<h1>{selectedCompany.name}</h1>
						<p>
							{(selectedCompany.description.length >= 212)?
								`${selectedCompany.description.slice(0, 212)} ...`:
								selectedCompany.description
							}
						</p>
						{userAvaliable &&
							<Aux>
								<Link to={`/company/${this.props.match.params.companyId}/edit`} className='Edit-Btn'>
									<button className='Button'> Edit Company Data </button>
								</Link>
								<button className='Button'
									onClick={this.putModal}>
									Delete Company
								</button>
							</Aux>
						}
					</div>
					<Competitions competitions={selectedCompany.competitions} />
					<Modal show={showModal} modalClosed={this.removeModal}
							successfull={confirmedDelete}>
							<div>{modalDisplay}</div>
					</Modal>
				</Aux>
			);
		}
		return (
			<section className='Company'>
				{display}
			</section>
		);
	}
}
const mapStateToProps = state =>{
	return {
		selectedCompany: state.company.selectedCompany,
		deleteSuccess: state.company.removeCompanySuccess,
        userAvaliable: state.user.userAvaliable
	}
}

const mapDispatchToProps = dispatch =>{
	return {
 		onInit: (fakeId)=>dispatch(actions.getCompanyRequest(fakeId)),
 		onEditInit: ()=>dispatch(actions.removeCompanyInit()),
 		onDelete: (fakeId)=>dispatch(actions.removeCompanyRequest(fakeId))
 	};
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Company));