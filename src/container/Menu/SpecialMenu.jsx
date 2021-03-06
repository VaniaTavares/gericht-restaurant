import React from "react";
import { SubHeading, MenuItem } from "../../components";
import { images, wines, cocktails } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your Palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu-menu_items">
          {wines.map((beverage, index) => (
            <MenuItem
              key={index + beverage.title}
              title={beverage.title}
              price={beverage.price}
              tags={beverage.tags}
            />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="Menu display" />
      </div>
      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu-menu_items">
          {cocktails.map((beverage, index) => (
            <MenuItem
              key={index + beverage.title}
              price={beverage.price}
              title={beverage.title}
              tags={beverage.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: "4vh" }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
