import ead from "../../Images/hotelT.png";
import resData from "./resData.json";
import "./Hotels.css";
import SearchBar from "./SearchBar";
import RestCard from "./RestCard";
import andaz from "../../Images/andaazrestaurant.png";
import cafe from "../../Images/cafeaylanto.png";
import spice from "../../Images/spicebazaar.png";
import yum from "../../Images/chinese.png";
//import { margin } from "@mui/system";
import SmallCard from "./SmallCard";
import hh1 from "../../Images/h1.png";
import h2 from "../../Images/h2.png";
import h3 from "../../Images/h3.png";
import h4 from "../../Images/h4.png";
const Hotels = () => {
  return (
    <div>
      <div className="image-top">
        <img src={ead} alt="hi" style={{ width: "100vw" }} />
        <div className="onImage">Find perfect hotels for you</div>
        <div>
          <SearchBar
            placeholder="Enter the Name of restaurant.."
            data={resData}
          />
        </div>
      </div>

      <div className="cardDiv">
        <div className="hed">
          <p>Top Choices for : Fine Dining</p>
        </div>
        <div className="restCardContainer">
          <RestCard
            image={yum}
            name={"Yum! Chinese and Thai Restaurant"}
            reviews={"270 reviews"}
            address={"Islamabad – St No. 16, F-7/2, Rana Market"}
            url={"http://yumpakistan.pk/"}
          />
          <RestCard
            url={"http://www.andaazrestaurant.com/"}
            image={andaz}
            name={"Andaaz Restaurant"}
            reviews={"170 reviews"}
            address={"2189 A Fort Road, Lahore"}
          />
        </div>
        <div className="restCardContainer">
          <RestCard
            url={"https://www.cafeaylanto.org/"}
            image={cafe}
            name={"Cafe Aylanto"}
            reviews={"112 reviews"}
            address={"12-C-1 MM Alam Rd Gulberg, Lahore"}
          />
          <RestCard
            url={"http://www.spicebazaar.pk/"}
            image={spice}
            name={"Spice Bazaar"}
            reviews={"98 reviews"}
            address={"T-01, Off MM Alam Rd, Gulberg, Lahore"}
          />
        </div>
        <div className="smallCon">
          <div className="he1d1">
            <p>Popular hotels for you :</p>
          </div>
          <div style={{ textAlign: "center", marginTop: "-60px" }}>
            <p className="hed1">5 Star Hotels</p>
          </div>
          <div className="restCardContainers">
            <SmallCard
              url={"http://www.spicebazaar.pk/"}
              image={hh1}
              name={"Pearl Continental Hotel Karachi"}
              review={"98 reviews"}
            />
            <SmallCard
              url={"http://www.spicebazaar.pk/"}
              image={h2}
              name={"Serena Hotel Islamabad"}
              review={"108 reviews"}
            />
            <SmallCard
              url={"http://www.spicebazaar.pk/"}
              image={h3}
              name={"Moven Pick Hotel Karachi"}
              review={"58 reviews"}
            />
            <SmallCard
              url={"http://www.spicebazaar.pk/"}
              image={h4}
              name={"Pearl Continental Hotel Lahore"}
              review={"81 reviews"}
            />
          </div>
        </div>
        <div className="smallCon">
          <div style={{ textAlign: "center", marginTop: "-60px" }}>
            <p className="hed2">4 Star Hotels</p>
          </div>
          <div className="restCardContainers">
            <SmallCard
              url={"http://www.spicebazaar.pk/"}
              image={hh1}
              name={"4 Points By Sheraton Lahore"}
              review={"105 reviews"}
            />
            <SmallCard
              url={"http://www.spicebazaar.pk/"}
              image={h2}
              name={"The Nishat Hotel Lahore"}
              review={"67 reviews"}
            />
            <SmallCard
              url={"http://www.spicebazaar.pk/"}
              image={h3}
              name={"Avari Towers Karachi"}
              review={"158 reviews"}
            />
            <SmallCard
              url={"http://www.spicebazaar.pk/"}
              image={h4}
              name={"Avari Hotel Lahore"}
              review={"81 reviews"}
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hotels;
