var express = require("express");
var router = express.Router();
var Country = require("../models/dataSchema");

router.get("/", (req, res) => {
  Country.find({}, (err, countries) => {
    if (err) {
      res.status(500).json({ errmsg: err });
      return;
    } else {
      res.status(200).json({ msg: countries });
    }
  });
});

router.get("/:id", (req, res) => {
  Country.findById({ _id: req.params.id }, (err, country) => {
    if (err) {
      res.status(500).json({ errmsg: err });
      return;
    } else {
      res.status(200).json({ msg: country });
    }
  });
});

router.post("/", (req, res) => {
  var newCountry = new Country({
    name: req.body.name,
    capital: req.body.capital,
  });

  newCountry.save((err, country) => {
    if (err) {
      res.status(500).json({ errmsg: err });
      return;
    } else {
      res.status(200).json({ msg: country });
    }
  });
});

router.put("/", (req, res) => {
  Country.findById(req.body._id, (err, country) => {
    if (err) {
      res.status(500).json({ errmsg: err });
      return;
    } else {
      country.name = req.body.name;
      country.capital = req.body.capital;
      country.save((err, country) => {
        if (err) {
          res.status(500).json({ errmsg: err });
          return;
        } else {
          res.status(200).json({ msg: country });
        }
      });
    }
  });
});

router.delete("/:id", (req, res) => {
  Country.findOneAndRemove({ _id: req.params.id }, (err, country) => {
    if (err) {
      res.status(500).json({ errmsg: err });
      return;
    } else {
      res.status(200).json({ msg: country });
    }
  });
});

module.exports = router;
