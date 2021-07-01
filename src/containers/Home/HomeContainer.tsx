// custom :
import { SectionTemplate } from "components";
import { MainBannerContainer, NewAndBestContainer } from "containers";

const HomeContainer = () => {
  return (
    <>
      <MainBannerContainer />
      <NewAndBestContainer />
      <SectionTemplate hasInner h2Content="추천 카테고리"></SectionTemplate>
      <SectionTemplate hasInner h2Content="EVENT"></SectionTemplate>
      <SectionTemplate hasInner h2Content="Best Reviews"></SectionTemplate>
    </>
  );
};

export default HomeContainer;
