import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Aux from '../../../../../hoc/Auxillary/Auxillary';
import UserService from '../../../../../services/UserService';
import Loader from '../../../../UI/Loader/Loader';
import Modal from '../../../../UI/Modal/Modal';
import * as actions from '../../../../../store/actions/index';

class Contestant extends Component{
	state = {
		voteClicked: false,
		showSuccessInfo: false
	}
    static getDerivedStateFromProps(props, state){
        if(props.successfull){
            return { voteClicked: false };
        }
        return null;
    }
    onVote = (categoryFakeId, contestanFakeId) =>{
    	this.props.onVote(categoryFakeId, contestanFakeId);
    	this.setState({ voteClicked: true, showSuccessInfo: true });
    }
    removeModal = ()=>{
    	this.setState({ showSuccessInfo: false });
    }
	render(){
		const { voteClicked, showSuccessInfo } = this.state;
		const { contestant, faSocials, match, categoryFakeId, userAvaliable } = this.props;
		const { companyId, competitionId } = match.params;
		let modalDisplay = null;
		let socials = [];
		for(let key in contestant.socials){
			socials.push({
				id: contestant.socials[key].social,
				url: contestant.socials[key].link
			});
		}
        if(voteClicked){ modalDisplay = <Loader />; }
        else {
            modalDisplay = (
                <Aux>
                    <p>You've voted successfully for {contestant.name}</p>
                    <button onClick={this.removeModal}>Continue</button>
                </Aux>
            );
        }
		return (
			<div className='Contestant'>
				<h4>{contestant.name}</h4>
				<img src={UserService.updateImgURL(contestant.img)} alt={contestant.name} />
				<div className='Contestant-Body'>
					<div className='Contestant-Body-Cover'>
						{/* this link would be to vote for this contestant*/}
						<p>{contestant.name}</p>
						<div className='FlexRow'>
							<button className='Button' onClick={()=>{this.onVote(categoryFakeId, contestant.fakeId)}}>
								Vote
							</button>
							{userAvaliable && <Aux>
								<Link
									to={`/company/${companyId}/competition/${competitionId}/category/${categoryFakeId}/contestant/${contestant.fakeId}/edit`}>
										<button className='Button'>Edit details</button>
								</Link>
							</Aux>}
						</div>
						<em>
							{(contestant.quote.length >= 150)?
								`${contestant.quote.slice(0, 150)} ...`:
								contestant.quote
							}
						</em>
						<div>
							<span>
								{socials.map(social=>{
									return (<a href={social.url} key={social.id} >
												<FontAwesomeIcon icon={faSocials[social.id]} />
											</a>)
									})}
							</span>
						</div>
					</div>
				</div>
				<Modal show={showSuccessInfo} modalClosed={this.removeModal}
						successfull={true}>
						<div>{modalDisplay}</div>
				</Modal>
			</div>
		);
	}
}

const mapStateToProps = state =>{
    return {
        successfull: state.company.voteContestantSuccess,
        userAvaliable: state.user.userAvaliable
    }
}
const mapDispatchToProps = dispatch =>{
	return {
 		onVote: (categoryId, contestantId)=>dispatch(actions.voteContestantRequest(categoryId, contestantId))
 	};
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Contestant));