import { Express } from "express";

import * as carContoller from "../controllers/car.controller";
import { isAuthenticated } from "../middleware/configAuth";

const carRoutes = (app: Express) => {
  app.get("/cars", isAuthenticated, carContoller.getAllCars);
  app.post("/createCar", isAuthenticated, carContoller.addCar);
  app.get("/cars/:id", isAuthenticated, carContoller.getCarById);
  app.delete("/cars/:id", isAuthenticated, carContoller.deleteCar);
  app.put("/cars/:id", isAuthenticated, carContoller.updateCar);
  app.patch("/cars/:id", isAuthenticated, carContoller.updateCar);

};


export default carRoutes;