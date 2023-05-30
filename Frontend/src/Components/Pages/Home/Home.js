import mountainsgreen from "../../Images/mountainsgreen.jpeg";
import chinaborder from "../../Images/chinaborder.jpeg";
import faisalmosque from "../../Images/faisalmosque.jpeg";
import booking from "../../Images/Booking 1.png";
import daewoo from "../../Images/Daewoo 1.png";
import airbnb from "../../Images/Airbnb 1.png";
import roadmaster from "../../Images/Road Master 1.png";
import { BsChevronDown } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Home.css";
import Explore from "./Explore";
import MainCard from "./MainCard";
import AboutUs from "./AboutUs";
//import Footer from "./Footer.js";
//import { Button } from 'react-bootstrap';
//import { useState } from 'react';
//import { Container ,LeftColumn,RightColumn} from '../Header/Header.style';

const Home = () => {
  return (
    <section>
      <div className="frontPage p-0 m-0">
        <div className="textpart">
          <h1>Travel to any </h1>
          <h1>Corner of</h1>
          <h1>Pakistan</h1>
          <p>
            A team of devoted and experienced tourism professionals will{" "}
            <br></br> provide you with the best advice and tips.
          </p>
          <div className="ExploreMore">
            <ul>
              <li>
                <div className="ExploreMoreChilds">
                  Location
                  <button>
                    <BsChevronDown />
                  </button>
                </div>
              </li>
              <li>
                <div className="ExploreMoreChilds">Date</div>
              </li>
              <li>
                <div className="ExploreMoreChilds">People</div>
              </li>
              <li>
                <div className="ExploreMoreLastChild">
                  <button>Explore More</button>
                </div>
              </li>
            </ul>
          </div>
          <div className="popularSearches">
            <span>
              <b>Popular Search:</b>{" "}
            </span>
            <span className="t">
              Lahore, Murree,<span style={{ color: "#FF844B" }}> Kaghan</span>,
              Naran, Kashmir, Malam Jabba
            </span>
          </div>
        </div>
        <div className="imagespart">
          <div className="maountainsGreen">
            <img src={mountainsgreen} alt="mountainsGreen" />
          </div>
          <div className="chinaborder">
            <img src={chinaborder} alt="chinaborder" />
          </div>
          <div className="faisalmosque">
            {" "}
            <img src={faisalmosque} alt="faisalmosque" />{" "}
          </div>
        </div>
        <div className="container i-container">
          <div className="row">
            <div className="col d-flex align-items-center">
              <img
                src={airbnb}
                alt="bus"
                style={{ width: "37px", height: "40px" }}
              ></img>
              <p className="ml-3 para">airbnb</p>
            </div>
            <div className="col d-flex align-items-center">
              <img
                src={daewoo}
                alt="bus"
                style={{ width: "35px", height: "27px" }}
              ></img>
              <p className="ml-3 para">Daewoo</p>
            </div>
            <div className="col d-flex align-items-center">
              <img
                src={booking}
                alt="bus"
                style={{ width: "182px", height: "30px" }}
              ></img>
            </div>
            <div className="col d-flex align-items-center">
              <img
                src={roadmaster}
                alt="bus"
                style={{ width: "35px", height: "27px" }}
              ></img>
              <p className="ml-3 para">Roadmaster</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Explore />
      </div>
      <div>
        <MainCard />
      </div>
      <div>
        <AboutUs />
      </div>
    </section>
  );
};

export default Home;
