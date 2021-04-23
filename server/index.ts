const express:any =  require("express");
const app = express();
const port:number = 3000;
const db:any =  require("../database");

//app.use(express.static('./client/public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, ()=> {
  console.log(`App is listening to port: ${port}`);
});