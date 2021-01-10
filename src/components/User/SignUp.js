import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import InputGroup from '../UI/InputGroup/InputGroup';
import Modal from '../UI/Modal/Modal';
import Loader from '../UI/Loader/Loader';
import Aux from '../../hoc/Auxillary/Auxillary';
import FormValidation from '../../services/FormValidation';
import * as actions from '../../store/actions/index';

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
    				minLength: 6
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
                validation: {},
    			elementName: 'submit',
    			value: 'Submit',
    			valid: true
    		}
    	},
    	form: React.createRef(),
    	errorMsg: '',
   		formIsValid: false,
   		submitted: false,
        submitClicked: false,
   		showSuccessInfo: false
    }
    componentDidMount(){
        this.props.onInit();
    }
    static getDerivedStateFromProps(props, state){
        if(props.successfull){
            return { submitClicked: false };
        }else if(props.errorMsg){
            return { submitClicked: false, errorMsg: props.errorMsg };
        }
        return { errorMsg: '' };
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
    	let fd = new FormData(this.state.form.current);
        this.props.onSubmitSignup(fd);
    	this.setState({ submitClicked: true ,showSuccessInfo: true });
    }
    removeModal = ()=>{
    	this.setState({ showSuccessInfo: false, submitted: true });
    }
	render(){
        const {
            submitted, formData, form, submitClicked,
            formIsValid, showSuccessInfo, errorMsg
        } = this.state;
		let redirect = null;
		let formElementArray = [];
        let modalDisplay = null;
		if(submitted){
			redirect = <Redirect to='/login' />
		}
		for(let key in formData){
			formElementArray.push({
				id: key,
				config: formData[key]
			});
		}
        if(submitClicked){
            modalDisplay = <Loader />;
        }else {
            modalDisplay = (
                <Aux>
                    <div>
                        <p>{(errorMsg)? errorMsg: 'Signup Successful'}.</p>
                        <button onClick={this.removeModal}>Continue</button>
                    </div>
                </Aux>
            );
        }
		return (
			<Aux>
				{redirect}
				<form onSubmit={this.handleSubmit} ref={form} className='Signup'>
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
									disabled={!formIsValid}
									shouldValidate={config.validation}
									touched={config.touched}
									handleInputValue={this.handleInputValue}
									handleShowPassword={this.handleShowPassword}
								/>
							)}
						)
					}
					<Modal
						show={showSuccessInfo}
						modalClosed={this.removeModal}
						successfull={true}>
                        {modalDisplay}
					</Modal>
				</form>
			</Aux>
			);
	}
}
const mapStateToProps = state =>{
    return {
        successfull: state.user.signupSuccess,
        errorMsg: state.user.errorMsg
    };
}
const mapDispatchToProps = dispatch =>{
    return {
        onInit: ()=>dispatch(actions.signupInit()),
        onSubmitSignup: (user)=>dispatch(actions.signupRequest(user))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);