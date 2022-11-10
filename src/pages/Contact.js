import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleNameBlur() {
    if (name === "") {
      alert("Name is a Required Field");
    }
  }

  function handleEmailBlur() {
    if (email === "") {
      alert("Email is a Required Field");
      return;
    }
    if (!/^\S+\@\S+\.\S+$/.test(email)) {
      alert("Email is Invalid");
    }
  }

  function handleMessageBlur() {
    if (message === "") {
      alert("Message is a Required Field");
    }
  }

  return (
    <div>
      <h1>Contact</h1>
      <form>
        <label>
          Name:
          <input
            value={name}
            onChange={(evt) => {
              setName(evt.target.value);
            }}
            onBlur={handleNameBlur}
          />
        </label>
        <label>
          Email:
          <input
            value={email}
            onChange={(evt) => {
              setEmail(evt.target.value);
            }}
            onBlur={handleEmailBlur}
          />
        </label>
        <label>
          Message:
          <textarea
            value={message}
            onChange={(evt) => {
              setMessage(evt.target.value);
            }}
            onBlur={handleMessageBlur}
          />
        </label>
      </form>
    </div>
  );
}
