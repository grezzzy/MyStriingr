import * as express from 'express';
import * as db from "../database";
const app = express();
const port:number = 3000;



app.use(express.static('./client/public'));

// app.get('/', (req,res)=> {
//   res.end();
// });

app.listen(port, ()=> {
  console.log(`App is listening to port: ${port}`);
});