import express from "express";
import BaseController from "../utils/BaseController";
import { orgProService } from "../services/orgProfileService";
import auth0Provider from "@bcwdev/auth0provider"

export class OrgProfileController extends BaseController {
  constructor() {
    super("api/org");
    this.router
      .use(auth0Provider.getAuthorizedUserInfo)
      .get("", this.getAll)
      .get("/:id", this.getOrgProfile)
      .get("/:id/animals", this.getAllAnimalsByOrg)
      .post("", this.createOrg)
      .put("/:id", this.editOrg)
  }

  async getAll(req, res, next) {
    try {
      let data = await orgProService.findAll(req.query)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async getOrgProfile(req, res, next) {
    try {
      let orgProfile = await orgProService.getOrgProfile(req.userInfo);
      res.send(orgProfile)
    } catch (error) {
      next(error)
    }
  }

  async getAllAnimalsByOrg(req, res, next) {
    try {
      let data = await orgProService.getAllByOrg(req.organization_id)
      res.send(data)
    } catch (error) {
      next(error);
    }
  }

  async createOrg(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      let data = await orgProService.createOrg(req.body)
      return res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }

  async editOrg(req, res, next) {
    try {
      req.body.creatorId = req.user.sub;
      let data = await orgProService.edit(req.userInfo.email, req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
}