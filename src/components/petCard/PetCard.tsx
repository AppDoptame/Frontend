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
    <div className="petCardContainer">
      <div className="petCardImage">
        <img
          src={images}
          alt={name}
          width={300}
          height={300}
          // objectFit="cover"
        />
      </div>
      <div className="petCardContent">
        <h3 className="petCardTitle">{name}</h3>
        <p className="petCardDescription">Vacunas: {vaccines}</p>
        <p className="petCardDescription">Raza: {race}</p>
        <p className="petCardDescription">Edad: {age} años</p>
        <p className="petCardDescription">Sexo: {sex}</p>
        <p className="petCardDescription">
          {city}, {department}
        </p>
        <p className="petCardDescription">{sterilized}</p>
        {sterilized ? (
          <p className="petCardDescription">Esterilizado</p>
        ) : (
          <p className="petCardDescription">Sin Esterilizar</p>
        )}
        {adopted ? (
          <div>
            <p className="petCardDescription">No adoptado</p>
            <button className="button1">¡Adoptame!</button>
          </div>
        ) : (
          <p className="petCardDescription">Adoptado</p>
        )}
        <p className="petCardDescription">{email}</p>
      </div>
    </div>
  );
};

export default PetCard;
