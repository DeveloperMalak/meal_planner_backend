const express = require("express");
const router = express.Router();

const authRoutes = require("../routes/users");
const recipeRoutes = require("../routes/recipes");
const voteRoutes = require("../routes/votes");
const favouriteRoutes = require("../routes/favourites");

router.use("/users", authRoutes);         // e.g., /api/auth/register
router.use("/recipes", recipeRoutes);    // e.g., /api/recipes/recipes
router.use("/votes", voteRoutes);        // e.g., /api/votes/vote
router.use("/favourites", favouriteRoutes); // e.g., /api/favourites/favorite

module.exports = router;
