import './App.css';
import axios from "axios";
//Fetch Data
function App() {
  const fetchUsers=()=>{
    axios.get("/api/list").then(res=>console.log(res.data));
  };
  const user={
    username:"",
    password="",
    name="",
    age:0,
  };
  const uname="";
  const registerUsers=()=>{
    axios.post("/api/register",user).then(res=>console.log(res.data))
  }
  const UpdateUser=()=>{
    axios.post("/api/user/changepassword/:uname",user).then(res=>console.log(res.data))
  }
  const deleteUser=()=>{
    axios.post("/api/user/deleteuser/:uname",user).then(res=>console.log(res.data))
  }
  return (
    <div className="App">
     <button onClick={fetchUsers}>Fetch User</button>
     <input placeholder="Username" onChange={(e)=>(user.username=e.target.value)}/>{"\n"}
     <input placeholder="Password" onChange={(e)=>(user.password=e.target.value)}/>{"\n"}
     <input placeholder="Name" onChange={(e)=>(user.name=e.target.value)}/>{"\n"}
     <input placeholder="age" onChange={(e)=>(user.age=Number(e.target.value))}/>{"\n"}
     <button onClick={registerUsers}>Register</button>{"\n"}{"\n"}
     <input placeholder="Username" onChange={(e)=>(uname=e.target.value)}/>{"\n"}
     <button onClick={UpdateUser}>Update</button>{"\n"}{"\n"}
     <input placeholder="Username" onChange={(e)=>(user.uname=e.target.value)}/>{"\n"}
     <button onClick={deleteUser}>Register</button>{"\n"}{"\n"}
    </div>
  );
}

export default App;
