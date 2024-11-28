import express from 'express';
import { routes } from './routes/routes.js';




const app = express();

const PORT = 7000

app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);
 });

 routes.map((item)=>{
    return(
        app.get(item.path, (req , res)=>{
           res.status(200).send(item.element)
       })
    )
 })





 export default app;
