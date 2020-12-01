import React, { useEffect, useState } from 'react';
import "./App.css";

//main
function App() {

  // const studentsName = ['Jisan', "Shakil", "Shawon", "Mursalin", "Shagor",  "Akash"];

  const students = [
    {name: "Jisan", age: 18},
    {name: "shakil", age: 19},
    {name: "Shawon", age: 20},
    {name: "Mursalin", age: 21},
    {name: "Shagor", age: 22},
    {name: "Akash", age: 18}
  ]

  
  return (
    <div className="App">
      <h1>This is recap of reactjs</h1>
      <ClickCounter></ClickCounter>
      <h2>HardCoded users info</h2>
      {
        students.map(student => <Students student={student} ></Students>)
      }

      <h2 style={{color: "purple", backgroundColor: "yellow"}}>Random User API</h2>
      <RandomUser></RandomUser>

      <h2 style={{color: "green", backgroundColor: "gold"}}>API user info</h2>
      <FakeUsersCon></FakeUsersCon>

    </div>
  );
}

//counter
function ClickCounter(){
  const [count, setCount] = useState(0);
  const style = {
    border: "1px solid purple", 
    margin: "10px", 
    padding: "10px"
  }

  return (
    <div style={style}>
      <button onClick={() => setCount(count+1)} >Click me</button>
      <h3>Number of clicks: {count} </h3>
      <MoreCount count ={count+1}> </MoreCount>
    </div>
  )
}

//morecount
function MoreCount(props) {
  const style = {
    border: "1px solid purple", 
    margin: "10px", 
    padding: "10px"
  }
  return <h4 style={style}>Click count+1: {props.count} </h4>
}

//students 
function Students(props) {
  const style = {
    border: "1px solid purple", 
    margin: "10px", 
    padding: "10px"
  }

  return (
    <div style={style}>
      <h3>Name: {props.student.name} </h3>
      <h4>Age: {props.student.age} </h4>
     
    </div>
  )
}

//users api from jsonplaceholder
function FakeUsersCon(){
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => { 
      setUser(data)}

      )
  }, [])
  
  return (
    <div>
      {
        user.map(user => <FakeUsers user={user}></FakeUsers>)
      }
    </div>
  )
}

function FakeUsers(props){
  const style ={
    boxShadow: "0 0 12px 3px rgba(50, 13, 163, 0.5)",
    backgroundColor: "#2374AB",
    margin: "10px",
    color: "white",
    borderRadius: "3px",
    padding: "5px",
    marginBottom: "25px"
  }
  const user = props.user;
  return (
    <div style={style}>  
      <h3>Id: {user.id}</h3>
      <h3>Name: {user.name}</h3>
      <h3>Email: {user.email} </h3>
    </div>
  )
}

//random user using api

function RandomUser(){
  const [user, setUser] = useState({})
  useEffect(() => {
    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => setUser(data))
  }, [])

  function handleBtn(){
    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => setUser(data))
  }

  console.log(user.results[0])
  const userInfo = user.results[0];
  const style = {
    backgroundColor: "#231651",
    color: "#DEDEDf",
    margin: "20px",
    padding: "15px 0"
  }
  return (
    <div style={style}>
      <h3>Name: {userInfo.name.first+ " "+ userInfo.name.last}  </h3>
      <h3>Email: {userInfo.email} </h3>
      <h3>Password: {userInfo.login.password} </h3>
      <h3>Phone: {userInfo.cell} </h3>

      <button onClick={handleBtn}>Generate</button>
    </div>
  )
}



export default App;
