import { Bot, Navigation, PanelsTopLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <div className="flex flex-col gap-y-4 w-full h-screen border-r border-gray-300">
      <header className="text-xl p-4 border-b">
        <span className="flex items-center gap-x-1">
          <Navigation className="mr-2" size={20} />
          <h2>Travel Right</h2>
        </span>
      </header>
      <ul className="flex flex-col gap-3 w-full h-full px-2 pt-4">
        <li className="flex gap-x-2 items-center px-0">
          <Link href="/dashboard" className="link-layout">
            <PanelsTopLeft size={16} />
            Dashboard
          </Link>
        </li>
        <li className="flex gap-x-2 items-center">
          <Link href="/models" className="link-layout">
            <Bot size={20} />
            Models
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
