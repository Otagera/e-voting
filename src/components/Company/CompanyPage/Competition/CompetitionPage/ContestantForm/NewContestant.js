import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import InputGroup from '../../../../../UI/InputGroup/InputGroup';
import Modal from '../../../../../UI/Modal/Modal';
import Loader from '../../../../../UI/Loader/Loader';
import Aux from '../../../../../../hoc/Auxillary/Auxillary';
import FormValidation from '../../../../../../services/FormValidation';
import * as actions from '../../../../../../store/actions/index';

class NewCompetition extends Component {
    state = {
    	formData: {
    		name: {
    			elementType: 'input',
    			elementConfig: {
    				type: 'text',
    				placeholder: 'Contestant name'
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
    		quote: {
    			elementType: 'text',
    			elementConfig: {
    				type: 'text',
    				placeholder: 'Quote from contestant'
    			},
    			elementTitle: 'Quote',
    			elementName: 'quote',
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
        submitClicked: false,
    	showSuccessInfo: false
    }
    componentDidMount(){
        const { companyId, competitionId, categoryId } = this.props.match.params;
        this.props.onAddInit();
        this.props.onInit(+companyId, +competitionId, +categoryId );
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
    	this.props.onSubmitAdd(+this.props.match.params.categoryId, fd);
    	this.setState({ submitClicked: true, showSuccessInfo: true });
    }
    handleInputImg = () =>{
        this.setState(prevState=>{
            return {
                imgDisplay: URL.createObjectURL(this.state.img.current.files[0])
            }
        });
    }
    removeModal = ()=>{
    	this.setState({ showSuccessInfo: false, submitted: true });
    }
	render(){
		const { 
			submitted, formData, form, submitClicked,
			formIsValid, showSuccessInfo, imgDisplay
		} = this.state;
        const { category, match } = this.props;
		let redirect = null;
        let modalDisplay = null;
		let formElementArray = [];
        let categoryName = 'category';
		let img = <img alt=''/>;
		if(submitted){ redirect = <Redirect to={`/company/${match.params.companyId}/competition/${match.params.competitionId}`} />; }
		if(imgDisplay){ img = <img src={imgDisplay} alt="Competition Logo" />; }
		for (let key in formData) {
			formElementArray.push({
				id: key,
				config: formData[key]
			});
		}
        if(category){
            if(category.name){ categoryName = category.name; }
        }
        if(submitClicked){ modalDisplay = <Loader />; }
        else {
            modalDisplay = (
                <Aux>
                    <p>Successfully created contestant and added to {categoryName}</p>
                    <button onClick={this.removeModal}> Continue </button>
                </Aux>
                );
        }
		return (
			<Aux>
				{redirect}
				<form ref={form} className='ContestantForm' onSubmit={this.handleSubmit}>
					<h2>Create Contestant for {categoryName}</h2>
					{img}
                    <div className='InputGroup FlexRow'>
                        <label>Contestant Headshot</label>
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
        category: state.company.selectedCategory,
        successfull: state.company.addContestantSuccess
    }
}
const mapDispatchToProps = dispatch =>{
	return {
        onInit: (companyId, competitionId, categoryId)=>dispatch(actions.getCategoryRequest(companyId, competitionId, categoryId)),
        onAddInit: ()=>dispatch(actions.addContestantInit()),
 		onSubmitAdd: (categoryId, contestantData)=>dispatch(actions.addContestantRequest(categoryId, contestantData))
 	};
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewCompetition));