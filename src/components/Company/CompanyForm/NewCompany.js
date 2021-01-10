import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import black from '../../../assets/images/ali.jpg';
import InputGroup from '../../UI/InputGroup/InputGroup';
import Modal from '../../UI/Modal/Modal';
import Loader from '../../UI/Loader/Loader';
import Aux from '../../../hoc/Auxillary/Auxillary';
import FormValidation from '../../../services/FormValidation';
import * as actions from '../../../store/actions/index';

class NewCompany extends Component {
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
    		fb: {
    			elementType: 'text',
    			elementConfig: {
    				type: 'text',
    				placeholder: 'Link to Facebook account'
    			},
    			elementTitle: 'Facbook',
    			elementName: 'fb',
    			value: '',
    			validation: {
    				required: false,
    				url: true
    			},
    			valid: false,
    			touched: false
    		},
    		twitter: {
    			elementType: 'text',
    			elementConfig: {
    				type: 'text',
    				placeholder: 'Link to Twitter account'
    			},
    			elementTitle: 'Twitter',
    			elementName: 'twitter',
    			value: '',
    			validation: {
    				required: false,
    				url: true
    			},
    			valid: false,
    			touched: false
    		},
    		insta: {
    			elementType: 'text',
    			elementConfig: {
    				type: 'text',
    				placeholder: 'Link to Instagram account'
    			},
    			elementTitle: 'Instagram',
    			elementName: 'insta',
    			value: '',
    			validation: {
    				required: false,
    				url: true
    			},
    			valid: false,
    			touched: false
    		},
    		website: {
    			elementType: 'text',
    			elementConfig: {
    				type: 'text',
    				placeholder: 'Your Website'
    			},
    			elementTitle: 'Website',
    			elementName: 'website',
    			value: '',
    			validation: {
    				required: false,
    				url: true
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
        submitClicked: false,
    	showSuccessInfo: false
    }
    componentDidMount(){
        this.props.onInit();
    }
    static getDerivedStateFromProps(props, state){
        if(props.successfull){
            return { submitClicked: false };
        }
        return null;
    }
    handleInputValue = (value, name) =>{
    	let formData = { ...this.state.formData };
    	formData[name].value = value;
    	formData[name].valid = FormValidation.checkValidity(formData[name].value, formData[name].validation);
    	formData[name].touched = true;

    	let formIsValid = true;
    	for (let inputIdentifiers in formData) {
    		formIsValid = formData[inputIdentifiers].valid && formIsValid;
    	}

    	this.setState({ formData: formData, formIsValid: formIsValid });
    }
    handleSubmit = (e)=>{
    	e.preventDefault();
    	let fd = new FormData(this.state.form.current);
        if(this.state.img.current.files.length <= 0){
            fd.set('img', black);
        }
    	this.props.onSubmitAdd(fd);
    	this.setState({ submitClicked: true, showSuccessInfo: true });
    }
    removeModal = ()=>{
    	this.setState({ showSuccessInfo: false, submitted: true });
    }
    handleInputImg = () =>{
    	this.setState(prevState=>{
    		return {
    			imgDisplay: URL.createObjectURL(this.state.img.current.files[0])
    		}
    	});
    }
	render(){
		const { 
			submitted, formData, form, submitClicked,
			formIsValid, imgDisplay, showSuccessInfo
		} = this.state;
		let redirect = null;
		let img = <img alt=''/>;
		if(submitted){
			redirect = <Redirect to='/companies' />
		}
		if(imgDisplay){
			img = <img src={imgDisplay} alt="Company Logo" />
		}
		let formElementArray = [];
		for (let key in formData) {
			formElementArray.push({
				id: key,
				config: formData[key]
			});
		}
        let modalDisplay = null;
        if(submitClicked){
            modalDisplay = <Loader />;
        }else {
            modalDisplay = (
                <Aux>
                    <p>Company Created Successfully</p>
                    <button onClick={this.removeModal}> Continue </button>
                </Aux>
                );
        }
		return (
			<Aux>
				{redirect}
				<form ref={form} className='CompanyForm' onSubmit={this.handleSubmit}>
					<h2>Create New Company</h2>
					{img}
					<div className='InputGroup FlexRow'>
						<label>Company Logo</label>
						<input type="file" ref={this.state.img} className='Img'
							name='img' onChange={this.handleInputImg} />
					</div>
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
							<div>{modalDisplay}</div>
					</Modal>
				</form>
			</Aux>
			);
	}
}

const mapStateToProps = state =>{
    return {
        successfull: state.company.addCompanySuccess
    }
}
const mapDispatchToProps = dispatch =>{
	return {
        onInit: ()=>dispatch(actions.addCompanyInit()),
 		onSubmitAdd: (company)=>dispatch(actions.addCompanyRequest(company))
 	};
}
export default connect(mapStateToProps, mapDispatchToProps)(NewCompany);