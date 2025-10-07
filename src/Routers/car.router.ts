import { Express } from "express";

import * as carContoller from "../controllers/car.controller";

const carRoutes = (app: Express) => {
  app.get("/cars", carContoller.getAllCars);
  app.post("/createCar", carContoller.addCar);
  app.get("/cars/:id", carContoller.getCarById);
  app.delete("/cars/:id", carContoller.deleteCar);
};


export default carRoutes;