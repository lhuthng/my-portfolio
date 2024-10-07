import React from 'react';
import styled from 'styled-components';
import { squiggle } from '../common';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
  padding-bottom: 0;
  position: relative;
  font-family: Omori2;
  font-size: 3rem;
  color: white;
  text-align: center;
  div {
    height: 100%;
    background-color: black;
    border-radius: 6rem;
    padding: 1rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    filter: drop-shadow(0 0 5rem white);
  }
  span {
    filter: drop-shadow(0 0 0.5rem white);
  }
  b {
    animation: ${squiggle} 0.5s linear infinite;
  }
`;

const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <div >
                <span>Copyright 2024. Made by <b><i>Huu Thang</i> Le</b></span>
            </div>
        </StyledFooter>
    )
};

export default Footer;