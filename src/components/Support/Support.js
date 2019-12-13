import React, { Component } from 'react';
import { connect } from 'react-redux';

// 3rd route - 1-5 how well are you being supported?
// next goes to Comments

class Support extends Component {

    goToComments = ()=>{
        this.props.history.push(`/comments`);
    }

    render(){
        return (
        <div>
            <h2>How well are you being supported?</h2>
            <select id="select"> 
                <option value="1">1</option> 
                <option value="2">2</option> 
                <option value="3">3</option> 
                <option value="4">4</option> 
                <option value="5">5</option> 
            </select>
            <button onClick={this.goToComments}>NEXT</button>
        </div> 
        )
    }
}

const putReduxStateOnProps = ( reduxState ) => ({
    reduxState
  })

export default connect( putReduxStateOnProps ) (Support);