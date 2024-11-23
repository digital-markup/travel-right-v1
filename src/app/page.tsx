import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import ChatContainer from "./components/chat-container";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="px-4 lg:px-6 flex items-center">
        <Button
          variant="ghost"
          className="text-lg font-bold text-gray-900 dark:text-gray-100"
        >
          TravelRight
        </Button>
        <div className="ml-auto flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
            <span className="sr-only">Settings</span>
          </Button>
        </div>
      </header>
      <ChatContainer />
    </div>
  );
}
