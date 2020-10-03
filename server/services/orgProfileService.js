import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class OrgProfileService {

    async findAll(query = {}) {
        let all = await dbContext.OrgProfile.find(query);
        return all;
    }

    async getOrgProfile(userInfo) {
        return await dbContext.OrgProfile.find({ _id: userInfo })
    }

    async getAllByOrg(orgId) {
        let data = await dbContext.OrgProfile.find({ _id: orgId })
    }

    async createOrg(rawData) {
        let data = await dbContext.OrgProfile.create(rawData)
        return data
    }

    async edit(userId, update) {
        let org = await this.getOrgProfile(userEmail)
        let data = null
        if (org.id == userId) {
            data = await dbContext.OrgProfile.findOneAndUpdate({ creatorEmail: userEmail }, update, { new: true })
        }
        if (!data) {
            throw new BadRequest("Invalid information or you do not own this Org");
        }
        return data;
    }


} export const orgProService = new OrgProfileService();