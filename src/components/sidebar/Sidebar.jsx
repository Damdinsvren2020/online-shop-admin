import "./sidebar.css";

import {
  mdiFolderImage,
  mdiPoll,
  mdiAccount,
  mdiStore,
  mdiViewDashboard,
} from "@mdi/js";
import Icon from "@mdi/react";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <Icon
                  path={mdiViewDashboard}
                  size={1}
                  className="sidebarIcon"
                />
                Хянах самбар
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <Icon path={mdiAccount} size={1} className="sidebarIcon" />
                Хэрэглэгч
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Icon path={mdiStore} size={1} className="sidebarIcon" />
                Бүтээгдхүүн
              </li>
            </Link>
            <li className="sidebarListItem">
              <Icon path={mdiPoll} size={1} className="sidebarIcon" />
              Тайлан
            </li>
            <Link to="/Banner" className="link">
              <li className="sidebarListItem">
                <Icon path={mdiFolderImage} size={1} className="sidebarIcon" />
                Баннер
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
