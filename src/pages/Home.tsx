import React from "react";

import { PageTemplate } from "components";
import { HeaderContainer } from "containers";
import { HomeContainer } from "containers";

const Home = () => {
  return (
    <PageTemplate header={<HeaderContainer />}>
      <HomeContainer />
    </PageTemplate>
  );
};

export default Home;
