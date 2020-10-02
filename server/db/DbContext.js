import mongoose from "mongoose";
import ProfileSchema from "../models/Profile";
import AnimalSchema from "../models/Animal";

class DbContext {
  Profile = mongoose.model("Profile", ProfileSchema);
  Animals = mongoose.model("Animal", AnimalSchema);
}

export const dbContext = new DbContext();
