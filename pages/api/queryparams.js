// pages/api/queryparams.js

export default (req, res) => {
    response.json({
      location: req.query.location,
      day: req.query.day,
      forecast: "Snow",
    });
  };