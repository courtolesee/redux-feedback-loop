import React, { Component } from 'react';
import { connect } from 'react-redux';

// 4th route - Any comments you want to leave?
// next goes to Review


class Comments extends Component {

    goToReview = ()=>{
        this.props.history.push(`/review`);
    }

    render(){
        return (
            <div>
                <h2>Any comments you want to leave?</h2>
                <input type="text" placeholder="leave comments here"/>
                <button onClick={this.goToReview}>NEXT</button>
            </div>
        )
    }
}

const putReduxStateOnProps = ( reduxState ) => ({
    reduxState
  })

export default connect( putReduxStateOnProps ) (Comments);