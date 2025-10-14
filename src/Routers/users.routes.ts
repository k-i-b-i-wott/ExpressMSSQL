import * as userController from '../controllers/users.controller';
import { Express } from 'express';
import { isAuthenticated } from '../middleware/configAuth';

const userRoutes=(app:Express)=>{
    app.get('/users',isAuthenticated, userController.getAllUsers);
    app.post('/register',userController.createUser);
    app.post('/login',userController.loginUser);
}

export default userRoutes;