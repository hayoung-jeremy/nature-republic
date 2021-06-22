import React from "react";
import { HeaderContainer } from "containers";
import { PageTemplate } from "components";

const Home = () => {
  return (
    <PageTemplate header={<HeaderContainer />}>
      This is Landing-page
    </PageTemplate>
  );
};

export default Home;
