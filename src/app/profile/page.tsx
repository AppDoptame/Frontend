"use client";

import React, { useState } from "react";
import "./styles.css";

import Sidebar from "@/components/sidebar/Sidebar";
import TopBar from "@/components/topBar/TopBar";
import BottomBar from "@/components/bottomBar/BottomBar";
import ProfileSection from "@/components/profileSection/ProfileSection";

const Home = () => {
  return (
    <div className="page-dashboard">
      <aside className="pad">
        <Sidebar />
      </aside>
      <header className="pad">
        <TopBar />
      </header>
      <main className="pad">
        <ProfileSection />
      </main>
      <footer className="pad">
        <BottomBar />
      </footer>
    </div>
  );
};

export default Home;
