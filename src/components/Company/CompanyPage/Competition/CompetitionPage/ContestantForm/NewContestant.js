import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import InputGroup from '../../../../UI/InputGroup/InputGroup';
import Modal from '../../../../UI/Modal/Modal';
import Aux from '../../../../../hoc/Auxillary/Auxillary';
import FormValidation from '../../../../../services/FormValidation';
import * as actions from '../../../../../store/actions/index';

class NewCompetition extends Component {
    state = {
    	formData: {
    		name: {
    			elementType: 'input',
    			elementConfig: {
    				type: 'text',
    				placeholder: 'The Company Name'
    			},
    			elementTitle: 'Name',
    			elementName: 'name',
    			value: '',
    			validation: {
    				required: true
    			},
    			valid: false,
    			touched: false
    		},
    		description: {
    			elementType: 'text',
    			elementConfig: {
    				type: 'text',
    				placeholder: 'The Company Description'
    			},
    			elementTitle: 'Description',
    			elementName: 'description',
    			value: '',
    			validation: {
    				required: true
    			},
    			valid: false,
    			touched: false
    		},
            submit: {
                elementType: 'submit',
                elementConfig: {
                    type: 'submit'
                },
                validation: {},
                elementName: 'submit',
                value: 'Submit',
                valid: true
            }
    	},
    	img: React.createRef(),
    	imgDisplay: null,
    	form: React.createRef(),
    	error: false,
    	formIsValid: false,
    	submitted: false,
    	showSuccessInfo: false,
    	competitionToSubmit: {
    		name: '',
    		description: ''
    	}
    }
    componentDidMount(){
        this.props.onInit(+this.props.match.params.companyId);
    }
    handleInputValue = (value, name) =>{
    	let formData = { ...this.state.formData };
        let comToSub = { ...this.state.competitionToSubmit };
        comToSub[name] = value;
    	formData[name].value = value;
    	formData[name].valid = FormValidation.checkValidity(formData[name].value, formData[name].validation);
    	formData[name].touched = true;

    	let formIsValid = true;
    	for (let inputIdentifiers in formData) {
    		formIsValid = formData[inputIdentifiers].valid && formIsValid;
    	}

    	this.setState({ formData: formData, formIsValid: formIsValid, competitionToSubmit: comToSub });
    }
    handleSubmit = (e)=>{
    	e.preventDefault();
    	// let fd = new FormData(this.state.form.current);
    	this.props.onSubmitAdd(this.state.competitionToSubmit);
    	this.setState({ showSuccessInfo: true });
    }
    removeModal = ()=>{
    	this.setState({ showSuccessInfo: false, submitted: true });
    }
	render(){
		const { 
			submitted, formData, form,
			formIsValid, showSuccessInfo
		} = this.state;
        const { company } = this.props;
		let redirect = null;
		let img = <img alt=''/>;
		if(submitted){
			redirect = <Redirect to={`/company/${this.props.match.params.companyId}`} />
		}
		if(company && company.img){
			img = <img src={company.img} alt="Company Logo" />
		}
		let formElementArray = [];
		for (let key in formData) {
			formElementArray.push({
				id: key,
				config: formData[key]
			});
		}
		return (
			<Aux>
				{redirect}
				<form ref={form} className='NewCompetition' onSubmit={this.handleSubmit}>
					{img}
					<h2>Create New Competition</h2>
					{
						formElementArray.map(formElement=>{
							const { id, config } = formElement;
							return (
								<InputGroup 
									key={id}
									classes={config.elementName}
									name={config.elementName}
									title={config.elementTitle}
									elementType={config.elementType}
									elementConfig={config.elementConfig}
									value={config.value}
									invalid={!config.valid}
									disabled={!formIsValid}
									shouldValidate={config.validation}
									touched={config.touched}
									handleInputValue={this.handleInputValue}
									/>
								);
						})
					}
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
}

const mapStateToProps = state =>{
    return {
        company: state.company.selectedCompany
    }
}
const mapDispatchToProps = dispatch =>{
	return {
        onInit: (companyId)=>dispatch(actions.getCompanyRequest(companyId)),
 		onSubmitAdd: (company)=>dispatch(actions.addCompetition(company))
 	};
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewCompetition));