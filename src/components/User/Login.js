import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import InputGroup from '../UI/InputGroup/InputGroup';
import Modal from '../UI/Modal/Modal';
import Loader from '../UI/Loader/Loader';
import Aux from '../../hoc/Auxillary/Auxillary';
import FormValidation from '../../services/FormValidation';
import * as actions from '../../store/actions/index';

class Login extends Component {
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
    			value: 'tester@test.com',
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
    			value: 'wwwwww',
    			validation: {
    				required: true,
    				minLength: 6
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
    	errorMsg: '',
   		formIsValid: false,
   		submitted: false,
        submitClicked: false,
   		showSuccessInfo: false
    }

    componentWillUnmount() {
        if (this.timeout) clearTimeout(this.timeout);
    }
    componentDidMount(){
        if(this.props.location.state){
            this.setState({ showSuccessInfo: true });
            if (this.timeout) clearTimeout(this.timeout);
            this.timeout = setTimeout(()=>{
                this.justRemoveModal();
            }, 2500);
        }
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
        this.props.onSubmitLogin(fd);
        this.setState({ submitClicked: true ,showSuccessInfo: true });
    }
    removeModal = ()=>{
    	this.setState({ showSuccessInfo: false, submitted: true });
    }
    justRemoveModal = ()=>{
        this.setState({ showSuccessInfo: false });
    }
	render(){
        //console.log(this.state);
        const {
            submitted, formData, form, submitClicked,
            formIsValid, showSuccessInfo, errorMsg
        } = this.state;
        const { location } = this.props;
		let redirect = null;
		let formElementArray = [];
        let modalDisplay = null;

		if(submitted){
			redirect = <Redirect to={(location.state)? location.state.redirectTo: '/home'} />
		}
		for(let key in formData){
			formElementArray.push({
				id: key,
				config: formData[key]
			});
		}
        if(submitClicked){
            modalDisplay = <Loader />;
        }else if(location.state){
            modalDisplay = (
                <Aux>
                    <div>
                        <p>
                            {`You were redirect here because you tried to
                                ${location.state.referrer} with out authorization`}.
                        </p>
                    </div>
                </Aux>
            );
        }else {
            modalDisplay = (
                <Aux>
                    <div>
                        <p>{(errorMsg)? errorMsg: 'Login Successful'}.</p>
                        <button onClick={this.removeModal}>Continue</button>
                    </div>
                </Aux>
            );
        }
		return (
			<Aux>
				{redirect}
				<form onSubmit={this.handleSubmit} ref={form} className='Login'>
					<h2>Login</h2>
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
        successfull: state.user.loginSuccess,
        errorMsg: state.user.errorMsg
    };
}
const mapDispatchToProps = dispatch =>{
    return {
        onInit: ()=>dispatch(actions.loginInit()),
        onSubmitLogin: (user)=>dispatch(actions.loginRequest(user))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));