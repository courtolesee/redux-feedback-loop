import React, { Component } from 'react';
import { connect } from 'react-redux';

// 4th route - Any comments you want to leave?
// next goes to Review

class Comments extends Component {

    state = {
        comment: ''
      }
    
    handleChange = (event)=>{
        console.log('comment:', event.target.value);
        this.setState({
        comment: event.target.value
    })
    }
    
    handleSubmit = (event)=>{
        event.preventDefault();
        this.props.dispatch({ type: 'GATHER_SURVEY_INFO', payload: this.state.comment });
        this.props.history.push(`/review`);
    }

    render(){
        return (
            <div>
                <h2>Any comments you want to leave?</h2>
                <form onSubmit={(event)=>this.handleSubmit(event)}>
                    <input onChange={(event)=>this.handleChange(event, 'comment')} value={this.state.comment} className="commentInputs" type="text" placeholder="leave comments here"/>
                    <button type="submit">NEXT</button>
                </form>
                <br/>
            </div>
        )
    }
}

const putReduxStateOnProps = ( reduxState ) => ({
    reduxState
  })

export default connect( putReduxStateOnProps ) (Comments);