import React from 'react';
import '../App.css';

const Header = props => {
	return (
		<div className="App-header">
          <h2>getFat</h2>
          <div>
	          <button className="button" style={{backgroundColor: props.theme.buttonColor}} 
	          	onClick={()=>props.actions.redirectTo('/')}>Home</button>
	          <button className="button" style={{backgroundColor: props.theme.buttonColor}} 
	          	onClick={()=>props.actions.redirectTo('/admin')}>Admin</button>
          </div>
        </div>
	);
}

export default Header

const styles = {
	button: {
		flex: 0.75,
		margin: '10px',
		fontSize: '20px',
		backgroundColor: '#DEcaaf'
	}
}