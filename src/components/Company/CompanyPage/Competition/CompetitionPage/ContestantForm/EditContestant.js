import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import InputGroup from '../../../../../UI/InputGroup/InputGroup';
import Modal from '../../../../../UI/Modal/Modal';
import Loader from '../../../../../UI/Loader/Loader';
import Aux from '../../../../../../hoc/Auxillary/Auxillary';
import * as actions from '../../../../../../store/actions/index';

class EditCompetition extends Component {
    state = {
        contestantToBeEdited: null,
    	img: React.createRef(),
        imgDisplay: null,
    	form: React.createRef(),
    	submitted: false,
    	error: false,
    	showSuccessInfo: false,
        submitClicked: false,
        touched: false
    }
    componentDidMount(){
        this.props.onInit(+this.props.match.params.categoryId, +this.props.match.params.contestantId);
    }
    static getDerivedStateFromProps(props, state){
        if(props.contestantToBeEdited !== state.contestantToBeEdited && !state.touched){
            if(props.successfull){
                return { submitClicked: false, contestantToBeEdited: props.contestantToBeEdited };
            }else{
                return { contestantToBeEdited: props.contestantToBeEdited };
            }
        }
        return null;
    }
    handleInputValue = (value, name) =>{
        let tempState = { ...this.state.contestantToBeEdited };
        tempState[name] = value;
        this.setState({ contestantToBeEdited: tempState, touched: true });
    }
    handleSubmit = (e)=>{
    	e.preventDefault();
        const { categoryId, contestantId } = this.props.match.params;
    	let fd = new FormData(this.state.form.current);
    	this.props.onSubmitEdit(+categoryId, +contestantId, fd);
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
			submitted, form, showSuccessInfo, submitClicked,
            contestantToBeEdited, error
		} = this.state;
        const { match } = this.props;
        let displayForm = null;
        if(!contestantToBeEdited){
            displayForm = <Loader />
        }else if(error){
            displayForm = <p>Something went horribly wrong</p>
        }else {
            let redirect = null;
    		let modalDisplay = null;
    		let img = <img src={contestantToBeEdited.img} alt="Contestant Headshot" />
    		if(submitted){
    			redirect = <Redirect to={`/company/${match.params.companyId}/competition/${match.params.competitionId}`} />
    		}
            if(submitClicked){
                modalDisplay = <Loader />;
            }else {
                modalDisplay = (
                    <Aux>
                        <p>{contestantToBeEdited.name} Update Successfully</p>
                        <button onClick={this.removeModal}> Continue </button>
                    </Aux>
                    );
            }
    	    displayForm = (
                <Aux>
    				{redirect}
    				<form ref={form} className='ContestantForm' onSubmit={this.handleSubmit}>
    					{img}
                        {/*<div className='InputGroup FlexRow'>
                            <label>Contestant Headshot</label>
                            <input type="file" ref={this.state.img} className='Img'
                                name='img' onChange={this.handleInputImg} />
                        </div>*/}
    					<h2>Edit Contestant Data</h2>
    					<InputGroup 
                            classes='name'
                            name='name'
                            title='Name'
                            type='text'
                            value={contestantToBeEdited.name}
                            handleInputValue={this.handleInputValue}
                        />
                        <InputGroup 
                            classes='quote'
                            name='quote'
                            title='Quote'
                            type='text'
                            value={contestantToBeEdited.quote}
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
        contestantToBeEdited: state.company.selectedContestant,
        successfull: state.company.editContestantSuccess
    }
}
const mapDispatchToProps = dispatch =>{
	return {
        onInit: (categoryId, contestantId)=>dispatch(actions.getContestantRequest(categoryId, contestantId)),
 		onSubmitEdit: (categoryId, contestantId, contestantData)=>dispatch(actions.editContestantRequest(categoryId, contestantId, contestantData))
 	};
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditCompetition));