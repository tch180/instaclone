import React, {Component} from 'react';
import styled from 'styled-components';
const commentstyle = styled.div`
      font-size: 44px;
      
    }
    `;
    class Comment extends Component {  
    render() {
    const {commentstyle} = this.props;
    console.log(commentstyle);
    return (
      <div>
        <img src={Comment.profile_pic}/>
        <p>
          <strong>{Comment.username}</strong>
          {Comment.text}</p>
      </div>
    );
  }
}

export default Comment;