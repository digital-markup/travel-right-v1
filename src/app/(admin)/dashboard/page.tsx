import React from "react";
import Sidebar from "../components/sidebar";
import UploadContainer from "./components/upload-container";

function DashboardPage() {
  return (
    <div className="w-full min-h-screen">
      <div className="grid grid-cols-[280px_1fr]">
        {/* sidebar */}
        <Sidebar />
        {/* content */}
        <div className="container mx-auto px-12 py-8">
          <header>
            <h2 className="text-3xl font-semibold capitalize">
              product dashboard
            </h2>
          </header>
          <section className="mt-14 w-full flex flex-row gap-x-6">
            {/* Upload container */}
            <UploadContainer />
          </section>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
