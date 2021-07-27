import React from 'react';
import styled from 'styled-components';

const ResponseBlock = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1024px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 768px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

function Responsive({ children, ...rest }) {
  return <ResponseBlock {...rest}>{children}</ResponseBlock>;
}

export default Responsive;
