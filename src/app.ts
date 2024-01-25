import express from 'express';
import {initialDataBase} from './database/database';

const app = express();
app.use(express.json());



async function startServer() {
    try {
        await initialDataBase();
        app.listen(3000, () => {
            console.log("Server online in port 3000");  
        })
    } catch (error) {
        console.log("Error al iniciar el servidor", error);
    }
}
startServer();

