import mongoose from "mongoose";
const { Schema }= mongoose;

const contactSchema= new Schema({
  name:{
    type: String,
    require: true
  },
  email:{
    type: String,
    require: true
  },
  query:{
    type: String,
    require: true
  },
},{
  timestamps: true
});

export default mongoose.model('Contact', contactSchema);