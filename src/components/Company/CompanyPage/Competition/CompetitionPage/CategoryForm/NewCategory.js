import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import InputGroup from '../../../../../UI/InputGroup/InputGroup';
import Modal from '../../../../../UI/Modal/Modal';
import Loader from '../../../../../UI/Loader/Loader';
import Aux from '../../../../../../hoc/Auxillary/Auxillary';
import FormValidation from '../../../../../../services/FormValidation';
import * as actions from '../../../../../../store/actions/index';

class NewCategory extends Component {
    state = {
    	formData: {
    		name: {
    			elementType: 'input',
    			elementConfig: {
    				type: 'text',
    				placeholder: 'Category Name'
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
                    placeholder: 'Description of Category'
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
    		type: {
    			elementType: 'select',
    			elementConfig: {
    				type: 'text',
    				placeholder: 'Type of Competition',
                    options: [
                        {
                            value: 'first-past-the-post',
                            displayValue: 'First Past The Post'
                        }
                    ]
    			},
    			elementTitle: 'Type',
    			elementName: 'type',
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
        const { match } = this.props;
        this.props.onAddInit();
        this.props.onInit(+match.params.companyId, +match.params.competitionId);
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
        fd.set('competitionFakeId', +this.props.match.params.competitionId);
    	this.props.onSubmitAdd(fd);
    	this.setState({ showSuccessInfo: true });
    }
    removeModal = ()=>{
    	this.setState({ showSuccessInfo: false, submitted: true });
    }
	render(){
		const { 
			submitted, formData, form, submitClicked,
			formIsValid, showSuccessInfo
		} = this.state;
        const { selectedCompany, selectedCompetition, match } = this.props;
		let redirect = null;
		let formElementArray = [];
        let modalDisplay = null;
		let img = <img alt=''/>;
		if(submitted){ redirect = <Redirect to={`/company/${match.params.companyId}/competition/${match.params.competitionId}`} /> }
		if(selectedCompany && selectedCompany.img){ img = <img src={selectedCompany.img} alt="Company Logo" /> }
		for (let key in formData) {
			formElementArray.push({
				id: key,
				config: formData[key]
			});
		}
        if(submitClicked){ modalDisplay = <Loader />; }
        else {
            modalDisplay = (
                <Aux>
                    <p>
                        Category Created and Successfully Added to {(selectedCompetition && selectedCompetition.name)? selectedCompetition.name: null}
                    </p>
                    <button onClick={this.removeModal}>Continue</button>
                </Aux>
            );
        }
		return (
			<Aux>
				{redirect}
				<form ref={form} className='CategoryForm' onSubmit={this.handleSubmit}>
					{img}
					<h3>
                        Add a New Category {(selectedCompetition && selectedCompetition.name)? ` to ${selectedCompetition.name}`: null}
                    </h3>
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
        selectedCompany: state.company.selectedCompany,
        selectedCompetition: state.company.selectedCompetition,
        successfull: state.company.addCategorySuccess
    }
}
const mapDispatchToProps = dispatch =>{
	return {
        onInit: (companyId, competitionId)=>dispatch(actions.getCompetitionRequest(companyId, competitionId)),
        onAddInit: ()=>dispatch(actions.addCategoryInit()),
 		onSubmitAdd: (categoryData)=>dispatch(actions.addCategoryRequest(categoryData))
 	};
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewCategory));