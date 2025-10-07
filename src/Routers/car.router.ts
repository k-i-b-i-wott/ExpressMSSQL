import { Express } from "express";

import * as carContoller from "../controllers/car.controller";

const carRoutes = (app: Express) => {
  app.get("/cars", carContoller.getAllCars);
  app.post("/createCar", carContoller.addCar);
};


export default carRoutes;