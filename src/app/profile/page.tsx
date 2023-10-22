"use client";

import React, { useState } from "react";
import "./styles.css";

import Sidebar from "@/components/sidebar/Sidebar";
import TopBar from "@/components/topBar/TopBar";
import BottomBar from "@/components/bottomBar/BottomBar";
import ProfileSection from "@/components/profileSection/ProfileSection";
import ProfilePets from "@/components/profilePets/ProfilePets";

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
        <ProfilePets email="a2@gmail.com" />
      </main>
      <footer className="pad">
        <BottomBar />
      </footer>
    </div>
  );
};

export default Home;
