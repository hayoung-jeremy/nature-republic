import React from "react";
import styled from "styled-components";

const StyledSectionTemplate = styled.section`
  & h2.blind {
    position: absolute;
    left: -9999rem;
    width: 1px;
    height: 1px;
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
  & h2.title {
    font-size: 20px;
    font-weight: 500;
  }
  & .inner {
    width: 1200px;
    margin: 0 auto;
  }
`;

interface SectionProps {
  children?: React.ReactNode;
  hasInner?: boolean;
  isH2Blind?: boolean;
  h2Content?: string;
}

const SectionTemplate = ({
  children,
  hasInner,
  isH2Blind,
  h2Content,
  ...rest
}: SectionProps) => {
  return (
    <StyledSectionTemplate>
      {hasInner ? (
        <div className="inner">
          <h2 className={isH2Blind ? "blind" : "title"}>{h2Content}</h2>
          {children}
        </div>
      ) : (
        children
      )}
    </StyledSectionTemplate>
  );
};

export default SectionTemplate;
