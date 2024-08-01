import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    name: String,
    // Add other fields as necessary
});

const Restaurant = mongoose.models.Resto || mongoose.model("Resto", restaurantSchema, "Resto");

export default Restaurant;
