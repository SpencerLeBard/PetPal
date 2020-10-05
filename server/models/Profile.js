import mongoose from "mongoose";
const Schema = mongoose.Schema;

const searchSchema = new Schema({

  city: { type: String, default: undefined },
  state: { type: String, default: undefined },
  zip: { type: String, default: undefined },

  dog: { type: Boolean, default: false },
  cat: { type: Boolean, default: false },
});

const Profile = new Schema(
  {
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String },
    picture: { type: String },
    search: searchSchema,
    hasOrg: { type: Boolean, default: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Profile;
