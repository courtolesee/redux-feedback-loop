import React, { Component } from 'react';
import { connect } from 'react-redux';

// 6th route - 
// submission sucess page
// Feedback Btn takes them back to start

class Success extends Component {

    // user can restart feedback for new inputs
    goToStart = ()=>{
        this.props.history.push(`/`);
    }

    render(){
        return (
            <div>
                <h2>Success! Thank you for providing feedback!</h2>
                <button onClick={this.goToStart}>Leave New Feedback</button>
            </div>
        )
    }
}

const putReduxStateOnProps = ( reduxState ) => ({
    reduxState
  })

export default connect( putReduxStateOnProps ) (Success);