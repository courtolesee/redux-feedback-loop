import React, { Component } from 'react';
import { connect } from 'react-redux';

// 2nd feedback route - 1-5 how well are you understanding the content?
// next goes to Support

class Understanding extends Component {

    // capturing user input with state and handleChange
    state = {
        understanding: ''
      }
    
    handleChange = (event)=>{
        console.log('understanding:', event.target.value);
        this.setState({
        understanding: event.target.value
    })
    }
    
    // sending user input to reducer upon form submit - alerts if empty - routes to next feedback 
    handleSubmit = (event)=>{
        event.preventDefault();
        if(this.state.understanding){this.props.dispatch({ type: 'GATHER_SURVEY_INFO', payload: this.state.understanding });
        this.props.history.push(`/support`);}
        else{alert('Tell me if you understand!')}
    }

    render(){
        return (
        <div>
            <h2>How well are you understanding the content?</h2>
            <form onSubmit={(event)=>this.handleSubmit(event)}>
                <input onChange={(event)=>this.handleChange(event, 'understanding')} value={this.state.understanding} className="numberInputs" type="number" max="5" min="0" placeholder="1-5"/>
                <button type="submit">NEXT</button>
            </form>
        </div> 
        )
    }
}

const putReduxStateOnProps = ( reduxState ) => ({
    reduxState: reduxState.gatherSurveyInfo
  })

export default connect( putReduxStateOnProps ) (Understanding);