import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import BannerTable from "../../views/Tables/Banner/Banner";

import { mdiPlus } from "@mdi/js";
const Banner = () => {
  return (
    <div className="Banner">
      <div className="BannerItem">
        <div className="Banner">
          <div className="BannerTitleContainer">
            <h1 className="BannerTitle">Баннер</h1>
            <Link to="/NewBanner">
              <button className="BannerAddButton">
                <Icon path={mdiPlus} size={1} />
                <p>Нэмэх</p>
              </button>
            </Link>
          </div>
        </div>
        <BannerTable />
      </div>
    </div>
  );
};

export default Banner;
