import React, { Component } from 'react';
import { connect } from 'react-redux';

// 1st feedback route - 1-5 how are you feeling today?
// next goes to Understanding

class Feeling extends Component {

    // capturing user input with state and handleChange
    state = {
        feeling: ''
      }
    
    handleChange = (event)=>{
        console.log('feelings:', event.target.value);
        this.setState({
        feeling: event.target.value
    })
    }
    
    // sending user input to reducer upon form submit - alerts if empty - routes to next feedback
    handleSubmit = (event)=>{
        event.preventDefault();
        if(this.state.feeling){this.props.dispatch({ type: 'GATHER_SURVEY_INFO', payload: this.state.feeling })
        this.props.history.push(`/understanding`);}
        else{alert('Tell me your feelings!')}
    }

    render(){
        return (
        <div>
            <h2>How are you feeling today?</h2>
            <form onSubmit={(event)=>this.handleSubmit(event)}>
                <input onChange={(event)=>this.handleChange(event, 'feeling')} value={this.state.feeling} className="numberInputs" type="number" max="5" min="0" placeholder="1-5"/>
                <button type="submit">NEXT</button>
            </form>
        </div> 
        )
    }
}

const putReduxStateOnProps = ( reduxState ) => ({
    reduxState: reduxState.gatherSurveyInfo
  })

export default connect( putReduxStateOnProps ) (Feeling);