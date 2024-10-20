import express from 'express';
import upload from '../Middleware/multer.js';
import { addDoctor } from '../Controllers/adminController.js';

const adminRouter = express.Router();

adminRouter.post('/add-docter', upload.single('image'), addDoctor);

export default adminRouter;