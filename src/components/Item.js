import React from "react";
import Button from "./Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Item.css";

const Item = ({
  title,
  desc,
  descLink,
  backgroundImg,
  leftBtnLink,
  leftBtnTxt,
  rightBtnLink,
  rightBtnTxt,
  twoButtons,
  first,
}) => {
  return (
    <div
      className="item"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="item__text">
        <p>{title}</p>
        <div className="item__text">
          <p>{desc}</p>
        </div>
      </div>
      <div className="item__lowerThird">
        <div className="item__buttons">
          <Button imp="primary" text={leftBtnTxt} link={leftBtnLink} />
          {twoButtons && (
            <Button imp="secondary" text={rightBtnTxt} link={rightBtnLink} />
          )}
        </div>
        {first && (
          <div className="item__expand">
            <ExpandMoreIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
