import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class AnimalsService {
  async createMany(array) {
    let data = await dbContext.Animals.insertMany(array);
    return data;
  }
  async findAll(query = {}) {
    let values = await dbContext.Animals.find(query).populate(
      "creator",
      "name picture"
    );
    return values;
  }
  async findById(id) {
    let value = await dbContext.Animals.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }
}

export const animalsService = new AnimalsService();
