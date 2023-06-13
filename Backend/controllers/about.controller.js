import About from "../models/about.model.js";
  
  export const aboutPage =  async (req, res) => {
    try {
        const about = await About.find();
        console.log(about);
        res.status(200).json(about);
      } catch (err) {
        res.status(500).json(err);
      }
  };
  

  