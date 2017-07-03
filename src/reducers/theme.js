let defaultTheme = {
	buttonColor: '#decaaf'
}

const theme = (state=defaultTheme, action) => {
	switch(action.type) {
		case 'CHANGE_BUTTON_COLOR' : {
			debugger;
			return {buttonColor: action.data}
		}
		default :
			return state
	}
}

export default theme;