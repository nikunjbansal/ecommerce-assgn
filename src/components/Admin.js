import React from 'react';
import { SketchPicker } from 'react-color';


import Header from './Header';

export default class Admin extends React.Component {
    render() {
        return (
          <div className="App">
          	<Header {...this.props} />
	        <div style={styles.container}>
	        	<div style={{width: '50%', display: 'flex', flexDirection: 'column'}}>
	        	{
	        		this.props.menu.map(item=>(
    					<div style={styles.li}>
    						<p>{item.id}</p>
    						<p>{item.desc}</p>
    						<input 
    							type="number"
    							min={0}
    							value={item.price}
    							onChange={(e)=>
    								this.props.actions.onEditItemPrice(item, e.target.value)
    							}
    							style={styles.input}
							/>
    					</div>
					))
	        	}
	        	</div>
				<SketchPicker
			        color={ this.props.theme.buttonColor }
			        onChangeComplete={ color => this.props.actions.changeThemeColor(color.hex) }
			      />
	        	<div>
        			<button 
        				onClick={()=>this.props.actions.redirectTo('/')}
        				style={{'fontSize' : '30px', backgroundColor: this.props.theme.buttonColor}}>SAVE</button>
        		</div>
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
	},
	li: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: '10px'
	},
	input: {
		textAlign: 'center',
		fontSize: '20px'
	}
}