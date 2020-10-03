import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class OrgProfileService {

    async getAll(query = {}) {
        let all = await dbContext.OrgProfile.find(query);
        return all;
    }

    async getOrgProfile(userEmail) {
        return await dbContext.OrgProfile.find({ creatorEmail: userEmail.id })
    }

    async getAllByOrg(orgId) {
        let data = await dbContext.OrgProfile.find({ organization_id: orgId })
    }

    async createOrg(rawData) {
        let data = await dbContext.OrgProfile.create(rawData)
        return data
    }

    async edit(userEmail, update) {
        let org = await this.getOrgProfile(userEmail)
        let data = null
        if (org.creatorEmail == userEmail) {
            data = await dbContext.OrgProfile.findOneAndUpdate({ creatorEmail: userEmail }, update, { new: true })
        }
        if (!data) {
            throw new BadRequest("Invalid information or you do not own this Org");
        }
        return data;
    }


} export const orgProService = new OrgProfileService();