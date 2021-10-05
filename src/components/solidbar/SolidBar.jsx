import "./SolidBar.scss";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import BarChartIcon from '@mui/icons-material/BarChart';

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TimelineIcon from "@mui/icons-material/Timeline";
import { PersonOutline ,AttachMoney,Storefront ,MailOutline,DynamicFeed ,ChatBubbleOutline ,ReportGmailerrorred,FolderShared } from "@mui/icons-material";

function SolidBar() {
  return (
    <div className="solidbar">
      <div className="solidwapper">
        <div className="solidbarMenu">
          <h3 className="solidbarTitle">Dashboard</h3>
          <ul className="solidbarList">
            <li className="solidbarItem active">
              <LineStyleIcon className="solidbarIcons" />
              Home
            </li>
            <li className="solidbarItem">
              <TimelineIcon className="solidbarIcons" />
              Analytics
            </li>
            <li className="solidbarItem">
              <TrendingUpIcon className="solidbarIcons" />
              Sales
            </li>
          </ul>
        </div>
        <div className="solidbarMenu">
          <h3 className="solidbarTitle">Quick Menu</h3>
          <ul className="solidbarList">
            <li className="solidbarItem">
              <PersonOutline className="solidbarIcons" />
              Users
            </li>
            <li className="solidbarItem">
              <Storefront className="solidbarIcons" />
              Products
            </li>
            <li className="solidbarItem">
              <AttachMoney className="solidbarIcons" />
              Transactions
            </li>
            <li className="solidbarItem">
              <BarChartIcon className="solidbarIcons" />
              Rapports
            </li>
          </ul>
        </div>
        <div className="solidbarMenu">
          <h3 className="solidbarTitle">Notifications</h3>
          <ul className="solidbarList">
            <li className="solidbarItem">
              <MailOutline className="solidbarIcons" />
              Mail
            </li>
            <li className="solidbarItem">
              <DynamicFeed className="solidbarIcons" />
              Feedback
            </li>
            <li className="solidbarItem">
              <ChatBubbleOutline className="solidbarIcons" />
              Messages
            </li>
          </ul>
        </div>
        <div className="solidbarMenu">
          <h3 className="solidbarTitle">Staff</h3>
          <ul className="solidbarList">
            <li className="solidbarItem">
              <FolderShared className="solidbarIcons" />
              Manage
            </li>
            <li className="solidbarItem">
              <TimelineIcon className="solidbarIcons" />
              Analytics
            </li>
            <li className="solidbarItem">
              <ReportGmailerrorred className="solidbarIcons" />
              Raports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SolidBar;
