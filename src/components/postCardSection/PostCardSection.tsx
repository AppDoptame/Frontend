import React from "react";
import PostCard from "../postCard/PostCard";
import "./styles.css";

type PostData = {
  title: string;
  description: string;
  images: string;
};

type PostSectionProps = {
  posts: PostData[];
};

const PostSection: React.FC<PostSectionProps> = ({ posts }) => {
  return (
    <div className="postSectionContainer">
      {posts.map((post, index) => (
        <PostCard
          key={index}
          title={post.title}
          description={post.description}
          images={post.images[0]}
        />
      ))}
    </div>
  );
};

export default PostSection;
