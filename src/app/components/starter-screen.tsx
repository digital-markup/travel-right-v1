"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Navigation, Send } from "lucide-react";

interface StarterProps {
  messages: { role: string; content: string }[];
  setMessages: React.Dispatch<
    React.SetStateAction<{ role: string; content: string }[]>
  >;
}

function Starter({ messages, setMessages }: StarterProps) {
  const [input, setInput] = React.useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: "user", content: input }]);
      // Here you would typically send the message to an API and get a response
      // For this example, we'll just echo the user's message
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: `You said: ${input}` },
        ]);
      }, 1000);
      setInput("");
    }
  };
  return (
    <>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Navigation className="h-16 w-16 text-gray-600 dark:text-gray-400" />
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900 dark:text-gray-100">
                Welcome to Travel Right
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-400">
                Start a new conversation or continue where you left off.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-1 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-900 font-semibold text-xl">
                    Ask a question
                  </CardTitle>
                  <CardDescription>
                    Ask a question about your destination
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-2 py-6 items-center">
                    <Input
                      onChange={(e) =>
                        setMessages([
                          ...messages,
                          { role: "user", content: e.target.value },
                        ])
                      }
                      placeholder="Ask a question"
                    />
                    <Button className="h-12">
                      <Send className="h-4 w-4" onClick={handleSend} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 dark:border-gray-800">
        <p className="text-xs text-gray-600 dark:text-gray-400">
          © 2023 ChatGPT. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Button
            variant="link"
            className="text-xs text-gray-600 dark:text-gray-400"
          >
            Terms of Service
          </Button>
          <Button
            variant="link"
            className="text-xs text-gray-600 dark:text-gray-400"
          >
            Privacy
          </Button>
        </nav>
      </footer>
    </>
  );
}

export default Starter;
