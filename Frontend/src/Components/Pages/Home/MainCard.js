import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MainCard.css";
import Products from "./Product";
import contents from "./Content";

const MainCard = () => {
  return (
    <section>
      <div className="container top">
        <div className="row">
          <div className="h1">
            <h1>Top Destinations</h1>
          </div>
          <div className="h2">
            <h1>Explore Top Destinations</h1>
          </div>
          <br />
          <p className="h3">Spend your Weekend at Lahore</p>
        </div>
      </div>
      <div className="slider-wrapper container">
        <div className="row up">
        <Slider
        className="carousel-container"
          infinite={true}
          slidesToShow={4}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3000}
        >
          {contents.map((contents) => (
            <div>
            <Products
              key={contents.id}
              image={contents.image}
              name={contents.name}
              paraname={contents.paraname}
              rating={contents.rating}
              numOfRatings={contents.numOfRatings}
            />
            </div>
          ))}
        </Slider>
      </div>
      </div>
    </section>
  );
};
export default MainCard;
