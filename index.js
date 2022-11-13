import express from "express";
import bodyParser from 'body-parser';
import usersRoutes from "./routes/users.js";


const app = express();
const PORT = 5004;

app.use(bodyParser.json());

// '/' is the url
//callback function are req,res
// app.get('/',(req,res) => {
//     //console appear on console
//     console.log('[TEST]!');
//     //res is send on FE
//     res.send('Hello from home page');
// });

app.use('/api',usersRoutes);


app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));