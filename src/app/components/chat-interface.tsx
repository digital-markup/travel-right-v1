"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import axios from "axios";
import { PlusIcon, Send, Sparkles } from "lucide-react";
import React from "react";

function ChatInterface() {
  const [messages, setMessages] = React.useState([
    { role: "assistant", content: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = React.useState("");

  // message function
  const getAnswers = async (message: string) => {
    const response = await axios.post("/api/chat", {
      message,
    });

    return response.data;
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: "user", content: input }]);

      setTimeout(() => {
        const answers = getAnswers(input);
        answers.then((data) => {
          setMessages((prev) => [
            ...prev,
            { role: "assistant", content: `${data}` },
          ]);
        });
      }, 1000);
      setInput("");
    }
  };

  return (
    <div className="flex bg-gray-100 h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-4">
        <Button variant="secondary" className="w-full mb-4">
          <PlusIcon className="mr-2 h-4 w-4" />
          New chat
        </Button>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <div className="space-y-2">
            {["Chat 1", "Chat 2", "Chat 3"].map((chat, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start"
              >
                {chat}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        <ScrollArea className="flex-1 p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start mb-4 ${
                message.role === "user" ? "justify-end" : ""
              }`}
            >
              {message.role === "assistant" && (
                <span className="mr-2 bg-white rounded-full p-3 border">
                  <Sparkles className="h-4 w-4" />
                </span>
              )}
              <div
                className={`rounded-lg p-2 max-w-[80%] ${
                  message.role === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {message.content}
              </div>
              {message.role === "user" && (
                <Avatar className="ml-2">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="User"
                  />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
        </ScrollArea>

        {/* Input area */}
        <div className="border-t p-6">
          <div className="flex items-center">
            <Input
              placeholder="Type your message here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 mr-2"
            />
            <Button onClick={handleSend}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;
