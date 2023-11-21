"use client";

import React, { useState, useEffect, useContext } from "react";


import "./styles.css";

import { AuthContext } from "@/context";
import Sidebar from "@/components/sidebar/Sidebar";
import TopBar from "@/components/topBar/TopBar";
import BottomBar from "@/components/bottomBar/BottomBar";
import PostSection from "@/components/postCardSection/PostCardSection";
import PostCardFeature from "@/components/CardFeatures/CardFeature";
import { FaEnvelope } from "react-icons/fa6";

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
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Función asincrónica para cargar datos
    async function fetchData() {
      try {
        const response = await fetch("https://9o6udz5tvk.execute-api.us-east-1.amazonaws.com/get-all-posts");
        const responseData = await response.json();
        console.log(responseData);
        setPosts(responseData);
      } catch (err) {}
    }

    fetchData();
  }, []);
  return (
    <div className="page-dashboard">
      <aside className="pad">
        <Sidebar />
      </aside>
      <header className="pad">
        {/* <TopBar /> */}
      </header>
      <main className="pad">
        <PostSection posts={posts} />
      </main>
      <footer className="pad">
        <BottomBar />
      </footer>
    </div>
  );
};

export default Home;
