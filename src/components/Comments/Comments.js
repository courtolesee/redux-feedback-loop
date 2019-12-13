import React, { Component } from 'react';
import { connect } from 'react-redux';

// 4th route - Any comments you want to leave?
// next goes to Review


class Comments extends Component {
    render(){
        return (
            <div>
                <h2>Any comments you want to leave?</h2>
                <input type="text" placeholder="leave comments here"/>
                <button>NEXT</button>
            </div>
        )
    }
}


//if you want just one reducer you can say so
const putReduxStateOnProps = ( reduxState ) => ({
    reduxState
  })

export default connect( putReduxStateOnProps ) (Comments);