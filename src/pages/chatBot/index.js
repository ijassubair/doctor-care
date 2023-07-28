import React, { useState } from "react";
import axios from "axios";
import addNotification from 'react-push-notification';

const ChatBot = () => {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send a request to the server with the prompt
        axios
            .post("http://localhost:8080/chat", { prompt })
            .then((res) => {
                // Update the response state with the server's response
                setResponse(res.data);
                addNotification({
                    title: 'Warning',
                    subtitle: 'This is a subtitle',
                    message: res.data,
                    theme: 'darkblue',
                    native: true // when using native, your OS will handle theming.
                });
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
          <p>{response}</p>
        </div>
      );
};

export default ChatBot;