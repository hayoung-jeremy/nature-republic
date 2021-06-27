import React from "react";
import styled, { css } from "styled-components";

interface SectionProps {
  children?: React.ReactNode;
  hasInner?: boolean;
  isH2Blind?: boolean;
  h2Content?: string;
  grayBackground?: boolean;
}

const StyledSectionTemplate = styled.section<SectionProps>`
  // section
  &:not(:first-of-type) {
    margin-top: 60px;
  }
  ${(props) =>
    props.grayBackground
      ? css`
          background-color: #f1f1f1;
        `
      : null}
  // inner
  & .inner {
    width: 1200px;
    margin: 0 auto;
  }
  // h2
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
    margin-bottom: 20px;
  }
`;

const SectionTemplate = ({
  children,
  hasInner,
  isH2Blind,
  h2Content,
  grayBackground,
  ...rest
}: SectionProps) => {
  return (
    <StyledSectionTemplate grayBackground={grayBackground}>
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
