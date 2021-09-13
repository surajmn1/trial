import React from "react";
import  {useState} from 'react';
import './App.css';
import { useHistory } from "react-router-dom";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default function Navigation() {
  
  
  // let r = (Math.random() + 1).toString(36).substring(7);
// code for makeshift collapsing navbar , tried bootstrap implementation but not working

  
  return (
    
    <Router>
      
      <div class="main-wrap">
    <input id="slide-sidebar" type="checkbox" role="button" />
        <label class="labelx" for="slide-sidebar"><img src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png" alt="x"/></label>
    <div class="sidebar" ><h1>SiteMap</h1>
    
    <ul >
      <li  >
        <Link  style={{textDecoration:'none'}} to="/">Home</Link>
      </li>
      <li>
        <Link style={{textDecoration:'none'}} to="/Signup">Signup</Link>
      </li>
      <li style={{ display:"none"}}>
        <Link  to="/Additionaldetails"> </Link>
      </li>
    </ul> 
    

    
    
    
    
    </div>


    <div class="portfolio">  
    
    
    <Switch>
              <Route exact path='/' component={Home}></Route>
            <Route exact path='/Signup' component={Signup}></Route> 
              <Route exact path='/Additionaldetails' component={Additionaldetails}></Route>
            </Switch>

    
    
    
    
    </div>


   

</div>

</Router>
  );
}

function Home (){
  return <h1 class="xyzq" > Welcome</h1>
}



function Signup (props){
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [Birthday, setBirthday] = useState("");

// console.log(inputField)

const history = useHistory();

const submitButton = () =>{
    alert(Username)
}

function handleClick(path) {
  history.push(path,[Username])
}


return (
  
  <div >
  
   <div class = "backgroundcenter">
      
   <div class="ttt"> <h1 style={{"Position":"absolute"}} class="xyz"> SignUp </h1>
  </div>

        <input 
        type="text" 
        name="Username" 
        onChange={(event) => setUsername(event.target.value)}
        placeholder="User Name" 
        />

        <br/>

        <input 
        type="text" 
        name="Email" 
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email" 
        />

        <br/>

        <input 
        type="date" 
        name="Birthday" 
        onChange={(event) => setBirthday(event.target.value)}
        placeholder="Birthday" 
       />

        <br/>


        <input 
        type="password" 
        name="password" 
        onChange={(event) => setpassword(event.target.value)}
        placeholder="password" 
      />

        <br/>

        

        <button type="submit" class="button" onClick={submitButton}>Submit Now</button>
         
        
        
     <button type="button" class="button" onClick={() => handleClick("Additionaldetails")} >
          Click Me!
     </button> 
 

    </div> </div>
  
)
 }

 function Additionaldetails ({location}) {
  console.log(typeof location);
  // console.log(location.state)
  const [Father, setFather] = useState("");
  const [Mother, setMother] = useState("");
  const [Age, setAge] = useState("");
  const [Department, setDepartment] = useState("");
  const [Gender, setGender] = useState("");
  const [Address, setAddress] = useState("");
  const [Pincode, setPincode] = useState("");
  
  
  const submitButton = () =>{
    alert(Father) 
}


  
  
  
  
  return <div class="fine ">
  <h1 id="title" > Hi! {location.state} </h1>
  <h1 id="title" class="xyzq" >Additional details </h1>
  <div id="form-outer">
    <p id="description">
     Let us know more about you
    </p>
     <form id="survey-form" method="GET" action="">
      
      
       <div class="rowTab">
        <div class="labels">
          <label id="fname-label" for="fname">Father's Name: </label>
        </div>
        <div class="rightTab">
          <input autofocus type="text" name="fname" id="fname" class="input-field" onChange={(event) => setFather(event.target.value)} placeholder="Enter your father's name" required/>
        </div>
      </div>
      
      <div class="rowTab">
        <div class="labels">
          <label id="mname-label" for="mname">Mother's Name: </label>
        </div>
        <div class="rightTab">
          <input autofocus type="text" name="mname" id="mname" class="input-field" onChange={(event) => setMother(event.target.value)} placeholder="Enter your mother's name" required/>
        </div>
      </div>
      
      <div class="rowTab">
       
        
      </div>
       <div class="rowTab">
        <div class="labels">
          <label id="number-label" for="age">Age: </label>
        </div>
        <div class="rightTab">
          <input type="number" name="age" id="number" min="1" max="125" class="input-field" onChange={(event) => setAge(event.target.value)} placeholder="Age" required/>
        </div>
      </div>
      
     
      
      <div class="rowTab">
        <div class="labels">
          <label for="department">Department: </label>
        </div>
        <div class="rightTab">
          <select id="dropdown" name="department" class="dropdown" onChange={(event) => setDepartment(event.target.value)}>
          <option disabled value>Select an option</option>
          <option value="it">IT</option>
          <option value="cse">CSE</option>
          <option value="ece">ECE</option>
          <option value="mech">MECH</option>
          <option value="civil">CIVIL</option>
          <option value="other">Other</option>
          </select>
        </div>
      </div>
      
      <div class="rowTab">
        <div class="labels">
          <label for="gender">Gender: </label>
        </div>
        <div class="rightTab">
          <ul style={{listStyle: "none"}} >
            <li class="radio"><label><input name="radio-buttons" value="male" onClick={(event) => setGender(event.target.value)} type="radio" class="userRatings" />Male</label></li>
            <li class="radio"><label><input name="radio-buttons" value="female" onClick={(event) => setGender(event.target.value)} type="radio" class="userRatings" />Female</label></li>
            <li class="radio"><label><input name="radio-buttons" value="others" onClick={(event) => setGender(event.target.value)} type="radio" class="userRatings" />Others</label></li>
          </ul>
        </div>
      </div>
       <div class="rowTab">
        <div class="labels">
          <label for="address">Address: </label>
        </div>
        <div class="rightTab">
          <textarea id="comments" class="input-field" style={{height:"50px" ,resize: "vertical" }} onChange={(event) => setDepartment(event.target.value)} name="address" placeholder="Enter your address here..."></textarea>
        </div>
      </div>
      <div class="rowTab">
        <div class="labels">
          <label for="pincode">Pincode: </label>
        </div>
        <div class="rightTab">
         <input type="number" name="pincode" id="idpincode" class="input-field" onChange={(event) => setDepartment(event.target.value)} style={{height:"20px" , resize:"vertical"}} placeholder="6 - - - - -"/></div>
      </div>
      
        
      
      <button id="submit" onClick={submitButton} type="submit">Submit</button>
      <button id="reset" type="reset">Reset</button>   
    </form> 
  </div> 
  
  
  </div>
}

