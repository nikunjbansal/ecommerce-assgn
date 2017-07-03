import React from 'react'
import './ItemList.css'

const ItemListWrapper = WrappedItem => {
	return class extends React.Component {
		render() {
			let { items, actions } = this.props
			return (
				<div>
					{
						items.map(item => (
							<WrappedItem 
								item={item}
								actions={actions}
								key={item.id}
								className="ListItem"
								 />
						))
					}
				</div>
			)
		}
	}
}

export default ItemListWrapper