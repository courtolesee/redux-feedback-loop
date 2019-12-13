import React, { Component } from 'react';
import { connect } from 'react-redux';

// 5th route - 
// The last step of the process will allow the user to review their feedback. 
// Users are not able to change their input on this step or go back for Base Mode.
// Submit Btn sends data to server and saves in DB

class Review extends Component {
    render(){
        return (
            <div>
                <h2>Review Your Feedback</h2>
                <button>SUBMIT</button>
            </div>
        )
    }
}


//if you want just one reducer you can say so
const putReduxStateOnProps = ( reduxState ) => ({
    reduxState
  })

export default connect( putReduxStateOnProps ) (Review);