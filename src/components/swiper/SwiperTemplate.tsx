import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Virtual } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Virtual, Navigation, Pagination]);

interface Props {
  slidesPerView?: number;
  spaceBetween?: number;
  pagination?: object;
  navigation?: boolean;
  loop?: boolean;
  virtual?: boolean;
  data?: any[] | undefined;
}

const SwiperTemplate = ({
  slidesPerView,
  spaceBetween,
  pagination,
  navigation,
  loop,
  virtual,
  data,
}: Props) => {
  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        pagination={pagination}
        navigation={navigation}
        loop={loop}
        virtual={virtual}
      >
        {data?.map((item, index) => {
          return (
            <SwiperSlide key={item.id} virtualIndex={index}>
              <img src={item.url} alt={item.alt} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SwiperTemplate;
