"use client";

import React, { useState } from "react";
import "./styles.css";

import PostSection from "@/components/postCardSection/PostCardSection";
import BottomBar from "@/components/bottomBar/BottomBar";
import Sidebar from "@/components/sidebar/Sidebar";
import TopBar from "@/components/topBar/TopBar";

const samplePosts = [
  {
    title: "Post 1",
    description: "Description for Post 1",
    imageUrl: "/AppDoptame/logo_ligthblue.png",
  },
  {
    title: "Post 2",
    description: "Description for Post 2",
    imageUrl: "/AppDoptame/logo_ligthblue.png",
  },
  {
    title: "Post 3",
    description: "Description for Post 2",
    imageUrl: "/AppDoptame/logo_ligthblue.png",
  },
  {
    title: "Post 4",
    description: "Description for Post 2",
    imageUrl: "/AppDoptame/logo_ligthblue.png",
  },
  {
    title: "Post 5",
    description: "Description for Post 2",
    imageUrl: "/AppDoptame/logo_ligthblue.png",
  },
];

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
        <PostSection posts={samplePosts} />
      </main>
      <footer className="pad">
        <BottomBar />
      </footer>
    </div>
  );
};

export default Home;
