import React from "react";
import "./styles.css";
import Image from "next/image";

type PostCardProps = {
  title: string;
  description: string;
  images: string;
};

const PostCard: React.FC<PostCardProps> = ({
  title,
  description,
  images,
}) => {
  {console.log(images)}
  return (
    <div className="postCardContainer">
      <div className="postCardImage">
        <img
          src={images}
          alt={title}
          width={300}
          height={300}
          // objectFit="cover"
        />
      </div>
      <div className="postCardContent">
        <h3 className="postCardTitle">{title}</h3>
        <p className="postCardDescription">{description}</p>
      </div>
    </div>
  );
};

export default PostCard;
