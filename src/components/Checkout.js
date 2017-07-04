import React from 'react';

import Header from './Header';
import Success from './Success'
import CartItemList from './CartItemList';

import '../App.css'

export default class Checkout extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			paid: false
		}
	}
	checkout() {
		this.setState({
			paid: !this.state.paid
		})
	}
	getTotalCartPrice = (items) => {
		return items.map(
				item => item.count*item.item.price
			).reduce((sum, value) => (sum+value), 0)
	}
    render() {
        return (
          <div className="App">
          	<Header {...this.props} />
          	{((isPaid)=>(
          			isPaid 
          				? <Success {...this.props.actions} />
          				: <div style={styles.container}>
          					{ CartItemList( {actions: {...this.props.actions}, items: this.props.items, theme: this.props.theme} ) }
				        	<label style={{}}>Address:</label>
				        	<textarea cols={75} rows={10} />
				        	<button 
				        		style={{backgroundColor: this.props.theme.buttonColor, fontSize: '50px'}}
				        		className="button"
				        		onClick={()=>this.checkout()}
			        		>PAY {this.getTotalCartPrice(this.props.items)}&#8377;
			        		</button>
				        </div>
          		))(this.state.paid)
          	}
          </div>
        )
    }
}

const styles = {
	container: {
		margin: '20px', 
		padding: '20px', 
		border: '2px solid #DEcaaf',
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center'
	}
}