import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import chatbotRoutes from './routes/gemini.js';
import dotenv from "dotenv";
dotenv.config();

const app = express();
import bodyParser from 'body-parser';
// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(bodyParser.json());
app.use('/',express.static(path.join(__dirname, 'public')));
// app.get('/',(req,res)=>{
//   res.json("Welcome Jii")
//   // console.log(process.env.API_KEY);
  
// })
// Add other middleware and routes
app.use('/chatapi', chatbotRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
