import React, { useState } from 'react';


export default function DepartmentRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, email, contact, gender };
   
    const existingUsers = localStorage.getItem("users");
    let usersArray = existingUsers ? JSON.parse(existingUsers) : [];
    userData.id = usersArray.length + 1;
    usersArray.push(userData);
    localStorage.setItem("users", JSON.stringify(usersArray));
    
    alert(`Form submitted successfully: ${name}`);
    setName("");
    setEmail("");
    setContact("");
    setGender("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter Name:</label>
        <input value={name} required onChange={(e) => setName(e.target.value)} />
        <pre></pre>
        <label>Enter Email:</label>
        <input value={email} required onChange={(e) => setEmail(e.target.value)} /><br />
        <pre></pre>
        <label>Enter Contact:</label>
        <input value={contact} required onChange={(e) => setContact(e.target.value)} /><br />
        <pre></pre>
        <label>Select Gender</label>
        <select value={gender} required onChange={(e) => setGender(e.target.value)}>
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Other</option>
        </select>
        <pre></pre>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
