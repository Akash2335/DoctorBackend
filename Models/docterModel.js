import mongoose from "mongoose";

const doctersSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true ,unique:true},
    password: { type: String, require: true },
    image: { type: String, require: true },
    speciality: { type: String, require: true },
    degree: { type: String, require: true },
    experience: { type: String, require: true },
    about: { type: String, require: true },
    available: { type: String, require: true },
    address: { type: String, require: true },
    date: { type: Number, require: true },
   slots_booked:{type:Object,default:{}}
}, { minimize: false });


const doctersModel = mongoose.models.docter || mongoose.model('doctor', doctersSchema);

export default doctersModel;