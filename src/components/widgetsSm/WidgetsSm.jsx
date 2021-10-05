import { Visibility } from "@mui/icons-material";
import "./WidgetsSm.scss";

export default function WidgetsSm() {
  return (
    <div className="WidgetSm">
      <span className="WidgetSmTitle">New Join Members</span>

      <ul className="WidgetSmList">
        <li className="WidgestSmItem">
          <img
            src="https://jooinn.com/images/girl-162.jpg"
            alt=""
            className="WidgestSmImg"
          />
          <div className="WidgestSmUser">
            <span className="WidgestSmUserName">Mawadda mokded</span>
            <span className="WidgestSmUserTitle">Software Engineer</span>
          </div>
          <button className="WidgestSmButton">
            <Visibility className="WidgestSmIcon" />
            Display
          </button>
        </li>
      </ul>
      <ul className="WidgetSmList">
        <li className="WidgestSmItem">
          <img
            src="https://jooinn.com/images/girl-162.jpg"
            alt=""
            className="WidgestSmImg"
          />
          <div className="WidgestSmUser">
            <span className="WidgestSmUserName">Mawadda mokded</span>
            <span className="WidgestSmUserTitle">Software Engineer</span>
          </div>
          <button className="WidgestSmButton">
            <Visibility className="WidgestSmIcon" />
            Display
          </button>
        </li>
      </ul>
      <ul className="WidgetSmList">
        <li className="WidgestSmItem">
          <img
            src="https://jooinn.com/images/girl-162.jpg"
            alt=""
            className="WidgestSmImg"
          />
          <div className="WidgestSmUser">
            <span className="WidgestSmUserName">Mawadda mokded</span>
            <span className="WidgestSmUserTitle">Software Engineer</span>
          </div>
          <button className="WidgestSmButton">
            <Visibility className="WidgestSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
