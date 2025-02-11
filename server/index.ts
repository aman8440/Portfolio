import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import './db/connection';
import router from './routes/route';
dotenv.config();

const app= express();

const port= process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.json());

app.use(cors());
app.use(router);

app.listen(port, ()=>{
  console.log(`Sever running at ${port}`);
})