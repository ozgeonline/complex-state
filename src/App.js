import './App.css';
import React,{useState} from "react"

function App() {

  const [contact,setContact] = useState({
    fName:"",
    lName:"",
    email: ""
  });

  function handleChange(event){
    const {value,name} = event.target; //eventte setFullfName içinde erişme

    setContact(prevValue => {
      return {
        ...prevValue,
        [name]:value
      }

      // if(name === "fName"){
      //   return {
      //     fName: value,
      //     lName: prevValue.lName,
      //     email:prevValue.email
      //   }
      // }else if(name === "lName"){
      //   return{
      //     lName:value,
      //     fName:prevValue.fName,
      //     email:prevValue.email
      //   }
      // }else if(name === "email"){
      //   return{
      //     email:value,
      //     fName:prevValue.fName,
      //     lName:prevValue.lName
      //   }
      // }
    })
  }
 
  return (
    <div className="container">
      <h1>Hello {contact.fName} {contact.lName}</h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" onChange={handleChange} value={contact.fName} placeholder="First Name"/>
        <input name="lName" onChange={handleChange} value={contact.lName} placeholder="Last Name"/>
        <input name="email" onChange={handleChange} value={contact.email} placeholder="Email"/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
