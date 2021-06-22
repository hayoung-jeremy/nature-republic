import React from "react";

interface Props {
  children?: any;
  footer?: React.ReactNode;
  header?: React.ReactNode;
}

const PageTemplate = ({ children, header, footer }: Props) => {
  return (
    <div className="page-template">
      {header}
      {children}
      {footer}
    </div>
  );
};

export default PageTemplate;
