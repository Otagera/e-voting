import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import InputGroup from '../../../../UI/InputGroup/InputGroup';
import Modal from '../../../../UI/Modal/Modal';
import Loader from '../../../../UI/Loader/Loader';
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
    				placeholder: 'The Competition Name'
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
    				placeholder: 'The Competition Description'
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
            deadline: {
                elementType: 'date',
                elementConfig: {
                    type: 'text'
                },
                elementTitle: 'Voting Deadline',
                elementName: 'deadline',
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
        this.props.onAddInit();
        this.props.onInit(+this.props.match.params.companyId);
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
        fd.set('companyFakeId', +this.props.match.params.companyId);
    	this.props.onSubmitAdd(fd);
    	this.setState({ submitClicked: true, showSuccessInfo: true });
    }
    removeModal = ()=>{
    	this.setState({ showSuccessInfo: false, submitted: true });
    }
	render(){
		const { 
			submitted, formData, form, submitClicked,
			formIsValid, showSuccessInfo
		} = this.state;
        const { selectedCompany, match } = this.props;
		let redirect = null;
		let formElementArray = [];
        let companyName = null;
        let modalDisplay = null;
		let img = <img alt=''/>;
		if(submitted){ redirect = <Redirect to={`/company/${match.params.companyId}`} />; }
		if(selectedCompany){
            if(selectedCompany.img){ img = <img src={selectedCompany.img} alt="Company Logo" />; }
            if(selectedCompany.name){ companyName = selectedCompany.name; }
		}
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
					<p>Competition Created and Successfully Added to {companyName}</p>
					<button onClick={this.removeModal}>Continue</button>
                </Aux>
            );
        }
		return (
			<Aux>
				{redirect}
				<form ref={form} className='CompetitionForm' onSubmit={this.handleSubmit}>
					{img}
                    <h2>{companyName}</h2>
					<h3>Create A New Competition</h3>
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
        successfull: state.company.addCompetitionSuccess
    }
}
const mapDispatchToProps = dispatch =>{
	return {
        onInit: (companyId)=>dispatch(actions.getCompanyRequest(companyId)),
        onAddInit: ()=>dispatch(actions.addCompetitionInit()),
 		onSubmitAdd: (competition)=>dispatch(actions.addCompetitionRequest(competition))
 	};
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewCompetition));