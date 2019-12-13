import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
    render(){
        return (
            <>
            </>
        )
    }
}


//if you want just one reducer you can say so
const putReduxStateOnProps = ( reduxState ) => ({
    reduxState
  })

export default connect( putReduxStateOnProps ) (Understanding);