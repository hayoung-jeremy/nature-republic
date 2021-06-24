import React from "react";

// custom :
import { SectionTemplate } from "components";
import { SwiperSlideTemplate } from "components";
import bannerImages from "db/bannerImages.json";

const Home = () => {
  return (
    <>
      <SectionTemplate hasInner h2Content="main banner">
        <SwiperSlideTemplate
          slidesPerView={1}
          data={bannerImages}
          effect="slide"
          navigation
          pagination={{ clickable: true }}
          virtual
        />
      </SectionTemplate>
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
