import BannerText from "./BannerText.js";
import Button from "./Button.js";

function HomeBanner() {
  return (
    <div className="home-banner-container">
      <BannerText />
      <div className="banner-buttons">
        <Button className="booking-btn" text="Запис" />
        <Button className="services-btn" text="Послуги" />
      </div>
    </div>
  );
}

export default HomeBanner;
