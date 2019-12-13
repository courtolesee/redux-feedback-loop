import React, { Component } from 'react';
import { connect } from 'react-redux';

// 6th route - 
// submission sucess page
// Feedback Btn takes them back to start

class Success extends Component {
    render(){
        return (
            <div>
                <h2>Thank you for providing feedback!</h2>
                <button>Leave New Feedback</button>
            </div>
        )
    }
}


//if you want just one reducer you can say so
const putReduxStateOnProps = ( reduxState ) => ({
    reduxState
  })

export default connect( putReduxStateOnProps ) (Success);