// import express from "express";
// import BaseController from "../utils/BaseController";
// import { favoritesService } from "../services/favoritesService.js";

// export class FavoritesController {
//     constructor() {
//         this.router = express.Router();
//         this.router
//             .get("", this.getAllfavorites)
//             .post("", this.getAllfavorites)
//     }
//     async getAllfavorites(req, res, next) {
//         try {
//             // req.query.page = req.query.page || 1;
//             let data = await favoritesService.findAll({ creatorEmail: req.userInfo.email });
//             return res.send(data);
//         } catch (error) {
//             next(error);
//         }
//     }
// }
