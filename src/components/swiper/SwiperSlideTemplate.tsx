import SwiperCore, { Navigation, Pagination, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Virtual, Navigation, Pagination]);

interface Props {
  style?: object;
  slidesPerView?: number;
  spaceBetween?: number;
  pagination?: object;
  navigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  data?: any;
  effect?: "slide" | "fade" | "cube" | "coverflow" | "flip";
  virtual?: boolean;
}

const SwiperSlideTemplate = ({
  style,
  slidesPerView,
  spaceBetween,
  pagination,
  navigation,
  loop,
  autoplay,
  data,
  effect,
  virtual,
  ...rest
}: Props) => {
  console.log(data);
  const swiperContents = data.map((item: any, index: number) => {
    return (
      <SwiperSlide key={item.id} virtualIndex={index} className="swiper-slide">
        <img src={item.url} alt={item.alt} />
      </SwiperSlide>
    );
  });
  console.log(swiperContents);
  return (
    <Swiper
      style={style}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      pagination={pagination}
      navigation={navigation}
      loop={loop}
      autoplay={autoplay}
      effect={effect}
      virtual={virtual}
      {...rest}
    >
      {swiperContents}
    </Swiper>
  );
};

export default SwiperSlideTemplate;
