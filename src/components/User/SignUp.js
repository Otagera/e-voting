import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import InputGroup from '../UI/InputGroup/InputGroup';
import Modal from '../UI/Modal/Modal';
import Aux from '../../hoc/Auxillary/Auxillary';
import FormValidation from '../../services/FormValidation';

class SignUp extends Component {
    state = {
    	formData:{
    		email: {
    			elementType: 'input',
    			elementConfig: {
    				type: 'email',
    				placeholder: 'Your Email'
    			},
    			elementTitle: 'Email',
    			elementName: 'email',
    			value: '',
    			validation: {
    				required: true,
    				email: true
    			},
    			valid: false,
    			touched: false
    		},
    		password: {
    			elementType: 'input',
    			elementConfig: {
    				type: 'password',
    				placeholder: 'Your Password'
    			},
    			elementTitle: 'Password',
    			elementName: 'password',
    			passwordRevealed: false,
    			passwordType: true,
    			value: '',
    			validation: {
    				required: true,
    				minLenth: 6
    			},
    			valid: false,
    			touched: false
    		},
    		confirmPassword: {
    			elementType: 'input',
    			elementConfig: {
    				type: 'password',
    				placeholder: 'Confirm Password'
    			},
    			elementTitle: 'Confirm Password',
    			elementName: 'confirmPassword',
    			passwordRevealed: false,
    			passwordType: true,
    			value: '',
    			validation: {
    				required: true,
    				confirmPassword: true
    			},
    			valid: false,
    			touched: false
    		},
    		submit: {
    			elementType: 'submit',
    			elementConfig: {
    				type: 'submit'
    			},
    			elementName: 'submit',
    			value: 'Submit',
    			validation: {
    				required: true,
    				confirmPassword: true
    			},
    			valid: true
    		}
    	},
    	form: React.createRef(),
    	error: false,
   		formIsValid: false,
   		submitted: false,
   		showSuccessInfo: false
    }
    handleShowPassword = (name)=>{
    	let formData = { ...this.state.formData };
    	if(formData[name].passwordRevealed){
    		formData[name].elementConfig.type = 'password';
    	}else {
    		formData[name].elementConfig.type = 'text';
    	}
    	formData[name].passwordRevealed =!formData[name].passwordRevealed;

    	this.setState({ formData: formData });
    }
    handleInputValue = (value, name)=>{
    	let formData = { ...this.state.formData };
    	formData[name].value = value;
    	formData[name].valid = FormValidation.checkValidity(formData[name].value, formData[name].validation, formData.password.value);
    	formData[name].touched = true;

    	let formIsValid = true;
    	for(let inputIdentifiers in formData){
    		formIsValid = formData[inputIdentifiers].valid && formIsValid;
    	}

    	this.setState({ formData: formData, formIsValid: formIsValid });
    }
    handleSubmit = (e)=>{
    	e.preventDefault();
    	//let fd = new FormData(this.state.form.current);
    	this.setState({ showSuccessInfo: true });
    }
    removeModal = ()=>{
    	this.setState({ showSuccessInfo: false, submitted: true });
    }
	render(){
		let redirect = null;
		if(this.state.submitted){
			redirect = <Redirect to='/home' />
		}
		let formElementArray = [];
		for(let key in this.state.formData){
			formElementArray.push({
				id: key,
				config: this.state.formData[key]
			});
		}
		return (
			<Aux>
				{redirect}
				<form onSubmit={this.handleSubmit} ref={this.state.form} className='Signup'>
					<h2>Sign Up</h2>
					{
						formElementArray.map((formElement)=>{
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
									passwordRevealed={config.passwordRevealed}
									passwordType={config.passwordType}
									invalid={!config.valid}
									disabled={!this.state.formIsValid}
									shouldValidate={config.validate}
									touched={config.touched}
									handleInputValue={this.handleInputValue}
									handleShowPassword={this.handleShowPassword}
								/>
							)}
						)
					}
					<Modal
						show={this.state.showSuccessInfo}
						modalClosed={this.removeModal}
						successfull={true}>
						<div>
							<p>Signup Successful</p>
							<button onClick={this.removeModal}>Continue</button>
						</div>
					</Modal>
				</form>
			</Aux>
			);
	}
}
export default SignUp;