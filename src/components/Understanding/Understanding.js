import React, { Component } from 'react';
import { connect } from 'react-redux';

// 2nd route - 1-5 how well are you understanding the content?
// next goes to Support

class Understanding extends Component {

    goToSupport = ()=>{
        this.props.history.push(`/support`);
    }

    render(){
        return (
        <div>
            <h2>How well are you understanding the content?</h2>
            <select id="select"> 
                <option value="1">1</option> 
                <option value="2">2</option> 
                <option value="3">3</option> 
                <option value="4">4</option> 
                <option value="5">5</option> 
            </select>
            <button onClick={this.goToSupport}>NEXT</button>
        </div> 
        )
    }
}

const putReduxStateOnProps = ( reduxState ) => ({
    reduxState
  })

export default connect( putReduxStateOnProps ) (Understanding);