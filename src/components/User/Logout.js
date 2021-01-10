import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../store/actions/index';

const logout = ( props )=>{
	props.onLogout();
	return (
		<Redirect to='/' />
	);
}
const mapDispatchToProps = dispatch =>{
    return {
        onLogout: ()=>dispatch(actions.logoutTimer())
    };
}
export default connect(null, mapDispatchToProps)(logout);