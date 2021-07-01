// swiper :
import SwiperCore, { Navigation, Pagination, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "assets/styles/main.scss";

// data :
import productInfos from "db/newAndBest.json";

// custom :
import { SectionTemplate } from "components";
import { CardTemplate } from "components";

SwiperCore.use([Virtual, Navigation, Pagination]);

const NewAndBestContainer = () => {
  return (
    <SectionTemplate hasInner h2Content="신제품 & 베스트셀러">
      <Swiper
        className="forBoxShadow"
        slidesPerView={4}
        spaceBetween={20}
        virtual
        navigation={{
          prevEl: ".swiper-button-prev.custom2",
          nextEl: ".swiper-button-next.custom2",
        }}
        grabCursor
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
      <div className="swiper-button-prev custom2"></div>
      <div className="swiper-button-next custom2"></div>
    </SectionTemplate>
  );
};

export default NewAndBestContainer;
