import BannerSlider from "./BannerSlider.js";
import BannerText from "./BannerText.js";
import Button from "./Button.js";
import "./index.css";

function HomeBanner() {
  return (
    <div className="home-banner-container">
      <div className="banner-content">
        <BannerText />
        <div className="banner-buttons">
          <Button className="booking-btn" text="Запис" />
          <Button className="services-btn" text="Послуги" />
        </div>
      </div>
      <BannerSlider />
    </div>
  );
}

export default HomeBanner;
