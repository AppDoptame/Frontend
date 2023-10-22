import React, { useState } from "react";
import "./styles.css";
import Image from "next/image";
import {
  FaHouse,
  FaUser,
  FaMagnifyingGlass,
  FaDog,
  FaRightFromBracket,
  FaGear,
  FaBars,
} from "react-icons/fa6";

const MainSection = () => {
  return (
    <div className="posts-section">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default MainSection;
