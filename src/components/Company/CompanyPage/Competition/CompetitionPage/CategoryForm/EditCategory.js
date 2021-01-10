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
        submitClicked: false,
        touched: false
    }
    componentDidMount(){
        this.props.onEditInit();
        this.props.onInit(
            +this.props.match.params.companyId,
            +this.props.match.params.competitionId,
            +this.props.match.params.categoryId
            );
    }
    static getDerivedStateFromProps(props, state){
        if(props.categoryToBeEdited !== state.categoryToBeEdited && !state.touched){
            console.log(true);
            return { categoryToBeEdited: props.categoryToBeEdited };
        }
        if(props.successfull){
            return { submitClicked: false };
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
    	let fd = new FormData(this.state.form.current);
    	this.props.onSubmitEdit(+this.props.match.params.categoryId, fd);
    	this.setState({ submitClicked: true, showSuccessInfo: true });
    }
    removeModal = ()=>{
    	this.setState({ showSuccessInfo: false, submitted: true });
    }
	render(){
		const { 
			submitted, form, showSuccessInfo, categoryToBeEdited, error, submitClicked
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
            let modalDisplay = null;
    		if(submitted){
    			redirect = <Redirect to={`/company/${match.params.companyId}/competition/${match.params.competitionId}`} />
    		}
            if(submitClicked){ modalDisplay = <Loader />; }
            else {
                modalDisplay = (
                    <Aux>
                        <p>{categoryToBeEdited.name} Updated Successfully</p>
                        <button onClick={this.removeModal}>Continue</button>
                    </Aux>
                );
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
    					<h3>Update Category Data</h3>
    					<InputGroup 
                            classes='name'
                            name='name'
                            title='Name'
                            type='text'
                            value={categoryToBeEdited.name}
                            handleInputValue={this.handleInputValue}
                        />
                        <InputGroup 
                            classes='description'
                            name='description'
                            title='Description'
                            type='text'
                            value={categoryToBeEdited.description}
                            handleInputValue={this.handleInputValue}
                        />
                        <InputGroup 
                            classes='type'
                            name='type'
                            title='Type'
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
    							<div>{modalDisplay}</div>
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
        categoryToBeEdited: state.company.selectedCategory,
        successfull: state.company.editCategorySuccess
    }
}
const mapDispatchToProps = dispatch =>{
	return {
        onInit: (companyId, competitionId, categoryId)=>dispatch(actions.getCategoryRequest(companyId, competitionId, categoryId)),
        onEditInit: ()=>dispatch(actions.editCategoryInit()) ,
 		onSubmitEdit: (categoryId, categoryData)=>dispatch(actions.editCategoryRequest(categoryId, categoryData))
 	};
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditCategory));