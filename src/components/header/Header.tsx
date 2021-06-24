import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: relative;
  & h1 {
    font-size: 32px;
    font-weight: 200;
  }
  & .inner {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="inner">
        <h1>NATURE REPUBLIC</h1>
      </div>
      <div className="inner">nav here</div>
    </StyledHeader>
  );
};

export default Header;
