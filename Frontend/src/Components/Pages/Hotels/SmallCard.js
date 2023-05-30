import React from "react";
import "./SmallCard.css";
import StarIcon from "@mui/icons-material/Star";
const SmallCard = (props) => {
  return (
    <div className="card1">
      <div className="image-container1">
        <img className="card-image1" src={props.image} alt="Restaurant" />
      </div>
      <div className="card-body1">
        <h2 className="rest-name1">{props.name}</h2>
        <div className="rating1">
          <div className="rest-rating1">
            <span>
              <StarIcon sx={{ fontSize: 30 }} />
            </span>
            <span>
              <StarIcon sx={{ fontSize: 30 }} />
            </span>
            <span>
              <StarIcon sx={{ fontSize: 30 }} />
            </span>
            <span>
              <StarIcon sx={{ fontSize: 30 }} />
            </span>
            <span>
              {props.rate}
            </span>
          </div>
        </div>
        <div className="reviewss1">
          <span style={{}}>{props.review}</span>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
