const express = require('expess');
const userRouter = require('./routes/userRoute');

const app = express();

require('dotenv').config();

const port = process.env.PORT;

app.set("view engine" , "pug");
app.set("views" , "./views");

app.use( userRouter )

app.listen(port , (err)=>{
    if(err){
        console.log("can not run the server");
    }
    console.log(`server run ${port}`);
})