import mongoose from "mongoose";
import ProfileSchema from "../models/Profile";
import AnimalSchema from "../models/Animal";
import OrgSchema from "../models/OrgProfile";

class DbContext {
  Profile = mongoose.model("Profile", ProfileSchema);
  Animals = mongoose.model("Animal", AnimalSchema);
  OrgProfile = mongoose.model("Org", OrgSchema);
}

export const dbContext = new DbContext();
