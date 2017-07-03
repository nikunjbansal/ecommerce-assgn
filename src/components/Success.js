import React from 'react';

import Header from './Header';

export default class Success extends React.Component {
    render() {
        return (
          <div className="App">
	        <div style={styles.container}>
	        	<h2>Success !</h2>
	        </div>
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