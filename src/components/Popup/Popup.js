import React, { useState, useEffect } from "react";
import "./Popup.css";
import Button from "../../stories/Button/Button";

const Popup = ({ setCandidateNumber, modalState, setModalState }) => {
  const getCandidates = () => {
    const data = localStorage.getItem("candidates");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  const [candidates, setCandidates] = useState(getCandidates());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Set Local Storage
  useEffect(() => {
    localStorage.setItem("candidates", JSON.stringify(candidates));
    setCandidateNumber(candidates.length);
  }, [candidates]);

  // Submit Form
  const handleFormSubmit = () => {
    const newCandidate = {
      name: name,
      email: email,
    };
    setCandidates([...candidates, newCandidate]);
    setModalState(false);
    setEmail("");
    setName("");
  };
  console.log(candidates);

  return (
    <div className={modalState ? `popup active` : `popup`}>
      <div className="popup__container">
        <div className="form-group">
          <label htmlFor="fname">Name</label>
          <input
            type="text"
            id="fname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <Button onClick={handleFormSubmit} children="Submit" />
          <Button
            variant="secondary"
            style={{ marginLeft: "15px" }}
            onClick={() => setModalState(false)}
            children="Close"
          />
        </div>
      </div>
    </div>
  );
};

export default Popup;
