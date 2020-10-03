import mongoose from "mongoose";
const Schema = mongoose.Schema;

const searchSchema = new Schema({
  city: { type: String, default: null },
  state: { type: String, default: null },
  zip: { type: String, default: null },
  dog: { type: Boolean, default: false },
  cat: { type: Boolean, default: false }
});

const Profile = new Schema(
  {
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String },
    picture: { type: String },

    search: searchSchema,
    hasOrg: { type: Boolean, default: false }

    // NOTE If you wish to add additional public properties for profiles do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Profile;

