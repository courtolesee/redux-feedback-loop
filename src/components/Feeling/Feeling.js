import React, { Component } from 'react';
import { connect } from 'react-redux';

// 1st route - 1-5 how are you feeling today?
// page starts here
// next goes to Understanding

class Feeling extends Component {
    render(){
        return (
        <div>
            <h2>How are you feeling today?</h2>
            <select id="select"> 
                <option value="1">1</option> 
                <option value="2">2</option> 
                <option value="3">3</option> 
                <option value="4">4</option> 
                <option value="5">5</option> 
            </select>
            <button>NEXT</button>
        </div> 
        )
    }
}


//if you want just one reducer you can say so
const putReduxStateOnProps = ( reduxState ) => ({
    reduxState
  })

export default connect( putReduxStateOnProps ) (Feeling);