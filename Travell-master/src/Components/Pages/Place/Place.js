import React from "react";
import "./Place.css";
import resData from "../Hotels/resData.json";
import Places from "../../Images/PlacesSearch.png";
import SearchBar from "../Hotels/SearchBar";
import Swat from "../../Images/swat-valley 1.png";
import Hunza from "../../Images/Hunza.png"
import { FaStar } from "react-icons/fa";

const placeData = [
  {
    id: 1,
    name: "SWAT Valley",
    image: Swat,
    numOfRatings: 25,
    rating: 3,
    paragraph:
      "Swat is a stunning valley and a famous tourist destination located in the upper north region of the Khyber Pakhtunkhwa Province of Pakistan. Swat district is situated at a distance of 153 Miles from the capital city of Islamabad at an approximate travel time of a little over 3 hours via the M1 and M16 Swat Motorway.",
  },
  {
    id: 2,
    name: "Hunza Valley",
    image: Hunza,
    numOfRatings: 50,
    rating: 4,
    paragraph:
      "For many centuries the people of Hunza Valley in Northern Pakistan have been living in the shadows of the mighty Karakoram Mountains. It was not until the Karakoram Highway opened in the late 1970s that access to the various valleys that make up the greater Hunza region was even possible by car.",
  },
];
const Place = (props) => {
  return (
    <section>
      <div className="image-top">
        <img
          src={Places}
          alt="hi"
          style={{ width: "100vw", height: "520px" }}
        />
        <div>
          <SearchBar
            placeholder="Enter the Name of Places you want to Visit.."
            data={resData}
          />
        </div>
      </div>
      <div className="text-center position-relative container">
        <h4 className="headin">Popular Places</h4>
      </div>
      <div>
        {placeData.map((place) => (
          <div
            className="container-fluid top-Container pt-3 "
            style={{ height: "300px" }}
          >
            <div className="row row-border p-3" style={{ height: "280px" }}>
              <div
                className="col-md-4 d-flex justify-content-start"
                style={{ height: "240px" }}
                key={place.id}
              >
                <img
                  src={place.image}
                  alt="swat valley"
                  className="img-fluid for-image"
                  style={{ height: "240px", width: "500px" }}
                />
              </div>
              <div className="col-md-8 " style={{ height: "240px" }}>
                <div className="row" style={{ height: "60px" }}>
                  <div className="col-md-12 " style={{ height: "50px" }}>
                    <h2 className="h1-heading">{place.name}</h2>
                  </div>
                </div>
                <div className="row " style={{ height: "60px" }}>
                  <div className="col-md-6 " style={{ height: "40px" }}>
                    <div className="displayStack__2 flex">
                      <div className="productRating">
                        {[...Array(5)].map((star, index) => (
                          <FaStar
                            className={
                              index < place.rating ? "filled" : "hollow"
                            }
                            id={index + 1}
                            key={index}
                            style={{ fontSize: "24px" }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6  flex justify-end reviews"
                    style={{ height: "40px" }}
                  >
                    {place.numOfRatings} reviews
                  </div>
                </div>
                <div className="row" style={{ height: "150px" }}>
                  <div
                    className="col-md-12 para-graph"
                    style={{ height: "130px" }}
                  >
                    {place.paragraph}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Place;
