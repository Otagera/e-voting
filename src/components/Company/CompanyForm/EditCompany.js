import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import InputGroup from '../../UI/InputGroup/InputGroup';
import Modal from '../../UI/Modal/Modal';
import Loader from '../../UI/Loader/Loader';
import Aux from '../../../hoc/Auxillary/Auxillary';
import * as actions from '../../../store/actions/index';

class EditCompany extends Component {
    state = {    	
		companyToBeEdited: null,
		img: React.createRef(),
		form: React.createRef(),
		submitted: false,
		error: false,
    	showSuccessInfo: false,
    	touched: false
    }
    handleInputValue = (value, name) =>{
		let tempState = { ...this.state.companyToBeEdited };
		tempState[name] = value;
		this.setState({	companyToBeEdited: tempState, touched: true });
    }
    handleSubmit = (e)=>{
    	e.preventDefault();
    	// let fd = new FormData(this.state.form.current);
    	this.props.onSubmitEdit(this.state.companyToBeEdited);
    	this.setState({ showSuccessInfo: true });
    }
    componentDidMount(){
    	this.props.onInit(+this.props.match.params.companyId);
    }
    static getDerivedStateFromProps(props, state){
    	if(props.companyToBeEdited !== state.companyToBeEdited && !state.touched){
    		return { companyToBeEdited: props.companyToBeEdited };
    	}
    	return null;
    }
    removeModal = ()=>{
    	this.setState({ showSuccessInfo: false, submitted: true });
    }
    handleInputImg = () =>{
    	this.setState(prevState=>{
    		return {
    			imgDisplay: URL.createObjectURL(this.state.img.current.files[0]),
    			companyToSubmit: {
    				...prevState.companyToSubmit,
    				img: URL.createObjectURL(this.state.img.current.files[0])
    			}
    		}
    	});
    }
	render(){
		const { 
			submitted, form, showSuccessInfo, companyToBeEdited, error
		} = this.state;
		let displayForm = null;
		if(!companyToBeEdited){
			displayForm = <Loader />
		}else if (error) {
			displayForm = <p>Somethong went  horribly wrong</p>
		}else{
			let redirect = null;
			let img = <img src={companyToBeEdited.img} alt="Company Logo" />;
			if(submitted){
				redirect = <Redirect to={`/company/${this.props.match.params.companyId}`} />
			}

			displayForm = (
				<Aux>
					{redirect}
					<form ref={form} className='CompanyForm' onSubmit={this.handleSubmit}>
						<h2>Edit Company</h2>
						{img}
						{/*<div className='InputGroup FlexRow'>
							<label>Company Logo</label>
							<input type="file" ref={this.state.img} className='Img'
								name='img' onChange={this.handleInputImg} />
						</div>*/}
						<InputGroup 
							classes='name'
							name='name'
							title='Name'
							type='text'
							value={companyToBeEdited.name}
							handleInputValue={this.handleInputValue}
						/>
						<InputGroup 
							classes='description'
							name='description'
							title='Description'
							type='text'
							value={companyToBeEdited.description}
							handleInputValue={this.handleInputValue}
						/>
						<InputGroup 
							classes='fb'
							name='fb'
							title='Facebook'
							type='text'
							value={companyToBeEdited.socials.fb}
							handleInputValue={this.handleInputValue}
						/>
						<InputGroup 
							classes='twitter'
							name='twitter'
							title='Twitter'
							type='text'
							value={companyToBeEdited.socials.twitter}
							handleInputValue={this.handleInputValue}
						/>
						<InputGroup 
							classes='insta'
							name='insta'
							title='Instagram'
							type='text'
							value={companyToBeEdited.socials.insta}
							handleInputValue={this.handleInputValue}
						/>
						<InputGroup 
							classes='website'
							name='website'
							title='Website'
							type='text'
							value={companyToBeEdited.socials.website}
							handleInputValue={this.handleInputValue}
						/>
						<div className='InputGroup FlexRow'>
							<button type='submit'>Submit</button>
						</div>
						<Modal show={showSuccessInfo} modalClosed={this.removeModal}
								successfull={true}>
								<div>
									<p>Company Created Successfully</p>
									<button onClick={this.removeModal}>Continue</button>
								</div>
						</Modal>
					</form>					
				</Aux>
			);
		}
		return (
			<Aux>
				{displayForm}
			</Aux>
		);
	}
}

const mapStateToProps = state =>{
	return {
		companyToBeEdited: state.company.selectedCompany
	}
}
const mapDispatchToProps = dispatch =>{
	return {
		onInit: (companyId)=>dispatch(actions.getCompanyRequest(companyId)),
 		onSubmitEdit: (company)=>dispatch(actions.editCompanyRequest(company))
 	};
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditCompany));