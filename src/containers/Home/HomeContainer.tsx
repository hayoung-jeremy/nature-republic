// swiper :
import SwiperCore, { Navigation, Pagination, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

// custom :
import bannerImages from "db/bannerImages.json";
import { SectionTemplate } from "components";

SwiperCore.use([Virtual, Navigation, Pagination]);

const HomeContainer = () => {
  return (
    <>
      <SectionTemplate hasInner h2Content="main banner" isH2Blind>
        <Swiper
          slidesPerView={1}
          virtual
          pagination={{ clickable: true }}
          navigation
        >
          {bannerImages.map((item, index) => {
            return (
              <SwiperSlide key={item.id} virtualIndex={index}>
                <img src={item.url} alt={item.alt} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SectionTemplate>
      <SectionTemplate
        hasInner
        h2Content="신제품 & 베스트셀러"
        grayBackground
      ></SectionTemplate>
      <SectionTemplate hasInner h2Content="추천 카테고리"></SectionTemplate>
      <SectionTemplate hasInner h2Content="EVENT"></SectionTemplate>
      <SectionTemplate hasInner h2Content="Best Reviews"></SectionTemplate>
    </>
  );
};

export default HomeContainer;
