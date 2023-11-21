import React from "react";
import "./styles.css";

type PetCardProps = {
  name: string;
  vaccines: string[];
  race: string;
  age: number;
  sex: string;
  city: string;
  department: string;
  sterilized: boolean;
  adopted: boolean;
  images: string;
  email: string;
};

const PetCard: React.FC<PetCardProps> = ({
  name,
  vaccines,
  images,
  race,
  age,
  sex,
  city,
  department,
  sterilized,
  adopted,
  email,
}) => {
  return (
    <div className="postCardContainer">
      <div className="postCardImage">
        <img
          src={images}
          alt={name}
          width={300}
          height={300}
          // objectFit="cover"
        />
      </div>
      <div className="postCardContent">
        <h3 className="postCardTitle">{name}</h3>
        <p className="postCardDescription">Vacunas: {vaccines}</p>
        <p className="postCardDescription">Raza: {race}</p>
        <p className="postCardDescription">Edad: {age} años</p>
        <p className="postCardDescription">Sexo: {sex}</p>
        <p className="postCardDescription">
          {city}, {department}
        </p>
        <p className="postCardDescription">{sterilized}</p>
        {sterilized ? (
        <p className="postCardDescription">Esterilizado</p>
        ) : (
          <p className="postCardDescription">Sin Esterilizar</p>
        )}
        {adopted ? (
          <div>
            <p className="postCardDescription">No adoptado</p>
            <button>¡Adoptame!</button>
          </div>
        ) : (
          <p className="postCardDescription">Adoptado</p>
        )}
        <p className="postCardDescription">{email}</p>
      </div>
    </div>
  );
};

export default PetCard;
