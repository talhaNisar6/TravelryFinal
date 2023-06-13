import Places from "../models/places.model.js";

  
  export const getPlace =  async (req, res) => {
    try {
      const places = await Places.findOne({name:req.body.name});
      console.log(places);
      res.status(200).json(places);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  //get all PLACES

  
  export const allplaces =  async (req, res) => {
    try {
        const allplaces = await Places.find();
        console.log(allplaces);
        res.status(200).json(allplaces);
      } catch (err) {
        res.status(500).json(err);
      }
  };
  

  