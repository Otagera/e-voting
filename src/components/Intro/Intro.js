import React, { Component } from 'react';

import ali from '../../assets/images/ali.jpg';
import InputGroup from '../UI/InputGroup/InputGroup';

class Intro extends Component{
    state = {
    	formData: {
    		search: {
    			elementType: 'search',
    			elementConfig: {
    				type: 'text',
    				placeholder: 'Search Contests'
    			},
    			elementName: 'search',
    			elementTitle: 'Search',
    			value: '',
    			validation: {},
    			valid: true,
    			touched: false
    		}
    	},
    	formIsValid: false
    }
    handleInputValue = (value, name) =>{
    	let formData = { ...this.state.formData };
    	formData[name].value = value;
    	formData[name].touched = true;

    	let formIsValid = true;
    	for (let inputIdentifiers in formData) {
    		formIsValid = formData[inputIdentifiers].valid && formIsValid;
    	}

    	this.setState({ formData: formData, formIsValid: formIsValid });
    }
	render(){
		let { formData, formIsValid } = this.state;
		let formElementArray = [];
		for (let key in formData) {
			formElementArray.push({
				id: key,
				config: formData[key]
			});
		}
		return (
			<div className='Intro'>
				{
					formElementArray.map(formElement=>{
						const { id, config } = formElement;
						return (
							<InputGroup 
								key={id}
								classes={config.elementTitle}
								name={config.elementName}
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
				<section className='Intro-Top'>
					<h2>Easily post your poll within a minute</h2>
					<button>Create Poll</button>				
				</section>
				<section className='Trending'>
					<div className='Trending-Top'>
						<p>Trending Today</p>
						<hr />					
					</div>
					<div className='Trending-Bottom'>
						<article className='Trending-Contest'>
							<h4>Company Name</h4>
							<img src={ali} alt="Company Logo" />
							<p className='Title'>Competition Title</p>
							<div className='Contest-Bottom'>
								<p>218 votes</p>
								<p className='Dot'>&middot;</p>
								<p>7 hours left</p>
							</div>
						</article>
						<article className='Trending-Contest'>
							<h4>Company Name</h4>
							<img src={ali} alt="Company Logo" />
							<p className='Title'>Competition Title</p>
							<div className='Contest-Bottom'>
								<p>218 votes</p>
								<p className='Dot'>&middot;</p>
								<p>7 hours left</p>
							</div>
						</article>
						<article className='Trending-Contest'>
							<h4>Company Name</h4>
							<img src={ali} alt="Company Logo" />
							<p className='Title'>Competition Title</p>
							<div className='Contest-Bottom'>
								<p>218 votes</p>
								<p className='Dot'>&middot;</p>
								<p>7 hours left</p>
							</div>
						</article>
						<article className='Trending-Contest'>
							<h4>Company Name</h4>
							<img src={ali} alt="Company Logo" />
							<p className='Title'>Competition Title</p>
							<div className='Contest-Bottom'>
								<p>218 votes</p>
								<p className='Dot'>&middot;</p>
								<p>7 hours left</p>
							</div>
						</article>
						<article className='Trending-Contest'>
							<h4>Company Name</h4>
							<img src={ali} alt="Company Logo" />
							<p className='Title'>Competition Title</p>
							<div className='Contest-Bottom'>
								<p>218 votes</p>
								<p className='Dot'>&middot;</p>
								<p>7 hours left</p>
							</div>
						</article>
						<article className='Trending-Contest'>
							<h4>Company Name</h4>
							<img src={ali} alt="Company Logo" />
							<p className='Title'>Competition Title</p>
							<div className='Contest-Bottom'>
								<p>218 votes</p>
								<p className='Dot'>&middot;</p>
								<p>7 hours left</p>
							</div>
						</article>
						<article className='Trending-Contest'>
							<h4>Company Name</h4>
							<img src={ali} alt="Company Logo" />
							<p className='Title'>Competition Title</p>
							<div className='Contest-Bottom'>
								<p>218 votes</p>
								<p className='Dot'>&middot;</p>
								<p>7 hours left</p>
							</div>
						</article>
						<article className='Trending-Contest'>
							<h4>Company Name</h4>
							<img src={ali} alt="Company Logo" />
							<p className='Title'>Competition Title</p>
							<div className='Contest-Bottom'>
								<p>218 votes</p>
								<p className='Dot'>&middot;</p>
								<p>7 hours left</p>
							</div>
						</article>
						<article className='Trending-Contest'>
							<h4>Company Name</h4>
							<img src={ali} alt="Company Logo" />
							<p className='Title'>Competition Title</p>
							<div className='Contest-Bottom'>
								<p>218 votes</p>
								<p className='Dot'>&middot;</p>
								<p>7 hours left</p>
							</div>
						</article>
						<article className='Trending-Contest'>
							<h4>Company Name</h4>
							<img src={ali} alt="Company Logo" />
							<p className='Title'>Competition Title</p>
							<div className='Contest-Bottom'>
								<p>218 votes</p>
								<p className='Dot'>&middot;</p>
								<p>7 hours left</p>
							</div>
						</article>
						<article className='Trending-Contest'>
							<h4>Company Name</h4>
							<img src={ali} alt="Company Logo" />
							<p className='Title'>Competition Title</p>
							<div className='Contest-Bottom'>
								<p>218 votes</p>
								<p className='Dot'>&middot;</p>
								<p>7 hours left</p>
							</div>
						</article>
						<article className='Trending-Contest'>
							<h4>Company Name</h4>
							<img src={ali} alt="Company Logo" />
							<p className='Title'>Competition Title</p>
							<div className='Contest-Bottom'>
								<p>218 votes</p>
								<p className='Dot'>&middot;</p>
								<p>7 hours left</p>
							</div>
						</article>
					</div>
				</section>
			</div>
		);
	}
}
export default Intro;