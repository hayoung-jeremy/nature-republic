// swiper :
import SwiperCore, { Navigation, Pagination, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "assets/styles/main.scss";

// data :
import bannerImages from "db/bannerImages.json";

// custom :
import { SectionTemplate } from "components";

SwiperCore.use([Virtual, Navigation, Pagination]);

const swiperContents = bannerImages.map((item, index) => {
  return (
    <SwiperSlide key={item.id} virtualIndex={index}>
      <img src={item.url} alt={item.alt} />
    </SwiperSlide>
  );
});

const MainBannerContainer = () => {
  return (
    <SectionTemplate hasInner h2Content="main banner" isH2Blind>
      <Swiper
        className="round"
        virtual
        navigation={{
          prevEl: ".swiper-button-prev.custom",
          nextEl: ".swiper-button-next.custom",
        }}
        pagination
      >
        {swiperContents}
      </Swiper>
      <div className="swiper-button-prev custom"></div>
      <div className="swiper-button-next custom"></div>
    </SectionTemplate>
  );
};

export default MainBannerContainer;
