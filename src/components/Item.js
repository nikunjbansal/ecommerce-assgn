import React from 'react';

const Item = props => {
	
	let { customComponents } = { ...props }

	return (
		<div>
			{customComponents}
		</div>
	)
}

export default Item