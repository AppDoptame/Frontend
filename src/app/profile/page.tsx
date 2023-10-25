"use client";

import React, { useState, useContext } from "react";
import "./styles.css";

import Sidebar from "@/components/sidebar/Sidebar";
import TopBar from "@/components/topBar/TopBar";
import BottomBar from "@/components/bottomBar/BottomBar";
import ProfileSection from "@/components/profileSection/ProfileSection";
import ProfilePets from "@/components/profilePets/ProfilePets";
import { AuthContext } from "@/context";


const Home = () => {
  const context = useContext(AuthContext);


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
        <ProfilePets email={context.userData.email} />
      </main>
      <footer className="pad">
        <BottomBar />
      </footer>
    </div>
  );
};

export default Home;
