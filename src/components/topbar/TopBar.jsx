import React from "react";
import "./topBar.scss";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

export default function TopBar() {
  return (
    <div className="TopBar">
      <div className="topbarWarpper">
        <div className="topLeft">
          <span className="logo">Logo web site</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNoneIcon />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          
            <img
              src="https://d25d2506sfb94s.cloudfront.net/cumulus_uploads/userprofile/1285/Patrick-cms.JPG"
              alt=""
              className="avatar"
            />
          
        </div>
      </div>
    </div>
  );
}
