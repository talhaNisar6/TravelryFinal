import React from 'react';
import './RestCard.css';
import yum from '../../Images/chinese.png';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';



const RestCard=(props)=>{
  return (
    <div className="restaurant-card">
        <a href={props.url}>
      <img src={props.image} alt="Restaurant Image" className="restaurant-chinese" />
      <h2 className="restaurant-name">{props.name}</h2>
      </a>
      <div className="restaurant-rating">
        <span><StarIcon sx={{ fontSize: 35 }}/></span>
        <span><StarIcon sx={{ fontSize: 35 }}/></span>
        <span><StarIcon sx={{ fontSize: 35 }}/></span>
        <span><StarIcon sx={{ fontSize: 35 }}/></span>
        <span><StarBorderIcon sx={{ fontSize: 35 }}/></span>
        <span className="rating-number">{props.reviews}</span>
      </div>
      <p className="restaurant-address">{props.address}</p>
    </div>
  );
}

export default RestCard;
