const express =require("express");
const bodyparser =require("body-parser");
const cors = require("cors");
const dbm =require("./middleware/index")
//const re =require("./models/index")
 var path = require('path');
var app = express();
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
const port =5000;
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.get("/",  (req , res)=> {
res.send("welcom to manarah school ")});
const db = require('./config/connection');
db.sequelize.sync({force: false}).then(() => {
    console.log('Drop and Resync with { force: false }');
  });
  require('./ruotes/student')(app);
  require('./ruotes/tetcher')(app);
  require('./ruotes/role')(app);
  require('./ruotes/departemant')(app);
  require('./ruotes/courses')(app);
  require('./ruotes/classe')(app);
  require('./ruotes/studentsclasses')(app);
  require('./ruotes/coursesclasses')(app);
  //require('./ruotes/tetcherroles')(app); 
  require('./ruotes/studentmany')(app);  
  //require('./ruotes/tetchermany')(app); 
  require('./ruotes/classesmay')(app);
  require('./ruotes/coursesmany')(app);
  //require('./ruotes/rolesmany')(app);
  require('./ruotes/auth.routes')(app);
require('./ruotes/user.routes')(app);
app.listen(port,()=>{
    console.log(`server runninng on port ${port}`)
})
