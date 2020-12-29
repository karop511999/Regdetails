import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
export class Perdetails extends Component {

    continue= e =>{
        e.preventDefault();
        this.props.nextStep();
    };
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const {value , handleChange}=this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="hello user"></AppBar>
                    <TextField 
                    hintText="enter you occupation"
                    floatingLabelFixed="occupation"
                    onChange={handleChange('occupation')}
                    defaultValue={value.occupation}
                    />
                    <br/>
                    <TextField 
                    hintText="Enter your city"
                    floatingLabelFixed="city"
                    onChange={handleChange('city')}
                    defaultValue={value.city}
                    />
                    <br/>
                    <TextField 
                    hintText="enter your bio"
                    floatingLabelFixed="bio"
                    onChange={handleChange('bio')}
                    defaultValue={value.bio}
                    />
                    <br/>
                    <RaisedButton 
                    label="continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                    />
                    <RaisedButton 
                    label="back"
                    primary={false}
                    style={styles.button}
                    onClick={this.back}
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
export default Perdetails
