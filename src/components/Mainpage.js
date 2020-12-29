import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

export class Mainpage extends Component {
    continue =e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="hello user" />
                    <RaisedButton 
                    label="REGISTER"
                    primary={true}
                    style={styles.button}
                     onClick={this.continue}

                    />
                </React.Fragment>
            </MuiThemeProvider>

        )
    }
}
const styles={
    button: {
        margin: 15
    }
}
export default Mainpage
