import React, { Component } from 'react'
import Mainpage from './Mainpage'
import Userdetails from './Userdetails'
import Perdetails from './Perdetails'
import Confirm from './Confirm'
import Sucess from './Sucess'

export class Userform extends Component {
    state ={
        step: 1,
        firstname: '',
        lastname: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    nextStep= () =>{
        const {step}=this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () =>
        {
          const{step}=this.state;
          this.setState({
              step: step-1
          });
        }
        handleChange= input => e =>{
        this.setState({[input]: e.target.value}); 
    } 
    render() {
        const { step } = this.state;
        const { firstname , lastname , email , occupation , city , bio} = this.state;
        const value = { firstname , lastname , email , occupation , city , bio}
       
        switch(step) {
            case 1:
                return(
                    <Mainpage
                    nextStep={this.nextStep} 
                    handleChange={this.handleChange}
                    value={value}
                    />
                )
            case 2:
                return(
                    <Userdetails
                    nextStep={this.nextStep} 
                    handleChange={this.handleChange}
                    value={value}
                    />
                )

            case 3:
                return(
                    <Perdetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    value={value}
                    />
                    )
            case 4:
                return(
                   <Confirm 
                   nextStep={this.nextStep}
                   prevStep={this.prevStep}
                   handleChange={this.handleChange}
                   value={value}
                   />
                )
            case 5:
                    return(
                       <Sucess 
                       nextStep={this.nextStep}
                       handleChange={this.handleChange}
                       value={value}
                       />
                    )
        }
    }
}

export default Userform
