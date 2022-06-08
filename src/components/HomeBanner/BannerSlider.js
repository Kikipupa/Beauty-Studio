import SliderItem from "./SliderItem";
import studio from "../../img/banner/studio.jpeg";
import studio2 from "../../img/banner/studio2.jpeg";
import studio3 from "../../img/banner/studio3.jpeg";
import studio4 from "../../img/banner/studio4.jpeg";
import studio5 from "../../img/banner/studio5.jpeg";

function BannerSlider() {
  return (
    <div className="wrapper">
      <div className="slider-container">
        <SliderItem studioNumber="studio1" src={studio} alt="studio" />
        <SliderItem studioNumber="studio2" src={studio2} alt="studio2" />
        <SliderItem studioNumber="studio3" src={studio3} alt="studio3" />
        <SliderItem studioNumber="studio4" src={studio4} alt="studio4" />
        <SliderItem studioNumber="studio5" src={studio5} alt="studio5" />
      </div>
    </div>
  );
}

export default BannerSlider;
