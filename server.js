import exress from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDb } from './Config/mongoDb.js';
import cloudinary from './Config/cloudnery.js';
import adminRouter from './Routes/adminRoute.js';



//App Config
const app = exress();
const port = process.env.PORT || 4000
connectDb();
cloudinary();




app.use(exress.json());
app.use(cors());

//endPoint
app.get('/', (req, res) => {
    return res.send('Api start working');
});
//localhost:4000/api/admin/add-docter
//api endPoint
app.use('/api/admin',adminRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
