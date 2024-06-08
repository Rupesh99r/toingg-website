import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", { name, language });
    // Add your form submission logic here
  };

  return (
    <aside>
      <h2>Try now</h2>
      <p>Get a call from Toingg</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="" disabled>
            Choose your language
          </option>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
          {/* Add more languages as needed */}
        </select>
        <button type="submit">Submit</button>
      </form>
    </aside>
  );
}

export default Form;
