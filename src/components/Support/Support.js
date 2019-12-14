import React, { Component } from 'react';
import { connect } from 'react-redux';

// 3rd route - 1-5 how well are you being supported?
// next goes to Comments

class Support extends Component {

    state = {
        support: ''
      }
    
    handleChange = (event)=>{
        console.log('support:', event.target.value);
        this.setState({
        support: event.target.value
    })
    }
    
    handleSubmit = (event)=>{
        event.preventDefault();
        if(this.state.support){this.props.dispatch({ type: 'GATHER_SURVEY_INFO', payload: this.state.support });
        this.props.history.push(`/comments`);}
        else{alert('Tell me if you are supported!')}
    }

    render(){
        return (
        <div>
            <h2>How well are you being supported?</h2>
            {JSON.stringify(this.props.reduxState)}
            <form onSubmit={(event)=>this.handleSubmit(event)}>
                <input onChange={(event)=>this.handleChange(event, 'support')} value={this.state.support} className="numberInputs" type="number" max="5" min="0" placeholder="1-5"/>
                <button type="submit">NEXT</button>
            </form>
        </div> 
        )
    }
}

const putReduxStateOnProps = ( reduxState ) => ({
    reduxState
  })

export default connect( putReduxStateOnProps ) (Support);