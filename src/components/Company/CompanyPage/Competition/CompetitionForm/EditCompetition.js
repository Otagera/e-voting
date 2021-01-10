import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import InputGroup from '../../../../UI/InputGroup/InputGroup';
import Modal from '../../../../UI/Modal/Modal';
import Loader from '../../../../UI/Loader/Loader';
import Aux from '../../../../../hoc/Auxillary/Auxillary';
import * as actions from '../../../../../store/actions/index';

class EditCompetition extends Component {
    state = {
        competitionToBeEdited: null,
    	form: React.createRef(),
    	error: false,
    	submitted: false,
    	showSuccessInfo: false,
        submitClicked: false,
        touched: false
    }
    componentDidMount(){
        this.props.onEditInit();
        this.props.onInit(+this.props.match.params.companyId, +this.props.match.params.competitionId);
    }
    static getDerivedStateFromProps(props, state){
        if(props.competitionToBeEdited !== state.competitionToBeEdited && !state.touched){
            return { competitionToBeEdited: props.competitionToBeEdited };
        }
        
        if(props.successfull){
            return { submitClicked: false };
        }
        return null;
    }
    handleInputValue = (value, name) =>{
        let tempState = { ...this.state.competitionToBeEdited };
        tempState[name] = value;
        this.setState({ competitionToBeEdited: tempState, touched: true });
    }
    handleSubmit = (e)=>{
    	e.preventDefault();
    	let fd = new FormData(this.state.form.current);
    	this.props.onSubmitEdit(+this.props.match.params.competitionId, fd);
    	this.setState({ submitClicked: true, showSuccessInfo: true });
    }
    removeModal = ()=>{
    	this.setState({ showSuccessInfo: false, submitted: true });
    }
	render(){
		const { 
			submitted, form, showSuccessInfo, competitionToBeEdited, error, submitClicked
		} = this.state;
        const { company, match } = this.props;
        let displayForm = null;
        if(!competitionToBeEdited){
            displayForm = <Loader />
        }else if(error){
            displayForm = <p>Something went horibly wrong</p>
        }else {
    		let redirect = null;
    		let img = <img src={company.img} alt="Company Logo" />;
            let modalDisplay = null;

    		if(submitted){ redirect = <Redirect to={`/company/${match.params.companyId}/competition/${match.params.competitionId}`} />; }
            if(submitClicked){ modalDisplay = <Loader />; }
            else {
                modalDisplay = (
                    <Aux>
                        <p>{competitionToBeEdited.name} Edited Successfully</p>
                        <button onClick={this.removeModal}>Continue</button>
                    </Aux>
                );
            }
    		displayForm = (
                <Aux>
    				{redirect}
    				<form ref={form} className='CompetitionForm' onSubmit={this.handleSubmit}>
    					{img}
    					<h2>Edit Competition</h2>
    					<InputGroup 
                            classes='name'
                            name='name'
                            title='Name'
                            type='text'
                            value={competitionToBeEdited.name}
                            handleInputValue={this.handleInputValue}
                        />
                        <InputGroup 
                            classes='description'
                            name='description'
                            title='Description'
                            type='text'
                            value={competitionToBeEdited.description}
                            handleInputValue={this.handleInputValue}
                        />
                        <InputGroup 
                            classes='deadline'
                            name='deadline'
                            title='Voting Deadline'
                            type='text'
                            elementType='date'
                            value={new Date(competitionToBeEdited.deadline).toISOString().substr(0, 10)}
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
        competitionToBeEdited: state.company.selectedCompetition,
        successfull: state.company.editCompetitionSuccess
    }
}
const mapDispatchToProps = dispatch =>{
	return {
        onInit: (companyId, competitionId)=>dispatch(actions.getCompetitionRequest(companyId, competitionId)),
        onEditInit: ()=>dispatch(actions.editCompetitionInit()),
 		onSubmitEdit: (competitionId, cometitionData)=>dispatch(actions.editCompetitionRequest(competitionId, cometitionData))
 	};
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditCompetition));