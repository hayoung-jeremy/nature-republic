import React from "react";
// swiper :
import SwiperCore, { Navigation, Pagination, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "assets/styles/main.scss";

// uuid
import { v4 as uuid_v4 } from "uuid";

// data :
import productCategory from "db/productCategory.json";

// custom :
import { SectionTemplate } from "components";
import { CardTemplate } from "components";

SwiperCore.use([Virtual, Navigation, Pagination]);

const swiperContents = productCategory.map((item, index) => {
  return (
    <SwiperSlide key={uuid_v4()} virtualIndex={index} id={item.category}>
      <CardTemplate
        productName={item.productName}
        productThumbnailUrl={item.productThumbnailUrl}
        costPrice={item.costPrice}
        discountPrice={item.discountPrice}
        discountRate={item.discountRate}
        isNew={item.isNew}
        isBest={item.isBest}
        isOnSale={item.isOnSale}
      ></CardTemplate>
    </SwiperSlide>
  );
});

const RecommendedContainer = () => {
  return (
    <SectionTemplate hasInner h2Content="추천 카테고리" grayBackground>
      <div className="tabMenu">카테고리 메뉴</div>
      <div className="tabPanel">
        <Swiper
          className="forBoxShadow"
          slidesPerView={4}
          spaceBetween={20}
          virtual
          navigation={{
            prevEl: ".swiper-button-prev.custom3",
            nextEl: ".swiper-button-next.custom3",
          }}
        >
          {swiperContents.filter((item) => item)}
        </Swiper>
        <div className="swiper-button-prev custom3"></div>
        <div className="swiper-button-next custom3"></div>
      </div>
    </SectionTemplate>
  );
};

export default RecommendedContainer;
