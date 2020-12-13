import React, { Component } from 'react';

class AccordionItem extends Component {
	state = {
		opened: false
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
			<div {...{ className: `accordion-item', ${opened && 'accordion-item--opened'}` }}>
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
export default AccordionItem