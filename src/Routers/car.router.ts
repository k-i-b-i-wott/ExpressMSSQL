import { Express } from "express";

import * as carContoller from "../controllers/car.controller";

export const carRouter = (app: Express) => {
  app.get("/cars", carContoller.getAllCars);
};