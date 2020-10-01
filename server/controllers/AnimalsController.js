import express from "express";
import BaseController from "../utils/BaseController";
import { animalsService } from "../services/AnimalsService.js";
import auth0Provider from "@bcwdev/auth0provider";

export class AnimalsController extends BaseController {
  constructor() {
    super("api/animals");
    this.router
      .get("", this.getAll)
      .post("", this.createMany)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(auth0Provider.getAuthorizedUserInfo);
  }
  async getAll(req, res, next) {
    try {
      let data = await animalsService.findAll(req.query);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async createMany(req, res, next) {
    try {
      let data = await animalsService.createMany(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }
}
