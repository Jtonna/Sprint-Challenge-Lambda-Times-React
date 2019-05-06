import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderDiv>
      <Date>May 5, 2019</Date>
      <h1>Lambda Times</h1>
      <Temperature>100°</Temperature>
    </HeaderDiv>
  )
}

export default Header;

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fffff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 12rem;
  margin-top: 5rem;
  padding-bottom: 1.5rem;

  @media (min-width: 1280px) {
    width: 1280px;
  }

  h1 {
    font-size: 6rem;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #00000;
  }

  span {
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 0.1rem;
  }
`;

const Date = styled.span`
  margin-left: 2.5rem;
  flex: 1;
`;

const Temperature = styled.span`
  text-align: right;
  margin-right: 2.5rem;
  flex: 1;
`;
