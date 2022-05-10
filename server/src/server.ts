import express from 'express'
import userRoutes from './resource/userResources'

const app = express();

app.use(userRoutes);

app.listen(8080,()=>{
    console.log("server ok");
})