import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

class InputGroup extends Component{
	state = {
		[this.props.name]: this.props.value
	}

	handleChange = (event)=> {
		let type = 'value';
		if(event.target.type === 'checkbox'){
			type = 'checkbox';
		} else if(event.target.type === 'file'){
			type = 'files';
		}
		
		const value = event.target[type];
		const name = event.target.name;
		this.setState({
			[name]: value
		});
		this.props.handleInputValue(value, this.props.name);
	}

	reset = ()=>{
		this.setState({ inputValue: '' });
	}

	render(){
		const { 
			invalid, shouldValidate, touched, elementType,
			elementConfig, name, passwordType, handleShowPassword,
			passwordRevealed, title, classes
		} = this.props;
		let inputElement = null;
		let inputClasses = [classes];
		let icon = null;
		let validError = null;
		let label = <label>{title}</label>;
		if(invalid && shouldValidate && touched){
			inputClasses.push('Invalid');
		}
		switch (elementType) {
			case ('input'):
				inputElement = <input
									className={inputClasses.join(' ')}
									{...elementConfig}
									value={this.state[name]}
									onChange={this.handleChange}
									name={name} />;
				break;
			case ('textarea'):
				inputElement = <textarea
									className={inputClasses.join(' ')}
									{...elementConfig}
									value={this.state[name]}
									onChange={this.handleChange}
									name={name}
									cols={27}
									rows={40} />;
				break;
			case ('select'):
				inputElement = <select
									className={inputClasses.join(' ')}
									value={this.state[name]}
									onChange={this.handleChange}
									name={name} >
									<option value='' defaultValue></option>
									{
										elementConfig.options.map(option=>(
											<option key={option.value} value={option.value}>{option.displayValue}</option>
										))
									}
								</select>
				break;
			case ('file'):
				inputElement = <input
									type="file"
									ref={this.props.ref}
									className={inputClasses.join(' ')}
									name={name}
									onChange={this.handleChange} />
				break;
			case ('date'):
				inputElement = <input
									type="date"
									className={inputClasses.join(' ')}
									name={name}
									value={(this.props.value)? this.props.value: new Date().toISOString().substr(0, 10)}
									onChange={this.handleChange} />
				break;
			case ('submit'):
				inputElement = <input
									type="submit"
									className={inputClasses.join(' ')}
									name={name}
									value={this.props.value}
									disabled={this.props.disabled} />
				break;
			default:
				inputElement = <input
									className={inputClasses.join(' ')}
									{...elementConfig}
									value={this.state[name]}
									onChange={this.handleChange}
									name={name} />;
				break;
		}
		if(passwordType){
			icon = <span onClick={handleShowPassword.bind(this, name)}>
						<span className='IconSpan'>
							<FontAwesomeIcon
								icon={(passwordRevealed)? faEye: faEyeSlash}
								className='EyeIcon'/>
						</span>
					</span>
		}
		if(invalid && shouldValidate && touched){
			let text = null;
			if(shouldValidate.required) {
				text = `${title} is required`;
				if(this.state[name] && shouldValidate.email) {
					text = `${title} is not a valid email`;
				} else if(this.state[name] && shouldValidate.url) {
					text = `Please enter a valid URL`;
				} else if(this.state[name] && shouldValidate.confirmPassword) {
					text = `Be sure that ${title} matches the Password entered`;
				} else if(this.state[name] && shouldValidate.minLength) {
					text = `${title} should be more than ${shouldValidate.minLength} characters`;
				} else if(this.state[name] && shouldValidate.maxLength) {
					text = `${title} should be less than ${shouldValidate.maxLength} characters`;
				} else if(this.state[name] && shouldValidate.minLength && shouldValidate.maxLength) {
					text = `${title} should be less than ${shouldValidate.minLength} and more than ${shouldValidate.maxLength} characters`;
				}
			}else {				
				if(this.state[name] && shouldValidate.email) {
					text = `${title} is not a valid email`;
				} else if(this.state[name] && shouldValidate.url) {
					text = `Please enter a valid URL`;
				} else if(this.state[name] && shouldValidate.confirmPassword) {
					text = `Be sure that ${title} matches the Password entered`;
				} else if(this.state[name] && shouldValidate.minLength) {
					text = `${title} should be more than ${shouldValidate.minLength} characters`;
				} else if(this.state[name] && shouldValidate.maxLength) {
					text = `${title} should be less than ${shouldValidate.maxLength} characters`;
				} else if(this.state[name] && shouldValidate.minLength && shouldValidate.maxLength) {
					text = `${title} should be less than ${shouldValidate.minLength} and more than ${shouldValidate.maxLength} characters`;
				}
			}
			validError = <span>
							<span className='Validate-Error'>
								<span className='Validate-Error-Text'>
									<FontAwesomeIcon icon={faExclamationCircle}/>
									{text}
								</span>
							</span>
						</span>
		}
		if(this.props.elementType === 'submit' || this.props.elementType === 'search'){
			label = null;
		}
		return(
			<div className={`FlexRow InputGroup`}>
				{label}
				{validError}
				{inputElement}
				{icon}
				{/* <button>Add</button> */}
			</div>
		);
	}
}

export default InputGroup