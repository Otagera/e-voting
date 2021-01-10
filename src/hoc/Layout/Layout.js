import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../Auxillary/Auxillary';
import * as actions from '../../store/actions/index';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
	state = {
		showSideDrawer: false
	}
    componentDidMount(){
        this.props.onInit();
    }
	sideDrawerClosedHandler = ()=>{
		this.setState({ showSideDrawer: false });
	}
	sideDrawerToggleHandler = ()=>{
		this.setState(prevState=>{
			return { showSideDrawer: !prevState.showSideDrawer };
		});
	}
	render(){
		return (
			<Aux>
				<Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
				<SideDrawer
					open={this.state.showSideDrawer}
					closed={this.sideDrawerClosedHandler} />
				<main  className='Main'>
					{this.props.children}
				</main>
			</Aux>
		);
	}
}
const mapDispatchToProps = dispatch =>{
    return {
        onInit: ()=>dispatch(actions.checkUserAvaIlability())
    };
}
export default connect(null, mapDispatchToProps)(Layout);