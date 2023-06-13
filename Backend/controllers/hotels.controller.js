import Hotels from "../models/hotels.model.js";

  
  export const getHotels =  async (req, res) => {
    try {
      const hotels = await Hotels.findOne({name:req.body.name});
      console.log(hotels);
      res.status(200).json(hotels);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  //get all Hotels

  
  export const allHotels =  async (req, res) => {
    try {
        const allHotels = await Hotels.find();
        console.log(allHotels);
        res.status(200).json(allHotels);
      } catch (err) {
        res.status(500).json(err);
      }
  };
  

  