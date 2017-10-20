import React, { Component } from 'react';
import Comment from './Comment';
import { FaHeartO, FaCommentO } from 'react-icons/lib/fa'
import styled from 'styled-components';


const PostWrapper = styled.div`
text-align: Center;
border:1px solid #e6e6e6;
display: flex;
justify-content: space-around;
background-color: #fff;
width: 95vw;
margin: 20px auto;
border-radius: 3px;
`
const PostImage = styled.div`
img{
  max-width: 600px;
  margin: 0 auto;
}
`;

const UserPost = styled.div`
display:flex;
justify-content: flex-start;
align-items:center;
padding: 24px;
img{
  height: 40px;
  width: 40px;
  border-radius: 100%;
}
span{
  padding-left: 5px;
  font-weight: bold;
}
`;


class Post extends Component{

  render(){
    const { post } = this.props;
    return(
    
    <PostWrapper>
      
        
        <UserPost>
          <img src={post.user.profile_pic} alt={post.user.username} />
          <p>{post.user.username}</p>
        </UserPost>
        <PostImage>
          <img src={post.image.url} />
          <p>{post.caption}</p>
        </PostImage>
        <div>
          <FaHeartO />
          <FaCommentO />
        </div>
        <p>{post.likes.length} likes</p>
        {post.comments.map((comment,i) => <Comment key={i} comment={comment}/>)}


        </PostWrapper>     

      
    )
  }
}

export default Post;