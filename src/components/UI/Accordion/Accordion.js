import React from 'react';

import AccordionItem from './AccordionItem';

const accordion = ( props )=>{
	const {
		data
	} = props;
	return (
		<div {...{ className: 'wrapper' }}>
			<ul {...{ className: 'accordion-list' }}>
				{data.map((datum, key)=>{
					let Component = datum.component;
					return (
						<li {...{className: 'accordion-list__item', key: key}}>
							<AccordionItem {...datum}>
								<Component {...datum.sentProps} {...{key: key}}/>
							</AccordionItem>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
export default accordion;