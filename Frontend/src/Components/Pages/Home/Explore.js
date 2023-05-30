import React from "react";
import scenery from '../../Images/scenery.jpg'
import "./Explore.css";
const Explore = () => {
  return (
    <section className="container top-container">
      <div className="row">
        <div className="col">
          <div>
            <h1 className="top-heading">
              Explore Wonderfull
              <br />
              Experience
            </h1>
          </div>
          <div>
            <h1 className="second-heading">
              SKARDU - <span className="line-2">Gilgit Baltistan</span>
            </h1>
          </div>
          <div className="t4 pt-3">
            <p>
              Far in Northern Pakistan, lies the Majestic Skardu Valley
              surrounded by mighty Karakorum, Himalaya, and Hindu Kush mountain
              ranges. Skardu, famous for climbing, mountaineering all around the
              world. Along with this, Skardu host the second Highest mountain of
              World and Pakistan Highest mountain, K2 (8,611 m). Moreover, the
              landscape, culture, traditions, and hospitality of locals are
              catching millions of tourists from all over the year. So In
              conclusion, this time we have some of the best places to visit
              Skardu valley of Pakistan.{" "}
              <span className="span">
                <br />
                Shangrilla (Upper Kachura) Lake, Shigar Valley, Khaplu Valley,
                Basho Valley, Deosai National Park .....{" "}
                <button className="bg-orange-500 text-white rounded-3xl px-4 py-2 text-sm font-medium focus:outline-none hover:bg-orange-600">
                  see more
                </button>
              </span>
            </p>
          </div>
        </div>
        <div className="col">
          <div className="right-heading">
            <p>Explore our Blogs and get all the Information you need to go to your
            Dream Places Under one Platform</p>
          </div>
          <div><img className="scene" src={scenery} alt="Logoimage" /></div>
        </div>
      </div>
    </section>
  );
};
export default Explore;
