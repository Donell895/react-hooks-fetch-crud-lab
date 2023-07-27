import React, { useState } from "react";

function QuestionForm() {
  const [formData, setFormData] = useState({
    question: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    correctIndex: "0", // Default value for the correct answer
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the form submission here
    // For example, you can call an API to add the new question
    // and then reset the form data to clear the inputs

    // After handling the submission, you can reset the form data
    setFormData({
      question: "",
      answer1: "",
      answer2: "",
      answer3: "",
      answer4: "",
      correctIndex: "0",
    });
  };

  return (
    <section>
      <h1>New Question</h1>
      <form onSubmit={handleSubmit}>
        {/* ... your input fields and select element here ... */}
        <button type="submit">Add Question</button>
      </form>
    </section>
  );
}

export default QuestionForm;
