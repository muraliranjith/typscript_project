import express from "express";
import { port, host } from "../config/default";
// import log from './logger';

const ports = port;
const Host = host;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.listen(port, () => {
    console.log(`succesfully created your port is ${host}:${port}`);

})