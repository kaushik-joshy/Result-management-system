import "dotenv/config"
import { configDotenv } from "dotenv";
import { app } from "./app.js";

configDotenv({path: './.env'})

app.listen(process.env.PORT || 3000, () =>{
    console.log(`App listening on port ${process.env.PORT}`);
});