import React from "react";
import "./styles.css";
import Image from "next/image";

type PostCardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

const PostCard: React.FC<PostCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="postCardContainer">
      <div className="postCardImage">
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={300}
          objectFit="cover"
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
