import mongoose from "mongoose"
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId

const favAnimal = new Schema({
    creatorEmail: { type: String },
    AnimalId: { type: ObjectId, ref: 'Animal' }
});

export default favAnimal;
