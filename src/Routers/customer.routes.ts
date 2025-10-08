import * as customerContoller from "../controllers/customer.controller";
import { Express } from "express";


const customerRoutes = (app: Express) => {
  app.get("/customers", customerContoller.getCustomers);
  app.get("/customers/:id", customerContoller.getCustomer);
  app.post("/customers", customerContoller.createCustomer);
}

export default customerRoutes;
