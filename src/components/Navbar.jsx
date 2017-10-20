import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa';
import styled from 'styled-components';

const Wrapper = styled.div`
background-color: teal;
display: flex;
justify-content: space-between;
height: 25%;
align-items: center;
padding: 20px 5vw;
border-bottom: 1px solid rgba(0,0,0,.0975);
width: 90vw;

p {
  display:flex;
  font-size: 1.45rem;
  margin: 0;
`;

const SearchBar = styled.div`
background: #fafafa;
border:3px solid black;
color: #999;
svg{
  margin-bottom: 5px;
}
input{
  border: none;
  font-weight: 300;
  background: transparent;
  text-align: center;
}
`;
const iconsContainer = styled.div`
width: 25%;
display: flex;
justify-content: space-around;

`;




class Navbar extends Component{
  render(){
    return (
      <Wrapper>
        <h3><FaInstagram /> | Instaclone</h3> 
        
        <SearchBar>
        <FaSearch/><input type="text" placeholder="Search"/>
       </SearchBar>
        <iconsContainer>
          <FaCompass />
          <FaHeartO />
          <FaUser />
        </iconsContainer>
     </Wrapper>
    );
  }
}

export default Navbar