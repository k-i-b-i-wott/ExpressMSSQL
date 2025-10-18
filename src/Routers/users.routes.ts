import * as userController from '../controllers/users.controller';
import { Express } from 'express';
// import { isAuthenticated } from '../middleware/configAuth';
import { adminOnly, userOnly } from '../middleware/roleBasedAuth';

const userRoutes=(app:Express)=>{
    app.get('/users', userOnly,  userController.getAllUsers);
    app.post('/register',userController.createUser);
    app.post('/login',userController.loginUser);
    app.post('/verify-email', userController.verifyEmail);
}

export default userRoutes;