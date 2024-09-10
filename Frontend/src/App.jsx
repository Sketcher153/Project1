import { useState } from "react";
import axios from "axios";
import "./App.css"; 

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/submit",
        formData
      );
      console.log(response.data);
      alert("Form submitted successfully");
    } catch (err) {
      console.error("Error submitting form", err);
      alert("Failed to submit form");
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username"> Username </label>
            <input
              type="text"
              name="name"
              id="username"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Username"
              required
            />
          </div>
          <div>
            <label htmlFor="email"> Email </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              required
            />
          </div>
          <div>
            <label htmlFor="message"> Message </label>
            <input
              type="text"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter any message"
              required
            />
          </div>
          <div>
            <button type="submit"> Submit </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
