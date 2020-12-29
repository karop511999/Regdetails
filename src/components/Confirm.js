import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List , ListItem, Listitem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
export class confirm extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    };
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const {value: {firstname,lastname,email,occupation,city,bio}}= this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="YOUR DETAILS" />
                    <List >
                        <ListItem
                         primaryText="your first name"
                         secondaryText={firstname}
                        />
                        <ListItem
                         primaryText="your last name"
                         secondaryText={lastname}
                        />
                        <ListItem
                         primaryText="your email"
                         secondaryText={email}
                        />
                        <ListItem
                         primaryText="your occupatin"
                         secondaryText={occupation}
                        />
                        <ListItem
                         primaryText="your city"
                         secondaryText={city}
                        />
                        <ListItem
                         primaryText="your bio"
                         secondaryText={bio}
                        />
                    </List>
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
    button:{
        margin: 15
    }
}
export default confirm

