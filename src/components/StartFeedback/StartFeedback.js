import React, { Component } from 'react';
import { connect } from 'react-redux';

// starting feedback, next routes to feelings

class StartFeedback extends Component {

    goToFeeling = ()=>{
        this.props.history.push(`/feeling`);
    }

    render(){
        return (
        <div>
        <h2>Ready to start today's feedback?</h2>
        <button onClick={this.goToFeeling}>Start my Feedback!</button>
        </div> 
        )
    }
}


export default connect() (StartFeedback);