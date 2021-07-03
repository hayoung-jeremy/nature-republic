// custom :
import { SectionTemplate } from "components";
import { MainBannerContainer, NewAndBestContainer } from "containers";
import { RecommendedContainer } from "containers";

const HomeContainer = () => {
  return (
    <>
      <MainBannerContainer />
      <NewAndBestContainer />
      <RecommendedContainer />
      <SectionTemplate hasInner h2Content="EVENT"></SectionTemplate>
      <SectionTemplate hasInner h2Content="Best Reviews"></SectionTemplate>
    </>
  );
};

export default HomeContainer;
