import React, { useState } from "react";
import "./styles.css";

type PostCardProps = {
  title: string;
  description: string;
  images: string;
};

const PostCard: React.FC<PostCardProps> = ({ title, description, images }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const containerStyle = {
    "--translate-y": isExpanded ? "0px" : "-5px",
  } as React.CSSProperties;

  return (
    <div
      className={`postCardContainer ${isExpanded ? "expanded" : ""}`}
      onClick={toggleExpand}
      style={containerStyle}
    >
      <div className="postCardImage">
        <img src={images} alt={title} />
      </div>
      <div className="postCardContent">
        <h3 className="postCardTitle">{title}</h3>
        <p className="postCardDescription">{description}</p>
      </div>
    </div>
  );
};

export default PostCard;
