const express = require('express')
const app = express()
app.use(express.json())
const port=4000
const mongoose=require("mongoose")
const UserModel=require('./models/user')
mongoose.connect('mongodb://localhost:27017/dcs').then(()=>console.log(
    "MongoDb Connected"
))

app.get('/api/', (req, res) => res.send('Hello Fullstack!'))
//Get list of all users
app.get('/api/list',async(req,res)=>{
    const UserList=await UserModel.find({},{usernmae:true});

    if(UserList.length===0){
        return res.json({data:"No User in database"})
    }
    return res.json({data:UserList})
});
//Register
app.post("/api/register",(req,res)=>{

    const {newUser}=req.body;
    UserModel.create(newUser);
    return res.json({data:"Registered Successfully"});
})

//Updating data
app.put("/api/user/changepassword/:uname",(req,res)=>{
    const pass=req.body.password;
    const updateUser= UserModel.findOneAndUpdate(
        {username:uname},
        {password: password},
        {new:true}
    );
        return res.json({data:"Password Updated Successfully"});
});
//Delete USer
app.delete("/api/user/deleteuser/:uname",(req,res)=>{
    const deleteUser= UserModel.findOneAndDelete(
        {username:req.params.uname}
    )
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))