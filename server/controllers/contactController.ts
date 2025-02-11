import { Request, Response } from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import z from "zod";
import Contact from "../models/Contact";

dotenv.config();

const mailer = (email:string, name:string, query:string,res:Response)=>{
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.user,
        pass: process.env.pass,
      },
    });

    const mailOptions = {
      from: email,
      to: "amang4885@gmail.com",
      subject: "Query Regarding Portfolio",
      html: `
        <h3> Dear Aman Gupta </h3>

        <p>I hope this email finds you well. I have a query regarding your portfolio and would appreciate your insights or clarification.</p>

        <h4>Query Details:</h4>
        <p>${query}</p>

        <h4>Contact Information:</h4>
        <ul>
          <li>Name: ${name} </li>
          <li>Email: ${email} </li>
        </ul>
        
        <p>I look forward to your response. Thank you for your time.</p>

        <p>Best regards,</p>
        <p>${name}</p>
      `,
    };

    transporter.sendMail(mailOptions, function (error:any, info:any){
      if (error) {
        const respone = { status: "error", message: "While sending a query having a error" + error };
        res.status(403).json(respone);
      } else {
        const respone = { status: "success", message: "Email Send successfully" + info.respone };
        res.status(200).json(respone);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

const contactSchema = z.object({
  name: z.string().min(1, {message: "Name is required."}).regex(/^[a-zA-Z\s]+$/, {message: "Name must contain only letters and spaces."}),
  email: z.string().min(1, {message: "Email is required."}).email({message: "Please enter a valid email address."}),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export const contactData = async (req:Request,res:Response) =>{
  try{
    const validatedData = contactSchema.parse(req.body);
  
    const newSchema = new Contact({
      name: validatedData.name,
      email: validatedData.email,
      query: validatedData.message
    })
    const userDate = await newSchema.save();
    mailer(newSchema.email as string, newSchema.name as string, newSchema.query as string, res);

    return res.status(201).json({
      status: "success",
      message: 'Query send successfully',
      data: userDate,
    });
  } catch(err){
    if (err instanceof z.ZodError) {
      return res.status(400).json({
        status: "error",
        message: 'Validation failed',
        errors: err.errors.map((error) => ({
          field: error.path.join("."),
          message: error.message,
        })),
      });
    }
    console.error(err);
    return res.status(500).json({
      status: "error",
      message: 'An error occurred while saving the contact' + err,
    });
  }
}