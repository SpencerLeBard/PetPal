// @ts-ignore
import mongoose from "mongoose";
import { dbContext } from "../db/DbContext";

class CleanupService {
  async cleanupAsync() {
    // @ts-ignore
    await Promise.allSettled([
      // @ts-ignore
      dbContext.Bugs.deleteMany({ reportedBy: "D$" }),
      // @ts-ignore
      dbContext.Logs.deleteMany({ reportedBy: "D$" }),
    ]);
    return { message: "Deleted all test data!" };
  }
}

const cleanupService = new CleanupService();
export default cleanupService;
