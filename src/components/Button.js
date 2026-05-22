import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AnimatedButton = styled.button`
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Button = ({ children }) => {
  return <AnimatedButton>{children}</AnimatedButton>;
};

export default Button;