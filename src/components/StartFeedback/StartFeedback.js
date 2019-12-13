import React, { Component } from 'react';
import { connect } from 'react-redux';


class StartFeedback extends Component {

    goToFeeling = ()=>{
        this.props.history.push(`/feeling`);
    }

    render(){
        return (
        <div>
        <button onClick={this.goToFeeling}>Start my Feedback!</button>
        </div> 
        )
    }
}


export default connect() (StartFeedback);