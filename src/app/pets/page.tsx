"use client";

import React from "react";
import "./styles.css";
import Sidebar from "@/components/sidebar/Sidebar";
import TopBar from "@/components/topBar/TopBar";
import BottomBar from "@/components/bottomBar/BottomBar";
import AllPets from "@/components/allPets/ProfilePets";

const Pets = () => {
  return (
    <div className="page-dashboard">
      <aside className="pad">
        <Sidebar />
      </aside>
      <header className="pad">
        <TopBar />
      </header>
      <main className="pad">
        <AllPets />
      </main>
      <footer className="pad">
        <BottomBar />
      </footer>
    </div>
  );
};

export default Pets;
