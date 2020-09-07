import React, { useState, useEffect } from "react";
import FlipMove from "react-flip-move";
import firebase from "firebase";
import img from "./img.png";
//MATERIAL UI
import { Button } from "@material-ui/core";
import { FormControl, Input, InputLabel } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
//COMPONENTS
import "./App.css";
import Message from "./Message";
import db from "./firebase";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("PLEASE ENTER YOUR NAME"));
  }, []);

  useEffect(() => {
    //run once when the app comp loads
    db.collection("messages")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  const sendMessage = (event) => {
    // al the logic to send a message goes here
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="App">
      <img className="img" src={img}></img>
      <h1>Hello</h1>
      <h2>Welcome, {username}</h2>
      <form className="app_form">
        <FormControl className="app_formControl">
          <Input
            className="app__input"
            placeholder="Enter a message..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

          <IconButton
            className="app__iconButton"
            variant="contained"
            color="red"
            type="submit"
            onClick={sendMessage}
            disabled={!input}
          >
            <SendIcon></SendIcon>
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
