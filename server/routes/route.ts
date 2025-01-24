import express, {Request, Response} from 'express';
import { contactData } from '../controllers/contactController';
const router= express.Router();

router.post('/contact', (req:Request, res:Response)=>{
  contactData(req,res);
});

export default router;
