import React, { useEffect, useState  } from "react";
import "./App.css";
import Layout from "./Components/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [optionValue, setOptionValue] = useState([]);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  

  const submitForm = (e) => {
    e.preventDefault();

    if (name === "") {
      toast("Plase Enter Name");
    }else if(email === ""){
      toast("Plase Enter Email");
    }else if(contact === ""){
      toast("Plase Enter Contact");
    }else if(city === ""){
      toast("Plase Enter City");
    }else if(country === ""){
      toast("Plase Enter Country");
    }else if(message === ""){
      toast("Plase Enter Message");
    }else{
      toast("Congratulations Your Form Submited");
      console.log(name, email, contact, city, country, message);
      setName("")
      setEmail("")
      setCity("")
      setCountry("")
      setContact("")
      setMessage("")
    }
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        setOptionValue(res);
      });
  }, []);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h1 className="form-application">Application Form</h1>
      <div className="form">
        <form action="" onSubmit={submitForm}>
          <div className="label">
            <label htmlFor="myName">Enter Your Name</label>
            <input
              type="text"
              name="name"
              id="myName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
            />
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="label">
            <label htmlFor="myEmail">Enter Your Email</label>
            <input
              type="email"
              name="email"
              id="myEmail"
              value={email}
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="label">
            <label htmlFor="myContact">Enter Your Contact</label>
            <input
              type="number"
              name="number"
              id="myContact"
              value={contact}
              placeholder="Enter Your Contact"
              onChange={(e) => setContact(e.target.value)}
            />
            <i className="fa-solid fa-phone"></i>
          </div>
          <div className="label">
            <label htmlFor="myCity">Enter Your City</label>
            <input
              type="text"
              name="city"
              id="myCity"
              value={city}
              placeholder="Enter Your City"
              onChange={(e) => setCity(e.target.value)}
            />
            <i className="fa-solid fa-building"></i>
          </div>
          <div className="label">
            <label htmlFor="myCountry">Enter Your Country</label>
            <select
              name="country"
              id="myCountry"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option>Select Option</option>
              {optionValue.map((element, index) => (
                <option key={index} value={element.name.common}>
                  {element.name.common}
                </option>
              ))}
            </select>
            <i className="fa-solid fa-earth-europe"></i>
          </div>
          <div className="label">
            <label htmlFor="myMessage">Enter Your Message</label>
            <textarea
              name="message"
              id="myMessage"
              cols="30"
              rows="10"
              value={message}
              placeholder="Enter Your Message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <i className="fa-solid fa-message"></i>
          </div>
          <div className="label">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
      <Layout />
    </>
  );
};

export default App;
