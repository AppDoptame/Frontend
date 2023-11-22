"use client";

import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { FaEnvelope } from "react-icons/fa6";
import { AuthContext } from "@/context";


import "./styles.css";

import Sidebar from "@/components/sidebar/Sidebar";
import TopBar from "@/components/topBar/TopBar";
import BottomBar from "@/components/bottomBar/BottomBar";
import PostSection from "@/components/postCardSection/PostCardSection";
import PostCardFeature from "@/components/CardFeatures/CardFeature";

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
  const context = useContext(AuthContext);
  const router = useRouter();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Verifica si el usuario no está autenticado (logged es falso)
    if (!context.userData.logged) {
      // Redirige al usuario a la página de inicio de sesión
      router.push('/login'); // Ajusta la ruta según la configuración de tu aplicación
    }
  }, [context.userData.logged, router]);

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
