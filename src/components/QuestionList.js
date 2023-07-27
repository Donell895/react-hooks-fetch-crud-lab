import React, { useState } from "react";

function QuestionList() {
  const [formData, setFormData] = useState({
    prompt: "",
    answers: ["", "", "", ""], // Initialize with four empty answer options
    correctIndex: 0, // Default correct answer index is 0 (first option)
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the API
    fetch("/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response if needed
        console.log(data);
      })
      .catch((error) => {
        // Handle errors if any
        console.error("Error:", error);
      });

    // Clear the form after submission
    setFormData({
      prompt: "",
      answers: ["", "", "", ""],
      correctIndex: 0,
    });
  };

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}</ul>
      <li>"What special prop should always be included for lists of elements?",</li>
      <li>"A React component is a function that returns ______.",</li>
      <li>"Which event handler will run when a user is finished filling out a form?",</li>
      <li>"______ is a tool that transpiles JSX into valid JavaScript.",</li>
      <li>"What syntax makes it possible to unpack values from arrays, or properties from objects, into distinct variables?",</li>
      <li>"Returning different elements from a component depending on the state of your application is known as _____ rendering.",</li>

      {/* Form for creating a new question */}
      <form onSubmit={handleSubmit}>
        <label>
          Question:
          <input
            type="text"
            name="prompt"
            value={formData.prompt}
            onChange={handleChange}
          />
        </label>
        {formData.answers.map((answer, index) => (
          <label key={index}>
            Answer {index + 1}:
            <input
              type="text"
              name={`answers[${index}]`}
              value={answer}
              onChange={handleChange}
            />
          </label>
        ))}
        <label>
          Correct Answer:
          <select
            name="correctIndex"
            value={formData.correctIndex}
            onChange={handleChange}
          >
            {formData.answers.map((answer, index) => (
              <option key={index} value={index}>
                {`Answer ${index + 1}`}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Submit Question</button>
      </form>
    </section>
  );
}

export default QuestionList;
