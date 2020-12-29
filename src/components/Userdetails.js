import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
export class Userdetails extends Component {

    continue = e =>{
          e.preventDefault();
          this.props.nextStep();
    }
    render() {
        const { value , handleChange} =this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="hello user"></AppBar>
                    <TextField 
                    hintText="enter you first name"
                    floatingLabelFixed="firstname"
                    onChange={handleChange('firstname')}
                    defaultValue={value.firstname}
                    />
                    <br/>
                    <TextField 
                    hintText="Enter your last name"
                    floatingLabelFixed="last name"
                    onChange={handleChange('lastname')}
                    defaultValue={value.lastname}
                    />
                    <br/>
                    <TextField 
                    hintText="enter your emaail"
                    floatingLabelFixed="email"
                    onChange={handleChange('email')}
                    defaultValue={value.email}
                    />
                    <br/>
                    <RaisedButton 
                    label="continue"
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
export default Userdetails
