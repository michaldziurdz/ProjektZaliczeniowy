let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Ksiazka Model
let ksiazkaSchema = require("../models/Ksiazka");

// CREATE Ksiazka
router.post("/create-ksiazka", (req, res, next) => {
  ksiazkaSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

router.get("/", (req, res) => {
  ksiazkaSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// UPDATE Ksiazka
router
  .route("/update-ksiazka/:id")
  // Get Single Ksiazka
  .get((req, res) => {
    ksiazkaSchema.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  })

  // Update Ksiazka Data
  .put((req, res, next) => {
    ksiazkaSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          return next(error);
          console.log(error);
        } else {
          res.json(data);
          console.log("Book updated successfully !");
        }
      }
    );
  });

// Delete Ksiazka
router.delete("/delete-ksiazka/:id", (req, res, next) => {
  ksiazkaSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
