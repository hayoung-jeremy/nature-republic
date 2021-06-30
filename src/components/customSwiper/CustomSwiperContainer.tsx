// swiper
import SwiperCore, { Navigation, Pagination, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import { SwiperOptions } from "swiper/types";

// custom
import "./customSwiper.scss";

interface Props extends SwiperOptions {
  children?: any;
  data?: any[];
  className?: string;
}

SwiperCore.use([Virtual, Navigation, Pagination]);

const CustomSwiperContainer = ({
  data,
  className,
  spaceBetween,
  slidesPerView,
  pagination,
  navigation,
  virtual,
}: Props) => {
  console.log(data);
  const swiperItems = data?.map((item, index) => {
    return (
      <SwiperSlide key={item.id} virtualIndex={index}>
        <img src={require(item.url)} alt={item.alt} />
      </SwiperSlide>
    );
  });

  return (
    <>
      <Swiper
        className={className}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        virtual={virtual}
        pagination={pagination}
        navigation={navigation}
      >
        {swiperItems}
      </Swiper>
    </>
  );
};

export default CustomSwiperContainer;
