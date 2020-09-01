import { Router } from 'express';

import ForgotPasswordController from '../controllers/ForgotPasswordController';
import ResetPasswordController from '../controllers/ResetPasswordController';

const passwordRouter = Router();
const forogotPasswordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordController();

passwordRouter.post('/forgot', forogotPasswordController.create);
passwordRouter.post('/reset', resetPasswordController.create);

export default passwordRouter;
