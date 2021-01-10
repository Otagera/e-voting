import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Aux from '../../hoc/Auxillary/Auxillary';

class Navigation extends Component {
    state = {
    	isThereUser: null,
    	navItems: {
            home: {
    			to: '/home',
    			title: 'Home',
    			show: true
    		},
    		/*intro: {
    			to: '/intro',
    			title: 'Intro',
    			show: true
    		},*/
            companies: {
                to: '/companies',
                title: 'Companies',
                show: true
            },
    		signup: {
    			to: '/signup',
    			title: 'Signup',
    			show: true
    		},
            login: {
                to: '/login',
                title: 'Login',
                show: true
            },
            logout: {
                to: '/logout',
                title: 'Logout',
                show: false
            }/*,
    		newCompany: {
    			to: '/companies/new',
    			title: 'New Company',
    			show: AuthService.userAvailable()
    		},
    		register: {
    			to: '/register',
    			title: 'Register',
    			show: !AuthService.userAvailable()
    		},
    		login: {
    			to: '/login',
    			title: 'Login',
    			show: !AuthService.userAvailable()
    		}*/
    	}
    }
    static getDerivedStateFromProps(props, state){
        if(props.userAvaliable !== undefined){
            let tempItems = {...state.navItems};
            tempItems['logout'].show = props.userAvaliable;
            tempItems['login'].show = !props.userAvaliable;
            tempItems['signup'].show = !props.userAvaliable;
            return { navItems: tempItems };
        }
        return null;
    }
	render(){
		let { navItems } = this.state;
		let navItemsArray = [];
		for (let key in navItems) {
			navItemsArray.push({
				id: key,
				config: navItems[key]
			});
		}
		return (
			<nav className={this.props.desktop}>
				<ul>
					{
						navItemsArray.map(item =>{
							return ( 
								<Aux key={item.id}>
									{item.config.show && <li>
										<NavLink
											to={item.config.to}
											exact 
											activeClassName='ActiveNavLink'>
												{item.config.title}
										</NavLink>
									</li>}
								</Aux>
							)
						}
					)
				}
			</ul>
		</nav>
		);
	}
}
const mapStateToProps = state =>{
    return {
        userAvaliable: state.user.userAvaliable
    };
}
export default connect(mapStateToProps, null)(Navigation);