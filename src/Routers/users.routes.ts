import * as userController from '../controllers/users.controller';
import { Express } from 'express';

const userRoutes=(app:Express)=>{
    app.get('/users',userController.getAllUsers);
    app.post('/users',userController.createUser);

}

export default userRoutes;