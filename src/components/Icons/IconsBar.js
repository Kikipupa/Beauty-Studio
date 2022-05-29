import instagram from "../../img/svg/instagram.svg";
import telegram from "../../img/svg/telegram.svg";
import twitter from "../../img/svg/twitter.svg";
import youtube from "../../img/svg/youtube.svg";
import { instagramLink } from "../Footer/mockData";
import Icon from "./Icon";
import "./index.css";

function IconsBar() {
  let handleOnIconeClick = () => {
    window.history.push({}, "", instagramLink);
  };
  return (
    <div className="footer-icons-container">
      <Icon
        src={instagram}
        classNameContainer="instagram-container"
        onIconClick={handleOnIconeClick}
      />
      <Icon
        src={telegram}
        classNameContainer="telegram-container"
        onIconClick={handleOnIconeClick}
      />
      <Icon
        src={twitter}
        classNameContainer="twitter-container"
        onIconClick={handleOnIconeClick}
      />
      <Icon
        src={youtube}
        classNameContainer="youtube-container"
        onIconClick={handleOnIconeClick}
      />
      <div className="footer-icons-text">©Beauty Studio</div>
    </div>
  );
}

export default IconsBar;
