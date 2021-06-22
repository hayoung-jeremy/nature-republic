import React from "react";
import { SectionTemplate } from "components";

const Home = () => {
  return (
    <>
      <SectionTemplate hasInner h2Content="main banner"></SectionTemplate>
      <SectionTemplate
        hasInner
        h2Content="신제품 & 베스트셀러"
      ></SectionTemplate>
      <SectionTemplate hasInner h2Content="추천 카테고리"></SectionTemplate>
      <SectionTemplate hasInner h2Content="EVENT"></SectionTemplate>
      <SectionTemplate hasInner h2Content="Best Reviews"></SectionTemplate>
    </>
  );
};

export default Home;
