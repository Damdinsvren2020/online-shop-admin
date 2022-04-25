import React from "react";
import "./topbar.css";

import { mdiBell, mdiLocationExit } from "@mdi/js";
import Icon from "@mdi/react";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            {/* <Icon path={mdiAccount} size={1} /> */}
            <img
              style={{ width: "150px" }}
              src="https://citycomputer.mn/wp-content/uploads/2021/11/city-computer-logo.png"
              alt="zz"
            />
          </span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Icon path={mdiBell} size={1} />
            <span className="topIconBadge">2</span>
          </div>

          <Icon path={mdiLocationExit} size={1} className="topAvatar" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
