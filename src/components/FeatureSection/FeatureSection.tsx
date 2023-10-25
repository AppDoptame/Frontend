import React from "react";
import "./styles.css";
import CardFeature from "../CardFeatures/CardFeature";

type FeatureData = {
  title: string;
  description: string;
  icon: string;
};

const FeatureData: FeatureData[] = [
  {
    title: "Post 1",
    description: "Description for Post 1",
    icon: "/AppDoptame/logo_ligthblue.png",
  },
  {
    title: "Post 2",
    description: "Description for Post 2",
    icon: "/AppDoptame/logo_ligthblue.png",
  },
  {
    title: "Post 3",
    description: "Description for Post 3", 
    icon: "/AppDoptame/logo_ligthblue.png",
  },
  {
    title: "Post 4",
    description: "Description for Post 4", 
    icon: "/AppDoptame/logo_ligthblue.png",
  },
  {
    title: "Post 5",
    description: "Description for Post 5", 
    icon: "/AppDoptame/logo_ligthblue.png",
  },
];

type FeatureSectionProps = {
  features: FeatureData[];
};

const FeatureSection: React.FC<FeatureSectionProps> = ({ features }) => {
  return (
    <div className="postSectionContainer">
      {features.map((feature, index) => (
        <CardFeature
          key={index}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
        />
      ))}
    </div>
  );
};

export default FeatureSection;
