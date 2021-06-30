// swiper :
import SwiperCore, { Navigation, Pagination, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "assets/styles/main.scss";

// data :
import bannerImages from "db/bannerImages.json";
import productInfos from "db/product.json";

// custom :
import { SectionTemplate } from "components";
import { CardTemplate } from "components";
import { CustomSwiperContainer } from "components";

SwiperCore.use([Virtual, Navigation, Pagination]);

const HomeContainer = () => {
  return (
    <>
      <SectionTemplate hasInner h2Content="main banner" isH2Blind>
        <CustomSwiperContainer
          data={bannerImages}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
        ></CustomSwiperContainer>
      </SectionTemplate>
      <SectionTemplate hasInner h2Content="신제품 & 베스트셀러">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          virtual
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="forBoxShadow"
        >
          {productInfos.map((item, index) => {
            return (
              <SwiperSlide key={item.id} virtualIndex={index}>
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
          })}
        </Swiper>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </SectionTemplate>
      <SectionTemplate hasInner h2Content="추천 카테고리"></SectionTemplate>
      <SectionTemplate hasInner h2Content="EVENT"></SectionTemplate>
      <SectionTemplate hasInner h2Content="Best Reviews"></SectionTemplate>
    </>
  );
};

export default HomeContainer;
