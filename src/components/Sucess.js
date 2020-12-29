import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField';
export class sucess extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="SUCESSS" />
                    <h1>THANK YOU FOR U R REGISTRATION</h1>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default sucess
