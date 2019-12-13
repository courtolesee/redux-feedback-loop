import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
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

export default connect( putReduxStateOnProps ) (Comments);