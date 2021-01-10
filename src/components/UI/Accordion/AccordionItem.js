import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class AccordionItem extends Component {
	state = {
		opened: false
	}
	inputRefs = {};
	setCompetitionRef = (ref, name) =>{
		this.inputRefs = {
			...this.inputRefs,
			[name]:{
				ref: ref
			}
		}
	}
	componentDidMount(){
		const { inputRefs, props } = this;
		if(Object.keys(inputRefs).length > 0 && props.location.hash) {
			for (let key in inputRefs) {
				if(`#${key.replaceAll(' ', '-')}` === props.location.hash){
					this.timeout = setTimeout(()=>{
						inputRefs[key].ref.scrollIntoView({
							behaviour: 'smooth',
							block: 'start',
							inline: 'center'
						});
					}, 2000);
					this.setState({ opened: true });
				}
			}
		}
	}
	render(){
		const {
			props: {
				title,
				children
			},
			state: {
				opened
			}
		} = this;
		return (
			<div {...{ className: `accordion-item', ${opened && 'accordion-item--opened'}` }} 
								ref={(el)=>{this.setCompetitionRef(el, title)}}>
					<div {...{ className: 'accordion-item__line',
						onClick:()=>{this.setState({ opened: !opened }) }  }}>
						<h3 {...{className: 'accordion-item__title'}}>{title}</h3>
						<span {...{className: 'accordion-item__icon'}} />
					</div>
					<div {...{className: 'accordion-item__inner'}}>
						<div {...{className: 'accordion-item__content'}}>
							{children}
						</div>
					</div>
			</div>
			)
	}
}
export default withRouter(AccordionItem);