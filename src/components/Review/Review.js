import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// 5th route - 
// The last step of the process will allow the user to review their feedback. 
// Users are not able to change their input on this step or go back for Base Mode.
// Submit Btn sends data to server and saves in DB

class Review extends Component {

    //post 

    goToSuccess = ()=>{
        this.props.history.push(`/success`);
    }

    render(){
        return (
            <div>
                <h2>Review Your Feedback</h2>
                {JSON.stringify(this.props.reduxState)}
                <div>
                    <p>Your Feelings: {this.props.reduxState.gatherSurveyInfo[0]}</p>
                    <p>Your Understanding: {this.props.reduxState.gatherSurveyInfo[1]}</p>
                    <p>Your Support: {this.props.reduxState.gatherSurveyInfo[2]}</p>
                    <p>Your Comments: {this.props.reduxState.gatherSurveyInfo[3]}</p>
                </div>
                <button onClick={this.goToSuccess}>SUBMIT</button>
            </div>
        )
    }
}

const putReduxStateOnProps = ( reduxState ) => ({
    reduxState
  })

export default connect( putReduxStateOnProps ) (Review);