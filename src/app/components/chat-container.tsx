/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import Starter from "./starter-screen";

function ChatContainer() {
  const [messages, setMessages] = React.useState([
    { role: "assistant", content: "Hello! How can I assist you today?" },
  ]);

  const mount = React.useMemo(() => {
    console.log(messages);
  }, [messages]);

  return (
    <div>
      <Starter messages={messages} setMessages={setMessages} />
    </div>
  );
}

export default ChatContainer;
