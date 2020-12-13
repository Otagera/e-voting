import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import InputGroup from '../../../../../UI/InputGroup/InputGroup';
import Modal from '../../../../../UI/Modal/Modal';
import Loader from '../../../../../UI/Loader/Loader';
import Aux from '../../../../../../hoc/Auxillary/Auxillary';
import * as actions from '../../../../../../store/actions/index';

class EditCategory extends Component {
    state = {
        categoryToBeEdited: null,
    	form: React.createRef(),
    	error: false,
    	submitted: false,
    	showSuccessInfo: false,
        touched: false
    }
    componentDidMount(){
        this.props.onInit(+this.props.match.params.companyId, +this.props.match.params.competitionId);
    }
    static getDerivedStateFromProps(props, state){
        if(props.categoryToBeEdited !== state.categoryToBeEdited && !state.touched){
            return { categoryToBeEdited: props.categoryToBeEdited };
        }
        return null;
    }
    handleInputValue = (value, name) =>{
        let tempState = { ...this.state.categoryToBeEdited };
        tempState[name] = value;
        this.setState({ categoryToBeEdited: tempState, touched: true });
    }
    handleSubmit = (e)=>{
    	e.preventDefault();
    	// let fd = new FormData(this.state.form.current);
    	this.props.onSubmitEdit(this.state.categoryToBeEdited);
    	this.setState({ showSuccessInfo: true });
    }
    removeModal = ()=>{
    	this.setState({ showSuccessInfo: false, submitted: true });
    }
	render(){
		const { 
			submitted, form, showSuccessInfo, categoryToBeEdited, error
		} = this.state;
        const { company, match } = this.props;
        let displayForm = null;
        if(!categoryToBeEdited){
            displayForm = <Loader />
        }else if(error){
            displayForm = <p>Something went horibly wrong</p>
        }else {
    		let redirect = null;
    		let img = <img src={company.img} alt="Company Logo" />
    		if(submitted){
    			redirect = <Redirect to={`/company/${match.params.companyId}/competition/${match.params.competitionId}`} />
    		}
                let elementConfig = {
                    options: [
                        {
                            value: 'first-past-the-post',
                            displayValue: 'First Past The Post'
                        }
                    ]
                };
    		   displayForm = (
                <Aux>
    				{redirect}
    				<form ref={form} className='CategoryForm' onSubmit={this.handleSubmit}>
    					{img}
    					<h2>Update Category Data</h2>
    					<InputGroup 
                            classes='name'
                            name='name'
                            title='Name'
                            type='text'
                            value={categoryToBeEdited.name}
                            handleInputValue={this.handleInputValue}
                        />
                        <InputGroup 
                            classes='type'
                            name='type'
                            title='type'
                            type='text'
                            elementType='select'
                            elementConfig={elementConfig}
                            value={categoryToBeEdited.type}
                            handleInputValue={this.handleInputValue}
                        />
                        <div className='InputGroup FlexRow'>
                            <button type='submit'>Submit</button>
                        </div>
    					<Modal show={showSuccessInfo} modalClosed={this.removeModal}
    							successfull={true}>
    							<div>
    								<p>{categoryToBeEdited.name} Updated Successfully</p>
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
        company: state.company.selectedCompany,
        categoryToBeEdited: state.company.selectedCompetition
    }
}
const mapDispatchToProps = dispatch =>{
	return {
        onInit: (companyId, competitionId)=>dispatch(actions.getCompetitionRequest(companyId, competitionId)),
 		onSubmitEdit: (company)=>dispatch(actions.addCompany(company))
 	};
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditCategory));